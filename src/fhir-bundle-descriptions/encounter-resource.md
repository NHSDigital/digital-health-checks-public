---
layout: default
title: "Encounter resource"
---

## Overview

The **Encounter** resource represents the NHS Health Check session - the healthcare interaction during which the health check was conducted. This is a virtual encounter as the NHS Digital Health Check is completed online.

## Resource Purpose

The Encounter:

- Records the health check session details- Provides temporal context (when the check occurred)- Identifies the service provider- Links all clinical observations to a single healthcare event

## Resource Structure

### Complete Example

```json
{
  "resourceType": "Encounter",
  "id": "fa991ce0-1950-4595-ab59-6ce1568e586e",
  "identifier": [
    {
      "system": "http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/",
      "value": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06"
    }
  ],
  "status": "finished",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "VR",
    "display": "virtual"
  },
  "type": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "273479001",
          "display": "General health questionnaire"
        }
      ]
    }
  ],
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "period": {
    "start": "2025-04-24T13:00:00+00:00",
    "end": "2025-04-24T13:00:00+00:00"
  },
  "serviceProvider": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/ods-organization-code",
      "value": "R8N8C"
    }
  }
}
```

## Element Specification

### Core Elements

| Element | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `id` | 1..1 | id | Unique resource identifier (UUID) |
| `identifier` | 0..* | Identifier | Business identifiers |
| `status` | 1..1 | code | Encounter state |
| `class` | 1..1 | Coding | Encounter classification |
| `type` | 0..* | CodeableConcept | Type of encounter |
| `subject` | 1..1 | Reference | Patient identifier |
| `period` | 0..1 | Period | Encounter time period |
| `serviceProvider` | 0..1 | Reference | Organisation providing service |

## Element Details

### Identifier

Links the encounter to the health check session:

```json
{
  "identifier": [
    {
      "system": "http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/",
      "value": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06"
    }
  ]
}
```

This identifier matches the Bundle identifier, allowing correlation.

### Status

The encounter status indicates the current state:

```json
{
  "status": "finished"
}
```

| Status | Description |
| --- | --- |
| `finished` | The encounter has ended (health check completed) |

For submitted health checks, the status will always be `finished`.

### Class

The encounter class indicates this is a virtual/remote encounter:

```json
{
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "VR",
    "display": "virtual"
  }
}
```

| Code | Display | Description |
| --- | --- | --- |
| `VR` | virtual | Virtual encounter (online, no physical attendance) |

**System**: `[http://terminology.hl7.org/CodeSystem/v3-ActCode](http://terminology.hl7.org/CodeSystem/v3-ActCode)`

### Type

The encounter type describes what kind of encounter this is:

```json
{
  "type": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "273479001",
          "display": "General health questionnaire"
        }
      ]
    }
  ]
}
```

| Code | Display | System |
| --- | --- | --- |
| `273479001` | General health questionnaire | SNOMED CT |

### Subject

Identifies the patient using their NHS Number:

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

### Period

The time period of the encounter:

```json
{
  "period": {
    "start": "2025-04-24T13:00:00+00:00",
    "end": "2025-04-24T13:00:00+00:00"
  }
}
```

| Element | Type | Description |
| --- | --- | --- |
| `start` | dateTime | When the encounter began |
| `end` | dateTime | When the encounter finished |

**Note**: For the digital health check, start and end times may be the same if recorded as a single point in time.

### Service Provider

The organisation providing the NHS Health Check service:

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

This uses the ODS organisation code to identify the provider.

## Relationship to Other Resources

The Encounter is referenced by all clinical resources in the bundle:

```
Encounter
├── referenced by → Composition.encounter
├── referenced by → Observation.encounter
├── referenced by → RiskAssessment.encounter
├── referenced by → DiagnosticReport.encounter
└── referenced by → QuestionnaireResponse.encounter
```

### Example Reference

Other resources reference the encounter using:

```json
{
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  }
}
```

## UK Core Conformance

This resource conforms to:

- **Profile**: `[https://fhir.hl7.org.uk/StructureDefinition/UKCore-Encounter](https://fhir.hl7.org.uk/StructureDefinition/UKCore-Encounter)`

Key conformance points:

- `status` is required- `class` uses HL7 ActCode vocabulary- `subject` references patient by NHS Number
