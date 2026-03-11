---
layout: default
title: "Risk assessment"
---

Risk assessments calculate the patient's probability of developing certain conditions based on the data collected during the NHS Health Check. Two primary risk scores are calculated:

- **QRISK3** - 10-year cardiovascular disease risk- **Leicester Diabetes Risk Score** - Diabetes risk

## Risk assessments included

| Assessment | SNOMED CT Code | Output |
| --- | --- | --- |
| QRISK3 CVD Risk | `1085871000000105` | Percentage (0-100) |
| QRISK3 Heart Age | `1325531000000102` | Years |
| Leicester Diabetes Risk Score | `1025601000000108` | Score |

## QRISK3 Cardiovascular Risk assessment

QRISK3 is the recommended cardiovascular risk calculator for use in England and Wales. It estimates the 10-year risk of developing cardiovascular disease.

### Structure

```json
{
  "resourceType": "RiskAssessment",
  "id": "bf13dfe6-6483-4b1f-878f-6f7b8673e13a",
  "status": "final",
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  },
  "occurrenceDateTime": "2023-01-01",
  "basis": [
    {
      "reference": "QuestionnaireResponse/63258d20-0e35-4543-b26b-58e229345c15"
    }
  ],
  "prediction": [
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "1085871000000105",
            "display": "QRISK3 cardiovascular disease 10 year risk calculator score"
          }
        ]
      },
      "probabilityDecimal": 4.763396
    },
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "1325531000000102",
            "display": "QRISK3 Healthy Heart Age"
          }
        ]
      },
      "probabilityDecimal": 56
    }
  ]
}
```

## RiskAssessment element specification

### Core elements

| Element | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `id` | 1..1 | id | Unique resource identifier |
| `status` | 1..1 | code | Assessment status (always `final`) |
| `subject` | 1..1 | Reference | Patient identifier |
| `encounter` | 0..1 | Reference | Related encounter |
| `occurrenceDateTime` | 0..1 | dateTime | When assessment was performed |
| `basis` | 0..* | Reference | Data used for calculation |
| `prediction` | 1..* | BackboneElement | Risk predictions |

### Status

```json
{
  "status": "final"
}
```

The status is always `final` for completed risk assessments.

### Basis

References the data sources used for the risk calculation:

```json
{
  "basis": [
    {
      "reference": "QuestionnaireResponse/63258d20-0e35-4543-b26b-58e229345c15"
    }
  ]
}
```

This links to the medical history questionnaire responses used in the calculation.

## QRISK3 predictions

### Prediction structure

Each prediction contains:

```json
{
  "prediction": [
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "...",
            "display": "..."
          }
        ]
      },
      "probabilityDecimal": 4.763396
    }
  ]
}
```

### QRISK3 10-year CVD risk score

| Element | Value |
| --- | --- |
| SNOMED CT Code | `1085871000000105` |
| Display | QRISK3 cardiovascular disease 10 year risk calculator score |
| Value Type | `probabilityDecimal` |
| Unit | Percentage (0-100) |

**Example**: `4.763396` represents a 4.76% risk of developing CVD in the next 10 years.

### QRISK3 Heart age

| Element | Value |
| --- | --- |
| SNOMED CT Code | `1325531000000102` |
| Display | QRISK3 Healthy Heart Age |
| Value Type | `probabilityDecimal` |
| Unit | Years |

**Example**: `56` represents a heart age of 56 years.

## Leicester Diabetes Risk score

The Leicester Diabetes Risk Score assesses the risk of developing Type 2 diabetes.

### Structure

```json
{
  "resourceType": "RiskAssessment",
  "id": "15d63e8d-f796-4f62-881d-7b30e07321ea",
  "status": "final",
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  },
  "occurrenceDateTime": "2023-01-01",
  "prediction": [
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "1025601000000108",
            "display": "Leicester Diabetes Risk Score"
          }
        ]
      },
      "probabilityDecimal": 24
    }
  ]
}
```

### Prediction code

| Element | Value |
| --- | --- |
| SNOMED CT Code | `1025601000000108` |
| Display | Leicester Diabetes Risk Score |
| Value Type | `probabilityDecimal` |

## Multiple predictions example

A QRISK3 RiskAssessment contains multiple predictions in a single resource:

```json
{
  "prediction": [
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "1085871000000105",
            "display": "QRISK3 cardiovascular disease 10 year risk calculator score"
          }
        ]
      },
      "probabilityDecimal": 4.763396
    },
    {
      "outcome": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "1325531000000102",
            "display": "QRISK3 Healthy Heart Age"
          }
        ]
      },
      "probabilityDecimal": 56
    }
  ]
}
```

**Note**: Both the 10-year risk score and heart age are included as separate predictions in the same RiskAssessment.

## Relationship to other resources

### Data flow

```
Patient Data Collection
        │
        ├── Observations (vital signs, labs)
        │
        ├── QuestionnaireResponse (medical history)
        │
        └── ► RiskAssessment
              ├── QRISK3 (CVD risk)
              └── Leicester (Diabetes risk)
                    │
                    └── ► DiagnosticReport (recommendations)
```

### References

- **basis**: Links to QuestionnaireResponse
- **encounter**: Links to Encounter
- **subject**: Links to Patient (via NHS Number)

## Common elements

| Element | Description |
| --- | --- |
| `status` | Always `final` |
| `subject` | Patient NHS Number |
| `encounter` | Reference to Encounter |
| `occurrenceDateTime` | When assessment was performed |
