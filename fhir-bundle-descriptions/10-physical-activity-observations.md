## Overview

Physical activity is assessed using the **General Practice Physical Activity Questionnaire (GPPAQ)**. This standardised questionnaire evaluates a patient's physical activity levels and produces a Physical Activity Index (PAI).

## GPPAQ Physical Activity Index

### Structure

```json
{
  "resourceType": "Observation",
  "id": "8b883583-76ce-4d1e-93f3-4e85b40bdbf7",
  "status": "final",
  "effectiveDateTime": "2024-07-17T12:12:59+01:00",
  "performer": [
    {
      "identifier": {
        "system": "https://fhir.nhs.uk/Id/ods-organization-code",
        "value": "R8N8C"
      }
    }
  ],
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "activity",
          "display": "Activity"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "1086511000000107",
        "display": "General Practice Physical Activity Questionnaire Physical Activity Index"
      }
    ]
  },
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "366241000000106",
        "display": "General practice physical activity questionnaire physical activity index: active"
      }
    ]
  }
}
```

## Element Specification

### Category

Physical activity uses the `activity` observation category:

```json
{
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "activity",
          "display": "Activity"
        }
      ]
    }
  ]
}
```

### Code

The observation code identifies this as a GPPAQ Physical Activity Index:

```json
{
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "1086511000000107",
        "display": "General Practice Physical Activity Questionnaire Physical Activity Index"
      }
    ]
  }
}
```

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `1086511000000107` | General Practice Physical Activity Questionnaire Physical Activity Index |

## Physical Activity Index Values

The GPPAQ produces a Physical Activity Index (PAI) categorising patients into four levels:

### Value Codes

| SNOMED CT Code | Display | Activity Level |
| --- | --- | --- |
| `366231000000102` | General practice physical activity questionnaire physical activity index: inactive | Inactive |
| `366241000000106` | General practice physical activity questionnaire physical activity index: active | Active |
| `366251000000109` | General practice physical activity questionnaire physical activity index: moderately active | Moderately Active |
| `366261000000107` | General practice physical activity questionnaire physical activity index: moderately inactive | Moderately Inactive |

### Example Value

```json
{
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "366241000000106",
        "display": "General practice physical activity questionnaire physical activity index: active"
      }
    ]
  }
}
```

## Common Elements

| Element | Description |
| --- | --- |
| `status` | Always `final` |
| `subject` | Patient NHS Number |
| `encounter` | Reference to Encounter |
| `effectiveDateTime` | When assessment was completed |
| `performer` | ODS code of performing organisation |
