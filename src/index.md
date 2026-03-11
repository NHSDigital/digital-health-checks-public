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

- [Development guide](/dev-guide/)
- [Integration overview](/dev-guide/integration-overview/)
- [Health Check data flow](/dev-guide/health-check-data-flow/)
- [Acknowledgement flow](/dev-guide/acknowledgement-flow/)

## FHIR Bundle Descriptions

Reference documentation for FHIR bundle structures used in this integration.

- [FHIR Bundle specification](/fhir-bundle-descriptions/)
- [Overview](/fhir-bundle-descriptions/overview/)
- [FHIR standard reference](/fhir-bundle-descriptions/fhir-standard-reference/)
- [Terminology standards](/fhir-bundle-descriptions/terminology-standards/)
- [Bundle structure](/fhir-bundle-descriptions/bundle-structure/)
- [Patient and Organisation Identification](/fhir-bundle-descriptions/patient-and-organisation-identification/)
- [Composition resource](/fhir-bundle-descriptions/composition-resource/)
- [Encounter resource](/fhir-bundle-descriptions/encounter-resource/)
- [Vital signs observations](/fhir-bundle-descriptions/vital-signs-observations/)
- [Social history observations](/fhir-bundle-descriptions/social-history-observations/)
- [Physical activity observations](/fhir-bundle-descriptions/physical-activity-observations/)
- [Laboratory results](/fhir-bundle-descriptions/laboratory-results/)
- [Risk assessment](/fhir-bundle-descriptions/risk-assessment/)
- [Diagnostic report](/fhir-bundle-descriptions/diagnostic-report/)
- [Questionnaire response](/fhir-bundle-descriptions/questionnaire-response/)
