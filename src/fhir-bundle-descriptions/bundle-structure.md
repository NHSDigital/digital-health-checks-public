---
layout: default
title: "Bundle structure"
---

The NHS Digital Health Check transmits data to the NHS Patient Data Manager as a **FHIR Transaction Bundle**. This document describes the bundle structure, transaction semantics, and processing expectations.

## Bundle Type

The bundle uses the `transaction` type, which ensures atomic processing - either all resources are successfully processed, or none are.

```json
{
  "resourceType": "Bundle",
  "type": "transaction"
}
```

### Bundle Structure

### Top-Level Elements

```json
{
  "resourceType": "Bundle",
  "id": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06",
  "identifier": {
    "system": "http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/",
    "value": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06"
  },
  "type": "transaction",
  "timestamp": "2024-10-03T10:00:00+00:00",
  "entry": [ ... ]
}
```

### Element Descriptions

| Element | Type | Description |
| --- | --- | --- |
| `resourceType` | string | Always `"Bundle"` |
| `id` | id | Unique bundle identifier (UUID) |
| `identifier` | Identifier | Business identifier for the health check |
| `type` | code | Bundle type - always `"transaction"` |
| `timestamp` | instant | When the bundle was assembled (ISO 8601) |
| `entry` | array | Array of bundle entries containing resources |

### Bundle Identifier

The bundle identifier uniquely identifies this NHS Health Check submission:

```json
{
  "identifier": {
    "system": "http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/",
    "value": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06"
  }
}
```

- **System**: NHS Health Check Online service namespace- **Value**: UUID matching the bundle `id`

## Bundle Entry Structure

Each entry in the bundle follows this structure:

```json
{
  "fullUrl": "urn:uuid:8890ba53-9ee2-45c2-a63d-79f06f7ef421",
  "resource": {
    "resourceType": "...",
    "id": "8890ba53-9ee2-45c2-a63d-79f06f7ef421",
    ...
  },
  "request": {
    "method": "PUT",
    "url": "ResourceType/8890ba53-9ee2-45c2-a63d-79f06f7ef421",
    "ifNoneMatch": "*"
  }
}
```

### Entry Elements

| Element | Description |
| --- | --- |
| `fullUrl` | Temporary UUID URN for internal references |
| `resource` | The FHIR resource being transmitted |
| `request` | Transaction request details |

### Full URL Format

Within the transaction bundle, resources use `urn:uuid:` URNs as temporary identifiers:

```
urn:uuid:8890ba53-9ee2-45c2-a63d-79f06f7ef421
```

These are used for:

- Internal references within the bundle- Resolution by the FHIR server during processing

## Transaction Request

### Request Structure

```json
{
  "request": {
    "method": "PUT",
    "url": "Observation/8890ba53-9ee2-45c2-a63d-79f06f7ef421",
    "ifNoneMatch": "*"
  }
}
```

### Request Elements

| Element | Value | Description |
| --- | --- | --- |
| `method` | `PUT` | HTTP method for the operation |
| `url` | `ResourceType/id` | Target URL for the resource |
| `ifNoneMatch` | `*` | Conditional create (only if not exists) |

### Idempotency

The `ifNoneMatch: "*"` header ensures idempotent processing:

- If the resource **does not exist**: Create it- If the resource **already exists**: Skip creation (no duplicate)

This allows safe resubmission of bundles without creating duplicate data.

## Resource Order in Bundle

Resources are ordered logically, with the Composition first (as the document index), followed by referenced resources:

- **Composition** - Document index and section structure- **Encounter** - The health check session- **Observations** - Clinical measurements (grouped by type)
Vital Signs (height, weight, BMI, blood pressure)
Social History (family history, smoking, alcohol)
Physical Activity (GPPAQ)
Laboratory Results (cholesterol, HbA1c)- **RiskAssessments** - QRISK3 and Leicester Diabetes scores- **DiagnosticReport** - Follow-up recommendations- **QuestionnaireResponse** - Medical history answers

## Reference Resolution

### Internal References

Within the bundle, resources reference each other using relative references:

```json
{
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  }
}
```

The FHIR server resolves these references during transaction processing.

### Reference Pattern

References follow the format: `ResourceType/id`

Examples:

- `Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e`- `Observation/3ea3d79d-85d5-453b-92e7-0d034ee7b6a0`- `RiskAssessment/bf13dfe6-6483-4b1f-878f-6f7b8673e13a`

## Timestamp Format

### ISO 8601 with Timezone

All timestamps use ISO 8601 format with timezone offset:

```
2024-10-03T10:00:00+00:00
```

| Component | Example | Description |
| --- | --- | --- |
| Date | `2024-10-03` | Year-Month-Day |
| Time | `T10:00:00` | Hours:Minutes:Seconds |
| Timezone | `+00:00` | UTC offset (UK typically +00:00 or +01:00 BST) |

### Timezone Handling

- Winter (GMT): `+00:00`- Summer (BST): `+01:00`

Consuming systems should handle both timezone offsets appropriately.

## Complete Bundle Example (Truncated)

```json
{
  "resourceType": "Bundle",
  "id": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06",
  "identifier": {
    "system": "http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/",
    "value": "ffa5f4ad-ddd0-40d6-bc0e-169f5696bc06"
  },
  "type": "transaction",
  "timestamp": "2024-10-03T10:00:00+00:00",
  "entry": [
    {
      "fullUrl": "urn:uuid:8890ba53-9ee2-45c2-a63d-79f06f7ef421",
      "resource": {
        "resourceType": "Composition",
        "id": "8890ba53-9ee2-45c2-a63d-79f06f7ef421",
        "status": "final",
        "type": { ... },
        "section": [ ... ]
      },
      "request": {
        "method": "PUT",
        "url": "Composition/8890ba53-9ee2-45c2-a63d-79f06f7ef421",
        "ifNoneMatch": "*"
      }
    },
    {
      "fullUrl": "urn:uuid:fa991ce0-1950-4595-ab59-6ce1568e586e",
      "resource": {
        "resourceType": "Encounter",
        "id": "fa991ce0-1950-4595-ab59-6ce1568e586e",
        ...
      },
      "request": {
        "method": "PUT",
        "url": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e",
        "ifNoneMatch": "*"
      }
    }
    // ... additional entries
  ]
}
```

## Processing Expectations

### For FHIR Servers (NHS Patient Data Manager)

- Process the bundle as an atomic transaction- Resolve all internal references- Apply conditional creates (`ifNoneMatch`)- Return a transaction response bundle with outcomes

### For Consuming Partners

- Retrieve resources via FHIR API queries- Navigate from Composition to find related resources- Follow references to build complete picture- Handle missing resources gracefully

## Retrieving Health Check Data from PDM

### Using the $document Operation

To retrieve a complete NHS Health Check as a single bundle, use the FHIR `$document` operation on the Composition resource. This operation returns all resources referenced by the Composition in a single document Bundle.

## Error Handling

If any resource in the transaction fails validation or processing:

- The entire transaction is rolled back- No resources are persisted- An OperationOutcome is returned with error details
