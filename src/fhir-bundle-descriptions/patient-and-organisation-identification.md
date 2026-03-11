---
layout: default
title: "Patient and organisation identification"
---

The NHS Health Check online uses standardised NHS identifiers to ensure patients and organisations are consistently identified across all resources in the FHIR Bundle. This document details the identification schemes used.

---

## Patient identification

### NHS Number

The **NHS Number** is the unique patient identifier used across all NHS services in England.

#### Identifier structure

```json
{
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  }
}
```

#### Specification

| Property | Value |
| --- | --- |
| System URI | [https://fhir.nhs.uk/Id/nhs-number](https://fhir.nhs.uk/Id/nhs-number) |
| Format | 10-digit number |
| Uniqueness | Unique per patient across NHS |


#### Usage pattern

The NHS Number is used as an **identifier reference** rather than a resource reference:

```json
{
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  }
}
```

This pattern is used because:

- The Patient resource is not included in the bundle- The patient is assumed to exist in the FHIR server- It allows resolution to the patient without bundling patient demographics

#### Where used

The NHS Number appears in these resources:

| Resource | Element |
| --- | --- |
| Composition | `subject.identifier` |
| Encounter | `subject.identifier` |
| Observation | `subject.identifier` |
| RiskAssessment | `subject.identifier` |
| DiagnosticReport | `subject.identifier` |
| QuestionnaireResponse | `subject.identifier` |

---

## Organisation identification

### ODS Organisation Code

The **Organisation Data Service (ODS)** maintains a registry of NHS organisations. Each organisation has a unique ODS code.

#### Identifier structure

```json
{
  "performer": [
    {
      "identifier": {
        "system": "https://fhir.nhs.uk/Id/ods-organization-code",
        "value": "R8N8C"
      }
    }
  ]
}
```

#### Specification

| Property | Value |
| --- | --- |
| System URI | [https://fhir.nhs.uk/Id/ods-organization-code](https://fhir.nhs.uk/Id/ods-organization-code) |
| Format | Alphanumeric (typically 5 characters) |
| Registry | ODS Portal |

#### ODS code lookup

ODS codes can be verified using:

- **ODS Portal**: [https://odsportal.digital.nhs.uk/](https://odsportal.digital.nhs.uk/)

#### Usage contexts

ODS codes are used for:

| Context | Element | Purpose |
| --- | --- | --- |
| Document Author | `Composition.author.identifier` | Who created the document |
| Service Provider | `Encounter.serviceProvider.identifier` | Organisation providing the service |
| Observation Performer | `Observation.performer.identifier` | Who made the observation |
| Report Performer | `DiagnosticReport.performer.identifier` | Who created the report |
| Questionnaire Author | `QuestionnaireResponse.author.identifier` | Who recorded the answers |

#### Example: service provider

```json
{
  "serviceProvider": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/ods-organization-code",
      "value": "R8N8C"
    }
  }
}
```

---

## Bundle identification

### Health Check session identifier

Each NHS Health Check session has a unique identifier used for:

- Bundle identification- Encounter identification- Traceability

#### Identifier structure

```json
{
  "identifier": {
    "system": "http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/",
    "value": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06"
  }
}
```

#### Specification

| Property | Value |
| --- | --- |
| System URI | [http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/](http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/) |
| Format | UUID (version 4) |
| Scope | Unique per health check session |

#### Where used

| Resource | Element |
| --- | --- |
| Bundle | `identifier` |
| Encounter | `identifier` |

---

## Reference patterns

### Identifier-based references

Most references in the bundle use **identifier-based** references:

```json
{
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  }
}
```


### Resource references

For resources **within the bundle**, direct resource references are used:

```json
{
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  }
}
```

**Format**: `ResourceType/id`

## Summary Table

| Identifier Type | System URI | Example Value |
| --- | --- | --- |
| NHS Number | [https://fhir.nhs.uk/Id/nhs-number](https://fhir.nhs.uk/Id/nhs-number) | `9999999999` |
| ODS Code | [https://fhir.nhs.uk/Id/ods-organization-code](https://fhir.nhs.uk/Id/ods-organization-code) | `R8N8C` |
| Session ID | [http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/](http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/) | UUID |
