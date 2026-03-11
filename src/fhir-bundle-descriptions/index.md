---
layout: default
title: "FHIR Bundle specification"
---
{% from "contents-list.njk" import contentsList %}
{% from "warning-callout.njk" import warningCallout %}

This section provides a comprehensive overview of how the **NHS Digital Health Check** service constructs FHIR resources and how partner systems should interpret them.

{{ warningCallout("Important", 'All FHIR resources conform to the <a href="https://simplifier.net/hl7fhirukcorer4">UK Core FHIR standard</a>. This guide serves as a complementary reference to help interpret how those standards are applied within the NHS Digital Health Check context.') }}

The documentation is organised as follows:

- **Foundation pages** (01-05): Cover general principles including standards, terminology, bundle structure, and patient identification
- **Resource-specific pages** (06 onwards): Provide detailed specifications for each resource type (Composition, Encounter, Observations, Risk Assessments, etc.)

{{ contentsList([
  { title: "FHIR Bundle specification", url: "/digital-health-checks-public/fhir-bundle-descriptions/" },
  { title: "Overview", url: "/digital-health-checks-public/fhir-bundle-descriptions/overview/" },
  { title: "FHIR standard reference", url: "/digital-health-checks-public/fhir-bundle-descriptions/fhir-standard-reference/" },
  { title: "Terminology standards", url: "/digital-health-checks-public/fhir-bundle-descriptions/terminology-standards/" },
  { title: "Bundle structure", url: "/digital-health-checks-public/fhir-bundle-descriptions/bundle-structure/" },
  { title: "Patient and Organisation Identification", url: "/digital-health-checks-public/fhir-bundle-descriptions/patient-and-organisation-identification/" },
  { title: "Composition resource", url: "/digital-health-checks-public/fhir-bundle-descriptions/composition-resource/" },
  { title: "Encounter resource", url: "/digital-health-checks-public/fhir-bundle-descriptions/encounter-resource/" },
  { title: "Vital signs observations", url: "/digital-health-checks-public/fhir-bundle-descriptions/vital-signs-observations/" },
  { title: "Social history observations", url: "/digital-health-checks-public/fhir-bundle-descriptions/social-history-observations/" },
  { title: "Physical activity observations", url: "/digital-health-checks-public/fhir-bundle-descriptions/physical-activity-observations/" },
  { title: "Laboratory results", url: "/digital-health-checks-public/fhir-bundle-descriptions/laboratory-results/" },
  { title: "Risk assessment", url: "/digital-health-checks-public/fhir-bundle-descriptions/risk-assessment/" },
  { title: "Diagnostic report", url: "/digital-health-checks-public/fhir-bundle-descriptions/diagnostic-report/" },
  { title: "Questionnaire response", url: "/digital-health-checks-public/fhir-bundle-descriptions/questionnaire-response/" }
], "FHIR Bundle specification") }}
