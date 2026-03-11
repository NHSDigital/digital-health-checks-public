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

  // Add NHS Design System classes to markdown-generated tables
  eleventyConfig.addTransform('nhsuk-tables', function (content) {
    if ((this.page.outputPath || '').endsWith('.html')) {
      content = content
        .replace(/<table>/g, '<table class="nhsuk-table">')
        .replace(/<thead>/g, '<thead class="nhsuk-table__head">')
        .replace(/<tbody>/g, '<tbody class="nhsuk-table__body">')
        .replace(/<tr>/g, '<tr class="nhsuk-table__row">')
        .replace(/<th>/g, '<th class="nhsuk-table__header" scope="col">')
        .replace(/<td>/g, '<td class="nhsuk-table__cell">');
    }
    return content;
  });

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
