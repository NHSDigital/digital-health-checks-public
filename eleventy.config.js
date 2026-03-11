import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import pluginMermaid from '@kevingimbel/eleventy-plugin-mermaid';

export default async function (eleventyConfig) {
  // Layout aliases can make templates more portable
  eleventyConfig.addLayoutAlias('default', 'base.njk');

  // add support for syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // add support for mermaid diagrams
  eleventyConfig.addPlugin(pluginMermaid);

  // pass static assets through
  eleventyConfig.addPassthroughCopy('./src/assets');

  // pass through images from content directories
  eleventyConfig.addPassthroughCopy('./src/dev-guide/assets');
  eleventyConfig.addPassthroughCopy('./src/fhir-bundle-descriptions/assets');

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    passthroughFileCopy: true,
    pathPrefix: '/digital-health-checks-public/',
  };
}
