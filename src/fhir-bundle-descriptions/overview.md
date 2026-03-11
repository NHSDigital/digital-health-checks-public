---
layout: default
title: "Document purpose"
---
{% from "image-pop-out.njk" import imagePopOut %}

This documentation provides comprehensive guidance for partners integrating with the NHS Health Check online service. It describes the FHIR (Fast Healthcare Interoperability Resources) data structures transmitted to the [NHS Patient Data Manager](https://digital.nhs.uk/services/patient-data-manager), a FHIR-compliant data store.

Partners consuming this data will find detailed specifications for:
- understanding the structure and content of FHIR bundles
- interpreting clinical observations and risk assessments
- mapping terminology codes to clinical concepts
- integrating data into downstream systems


## Data flow
{{ imagePopOut("/digital-health-checks-public/fhir-bundle-descriptions/assets/Integration-overview.png", "Integration diagram") }}

## Involved resources

Each completed NHS Health Check generates a FHIR Transaction Bundle containing:

| Resource Type | Description |
| --- | --- |
| **Composition** | Document index organising all health check data into sections |
| **Encounter** | The virtual health check session details |
| **Observation** | Clinical measurements (vital signs, laboratory results, lifestyle factors) |
| **RiskAssessment** | Cardiovascular (QRISK3) and diabetes risk scores |
| **DiagnosticReport** | Follow-up recommendations and conclusions |
| **QuestionnaireResponse** | Patient-reported medical history answers (QRisk3 related) |
