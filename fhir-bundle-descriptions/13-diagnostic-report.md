## Overview

The **DiagnosticReport** resource contains the conclusions and follow-up recommendations resulting from the NHS Health Check. It summarises the findings and indicates what actions should be taken.

## Resource Purpose

The DiagnosticReport:

- Provides an overall conclusion for the health check
- Indicates follow-up urgency level
- Summarises recommendations for each risk area
- Serves as the actionable output of the assessment

## Resource Structure

### Complete Example

```json
{
  "resourceType": "DiagnosticReport",
  "id": "c4020612-619e-4a3d-a2e1-3d20c64167b4",
  "status": "final",
  "code": {
    "text": "Generic comment"
  },
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  },
  "effectiveDateTime": "2025-04-14",
  "performer": [
    {
      "identifier": {
        "system": "https://fhir.nhs.uk/Id/ods-organization-code",
        "value": "R8N8C"
      }
    }
  ],
  "conclusion": "Follow up comments - QRISK3 cardiovascular disease 10 year risk calculator score (observable entity) - Urgent Follow-up. Serum cholesterol level (observable entity) - Routine Follow-up. Haemoglobin A1c level (observable entity) - Routine Follow-up",
  "conclusionCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "2242661000000109",
          "display": "Digital National Health Service Health Check requires urgent follow-up (finding)"
        }
      ],
      "text": "Requires urgent follow-up"
    }
  ]
}
```

## Element Specification

### Core Elements

| Element | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `id` | 1..1 | id | Unique resource identifier |
| `status` | 1..1 | code | Report status (always `final`) |
| `code` | 1..1 | CodeableConcept | Type of report |
| `subject` | 1..1 | Reference | Patient identifier |
| `encounter` | 0..1 | Reference | Related encounter |
| `effectiveDateTime` | 0..1 | dateTime | When report was generated |
| `performer` | 0..* | Reference | Who created the report |
| `conclusion` | 0..1 | string | Clinical conclusion text |
| `conclusionCode` | 0..* | CodeableConcept | Coded conclusion |

## Element Details

### Status

```json
{
  "status": "final"
}
```

The status is always `final` for completed health checks.

### Code

```json
{
  "code": {
    "text": "Generic comment"
  }
}
```

A general description of the report type.

### Effective Date

```json
{
  "effectiveDateTime": "2025-04-14"
}
```

The date when the report was generated.

### Performer

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

Identifies the organisation that generated the report.

## Conclusion

The `conclusion` element contains a human-readable summary of follow-up recommendations:

```json
{
  "conclusion": "Follow up comments - QRISK3 cardiovascular disease 10 year risk calculator score (observable entity) - Urgent Follow-up. Serum cholesterol level (observable entity) - Routine Follow-up. Haemoglobin A1c level (observable entity) - Routine Follow-up"
}
```

### Conclusion Format

The conclusion follows this pattern:

```
Follow up comments - [Observable Entity] - [Follow-up Type]. [Observable Entity] - [Follow-up Type]. ...
```

### Follow-up Types

| Type | Description |
| --- | --- |
| Urgent Follow-up | Requires immediate clinical attention |
| Routine Follow-up | Standard follow-up recommended |
| No Follow-up | No specific action required |

## Conclusion Code

The `conclusionCode` provides a coded representation of the overall follow-up urgency:

```json
{
  "conclusionCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "2242661000000109",
          "display": "Digital National Health Service Health Check requires urgent follow-up (finding)"
        }
      ],
      "text": "Requires urgent follow-up"
    }
  ]
}
```

### Conclusion Codes

| SNOMED CT Code | Display | Meaning |
| --- | --- | --- |
| `2242661000000109` | Digital National Health Service Health Check requires urgent follow-up (finding) | Urgent clinical review needed |
| `2242651000000107` | Digital National Health Service Health Check requires routine follow-up (finding) | Routine follow-up recommended |
| `2242641000000105` | Digital National Health Service Health Check does not require follow-up (finding) | No follow-up needed |

## Example Scenarios

### Scenario 1: Urgent Follow-up

**Situation**: QRISK3 score is 22% (high risk)

```json
{
  "conclusion": "Follow up comments - QRISK3 cardiovascular disease 10 year risk calculator score (observable entity) - Urgent Follow-up.",
  "conclusionCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "2242661000000109",
          "display": "Digital National Health Service Health Check requires urgent follow-up (finding)"
        }
      ]
    }
  ]
}
```

### Scenario 2: Routine Follow-up

**Situation**: Elevated cholesterol but QRISK3 < 10%

```json
{
  "conclusion": "Follow up comments - Serum cholesterol level (observable entity) - Routine Follow-up.",
  "conclusionCode": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "2242651000000107",
          "display": "Digital National Health Service Health Check requires routine follow-up (finding)"
        }
      ]
    }
  ]
}
```

## Relationship to Other Resources

The DiagnosticReport summarises findings from:

```
Observations (vital signs, labs)
        │
RiskAssessments (QRISK3, Leicester)
        │
        └── ► DiagnosticReport (recommendations)
```

The report is referenced from the Composition under "Follow-up Recommendations" section.

## Common Elements

| Element | Description |
| --- | --- |
| `status` | Always `final` |
| `subject` | Patient NHS Number |
| `encounter` | Reference to Encounter |
| `effectiveDateTime` | When report was generated |
| `performer` | ODS code of performing organisation |
