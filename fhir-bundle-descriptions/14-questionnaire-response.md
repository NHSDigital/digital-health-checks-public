## Overview

The **QuestionnaireResponse** resource captures the patient's answers to the NHS Health Check medical history questionnaire. This data is used as input for risk calculations, particularly the QRISK3 cardiovascular risk assessment.

## Resource Purpose

The QuestionnaireResponse:

- Captures answers to standardised questions for QRISK3 calculation
- Links to the defining Questionnaire resource

## Linked Questionnaire

The QuestionnaireResponse references the NHS Health Check Medical History Questionnaire:

```json
{
  "questionnaire": "https://fhir.nhs.uk/Questionnaire/nhs-health-check-medical-history"
}
```

| Property | Value |
| --- | --- |
| Canonical URL | TBC! |
| Title | TBC! - Example: NHS Health Check - Medical History Questionnaire |
| Version | TBC! |

## Resource Structure

### Complete Example

```json
{
  "resourceType": "QuestionnaireResponse",
  "id": "63258d20-0e35-4543-b26b-58e229345c15",
  "questionnaire": "https://fhir.nhs.uk/Questionnaire/nhs-health-check-medical-history",
  "status": "completed",
  "authored": "2025-12-11T10:30:00+00:00",
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  },
  "author": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/ods-organization-code",
      "value": "R8N8C"
    }
  },
  "item": [
    {
      "linkId": "lupus",
      "text": "Has a healthcare professional ever diagnosed you with lupus?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    }
    // ... additional items
  ]
}
```

## Element Specification

### Core Elements

| Element | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `id` | 1..1 | id | Unique resource identifier |
| `questionnaire` | 1..1 | canonical | Reference to Questionnaire definition |
| `status` | 1..1 | code | Response status |
| `authored` | 0..1 | dateTime | When response was recorded |
| `subject` | 1..1 | Reference | Patient identifier |
| `encounter` | 0..1 | Reference | Related encounter |
| `author` | 0..1 | Reference | Who recorded the response |
| `item` | 0..* | BackboneElement | Question answers |

### Status

```json
{
  "status": "completed"
}
```

The status is `completed` for submitted questionnaires.

### Authored

```json
{
  "authored": "2025-12-11T10:30:00+00:00"
}
```

The date and time when the questionnaire was completed.

## Questions Included

The medical history questionnaire includes questions relevant to QRISK3 calculation:

| linkId | Question Text | Answer Type |
| --- | --- | --- |
| `lupus` | Has a healthcare professional ever diagnosed you with lupus? | Yes/No |
| `severeMentalIllness` | Has a healthcare professional ever diagnosed you with a severe mental health condition? | Yes/No |
| `atypicalAntipsychoticMedication` | Are you currently taking any of these medicines? | Yes/No |
| `migraines` | Has a healthcare professional ever diagnosed you with migraines? | Yes/No |
| `impotence` | Has a healthcare professional ever diagnosed you with erectile dysfunction, or have you ever taken medicine for it? | Yes/No |
| `rheumatoidArthritis` | Has a healthcare professional ever diagnosed you with rheumatoid arthritis? | Yes/No |
| `steroidTablets` | Do you regularly take corticosteroid tablets? | Yes/No |

## Item Structure

Each item represents a question-answer pair:

```json
{
  "linkId": "lupus",
  "text": "Has a healthcare professional ever diagnosed you with lupus?",
  "answer": [
    {
      "valueCoding": {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
        "code": "N",
        "display": "No"
      }
    }
  ]
}
```

### Item Elements

| Element | Type | Description |
| --- | --- | --- |
| `linkId` | string | Unique identifier matching questionnaire definition |
| `text` | string | Question text |
| `answer` | array | Array of answers (typically one) |
| `answer.valueCoding` | Coding | Coded answer value |

## Answer Coding

All questions use Yes/No coding from HL7 v2-0532:

**System**: `[http://terminology.hl7.org/CodeSystem/v2-0532](http://terminology.hl7.org/CodeSystem/v2-0532)`

| Code | Display |
| --- | --- |
| `Y` | Yes |
| `N` | No |

### Example: Yes Answer

```json
{
  "linkId": "migraines",
  "text": "Has a healthcare professional ever diagnosed you with migraines?",
  "answer": [
    {
      "valueCoding": {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
        "code": "Y",
        "display": "Yes"
      }
    }
  ]
}
```

### Example: No Answer

```json
{
  "linkId": "rheumatoidArthritis",
  "text": "Has a healthcare professional ever diagnosed you with rheumatoid arthritis?",
  "answer": [
    {
      "valueCoding": {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
        "code": "N",
        "display": "No"
      }
    }
  ]
}
```

## Complete Item List Example

```json
{
  "item": [
    {
      "linkId": "lupus",
      "text": "Has a healthcare professional ever diagnosed you with lupus?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    },
    {
      "linkId": "severeMentalIllness",
      "text": "Has a healthcare professional ever diagnosed you with a severe mental health condition?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    },
    {
      "linkId": "atypicalAntipsychoticMedication",
      "text": "Are you currently taking any of these medicines?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    },
    {
      "linkId": "migraines",
      "text": "Has a healthcare professional ever diagnosed you with migraines?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "Y",
            "display": "Yes"
          }
        }
      ]
    },
    {
      "linkId": "impotence",
      "text": "Has a healthcare professional ever diagnosed you with erectile dysfunction, or have you ever taken medicine for it?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    },
    {
      "linkId": "rheumatoidArthritis",
      "text": "Has a healthcare professional ever diagnosed you with rheumatoid arthritis?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    },
    {
      "linkId": "steroidTablets",
      "text": "Do you regularly take corticosteroid tablets?",
      "answer": [
        {
          "valueCoding": {
            "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
            "code": "N",
            "display": "No"
          }
        }
      ]
    }
  ]
}
```

## Clinical Significance

### QRISK3 Risk Factors

Each question relates to a QRISK3 risk factor:

| linkId | QRISK3 Factor |
| --- | --- |
| `lupus` | Systemic Lupus Erythematosus (SLE) |
| `severeMentalIllness` | Severe mental illness |
| `atypicalAntipsychoticMedication` | Atypical antipsychotics |
| `migraines` | Migraine |
| `impotence` | Erectile dysfunction |
| `rheumatoidArthritis` | Rheumatoid arthritis |
| `steroidTablets` | Regular corticosteroid use |

## Relationship to Other Resources

The QuestionnaireResponse is referenced by the QRISK3 RiskAssessment:

```json
{
  "resourceType": "RiskAssessment",
  "basis": [
    {
      "reference": "QuestionnaireResponse/63258d20-0e35-4543-b26b-58e229345c15"
    }
  ]
}
```

This links the risk calculation to its input data.
