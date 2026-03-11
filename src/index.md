---
layout: default
title: "NHS Digital Health Check"
---
{% from "contents-list.njk" import contentsList %}

This repository contains the technical documentation for integrating with the **NHS Digital Health Check online service**. It is aimed at GP IT system suppliers and other partners who need to consume health check data via FHIR-based APIs.

The documentation is split into two sections:

- **Dev Guide** — Start here. It explains the overall integration architecture, the data flow from the health check service to GP systems, and the acknowledgement process.
- **FHIR Bundle Descriptions** — A detailed reference for the FHIR resources transmitted as part of each health check. Use this section to understand the structure, coding, and clinical content of individual resources.

Pages are numbered to suggest a reading order, but each page is self-contained and can be consulted independently.

---

## Dev Guide

Step-by-step guidance for integrating with GP IT systems.

{{ contentsList([
  { title: "Development guide", url: "/digital-health-checks-public/dev-guide/" },
  { title: "Integration overview", url: "/digital-health-checks-public/dev-guide/integration-overview/" },
  { title: "Health Check data flow", url: "/digital-health-checks-public/dev-guide/health-check-data-flow/" },
  { title: "Acknowledgement flow", url: "/digital-health-checks-public/dev-guide/acknowledgement-flow/" }
]) }}

## FHIR Bundle Descriptions

Reference documentation for FHIR bundle structures used in this integration.

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
]) }}
