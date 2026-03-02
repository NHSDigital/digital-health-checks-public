## NHS Digital Health Check — Developer Documentation

This repository contains the technical documentation for integrating with the **NHS Digital Health Check online service**. It is aimed at GP IT system suppliers and other partners who need to consume health check data via FHIR-based APIs.

The documentation is split into two sections:

- **Dev Guide** — Start here. It explains the overall integration architecture, the data flow from the health check service to GP systems, and the acknowledgement process.
- **FHIR Bundle Descriptions** — A detailed reference for the FHIR resources transmitted as part of each health check. Use this section to understand the structure, coding, and clinical content of individual resources.

Pages are numbered to suggest a reading order, but each page is self-contained and can be consulted independently.

---

## Site contents

### Dev Guide

Step-by-step guidance for integrating with GP IT systems.

- [Development guide](dev-guide/index.md)
- [What it is](dev-guide/what-it-is.md)
- [Integration overview](dev-guide/integration-overview.md)
- [Health Check data flow](dev-guide/health-check-data-flow.md)
- [Acknowledgement flow](dev-guide/acknowledgement-flow.md)

### FHIR Bundle Descriptions

Reference documentation for FHIR bundle structures used in this integration.

- [FHIR Bundle specification](fhir-bundle-descriptions/00-index.md)
- [Overview](fhir-bundle-descriptions/01-overview.md)
- [FHIR standard reference](fhir-bundle-descriptions/02-fhir-standard-reference.md)
- [Terminology standards](fhir-bundle-descriptions/03-terminology-standards.md)
- [Bundle structure](fhir-bundle-descriptions/04-bundle-structure.md)
- [Patient and Organisation Identification](fhir-bundle-descriptions/05-patient-and-organisation-identification.md)
- [Composition resource](fhir-bundle-descriptions/06-composition-resource.md)
- [Encounter resource](fhir-bundle-descriptions/07-encounter-resource.md)
- [Vital signs observations](fhir-bundle-descriptions/08-vital-signs-observations.md)
- [Social history observations](fhir-bundle-descriptions/09-social-history-observations.md)
- [Physical activity observations](fhir-bundle-descriptions/10-physical-activity-observations.md)
- [Laboratory results](fhir-bundle-descriptions/11-laboratory-results.md)
- [Risk assessment](fhir-bundle-descriptions/12-risk-assessment.md)
- [Diagnostic report](fhir-bundle-descriptions/13-diagnostic-report.md)
- [Questionnaire response](fhir-bundle-descriptions/14-questionnaire-response.md)
