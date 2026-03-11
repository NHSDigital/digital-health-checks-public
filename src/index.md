---
layout: default
title: "NHS Digital Health Check"
---

This repository contains the technical documentation for integrating with the **NHS Digital Health Check online service**. It is aimed at GP IT system suppliers and other partners who need to consume health check data via FHIR-based APIs.

The documentation is split into two sections:

- **Dev Guide** — Start here. It explains the overall integration architecture, the data flow from the health check service to GP systems, and the acknowledgement process.
- **FHIR Bundle Descriptions** — A detailed reference for the FHIR resources transmitted as part of each health check. Use this section to understand the structure, coding, and clinical content of individual resources.

Pages are numbered to suggest a reading order, but each page is self-contained and can be consulted independently.

---

## Dev Guide

Step-by-step guidance for integrating with GP IT systems.

- [Development guide](/digital-health-checks-public/dev-guide/)
- [Integration overview](/digital-health-checks-public/dev-guide/integration-overview/)
- [Health Check data flow](/digital-health-checks-public/dev-guide/health-check-data-flow/)
- [Acknowledgement flow](/digital-health-checks-public/dev-guide/acknowledgement-flow/)

## FHIR Bundle Descriptions

Reference documentation for FHIR bundle structures used in this integration.

- [FHIR Bundle specification](/digital-health-checks-public/fhir-bundle-descriptions/)
- [Overview](/digital-health-checks-public/fhir-bundle-descriptions/overview/)
- [FHIR standard reference](/digital-health-checks-public/fhir-bundle-descriptions/fhir-standard-reference/)
- [Terminology standards](/digital-health-checks-public/fhir-bundle-descriptions/terminology-standards/)
- [Bundle structure](/digital-health-checks-public/fhir-bundle-descriptions/bundle-structure/)
- [Patient and Organisation Identification](/digital-health-checks-public/fhir-bundle-descriptions/patient-and-organisation-identification/)
- [Composition resource](/digital-health-checks-public/fhir-bundle-descriptions/composition-resource/)
- [Encounter resource](/digital-health-checks-public/fhir-bundle-descriptions/encounter-resource/)
- [Vital signs observations](/digital-health-checks-public/fhir-bundle-descriptions/vital-signs-observations/)
- [Social history observations](/digital-health-checks-public/fhir-bundle-descriptions/social-history-observations/)
- [Physical activity observations](/digital-health-checks-public/fhir-bundle-descriptions/physical-activity-observations/)
- [Laboratory results](/digital-health-checks-public/fhir-bundle-descriptions/laboratory-results/)
- [Risk assessment](/digital-health-checks-public/fhir-bundle-descriptions/risk-assessment/)
- [Diagnostic report](/digital-health-checks-public/fhir-bundle-descriptions/diagnostic-report/)
- [Questionnaire response](/digital-health-checks-public/fhir-bundle-descriptions/questionnaire-response/)
