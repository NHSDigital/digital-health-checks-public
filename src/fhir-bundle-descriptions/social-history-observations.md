---
layout: default
title: "Social history observations"
---

Social history observations capture lifestyle factors relevant to cardiovascular disease risk assessment. These include family history of heart disease, smoking status, and alcohol consumption.

## Observations included

| Observation | SNOMED CT Code | Value Type |
| --- | --- | --- |
| Social History Panel | `365448001` | Panel (hasMember) |
| Family History: CHD | `266895004` | CodeableConcept (Yes/No) |
| Smoking Status | `160603005`* | CodeableConcept (Yes/No) |
| AUDIT-C Score | `763256006` | Integer |

*Note: Smoking codes vary based on status reported.

## Observation category

All social history observations use the `social-history` category:

```json
{
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "social-history",
          "display": "Social History"
        }
      ],
      "text": "Social History - Family History CHD, Smoking and Alcohol scores"
    }
  ]
}
```

## Social History panel

The social history panel groups related observations together.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "8862a5e2-70fe-4b97-9f74-23f826164393",
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
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "29762-2",
        "display": "Social history Narrative"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "365448001",
        "display": "Social and personal history finding"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "social-history",
          "display": "Social History"
        }
      ],
      "text": "Social History - Family History CHD, Smoking and Alcohol scores"
    }
  ],
  "hasMember": [
    { "reference": "Observation/554796e4-6c94-42d4-99cf-57d408a61598" },
    { "reference": "Observation/023cdeea-0e87-4380-b5e3-eddf585136a7" },
    { "reference": "Observation/5b06b38c-343e-4555-9695-8cf4aecff94c" }
  ]
}
```

### Panel codes

| System | Code | Display |
| --- | --- | --- |
| LOINC | `29762-2` | Social history Narrative |
| SNOMED CT | `365448001` | Social and personal history finding |

### hasMember References

| Reference | Observation Type |
| --- | --- |
| `Observation/554796e4-...` | Family History: CHD |
| `Observation/023cdeea-...` | Smoking Status |
| `Observation/5b06b38c-...` | AUDIT-C Score |

## Family History: Ischemic Heart Disease

Records whether a first-degree relative has had heart disease before age 60.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "554796e4-6c94-42d4-99cf-57d408a61598",
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
          "code": "social-history",
          "display": "Social History"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "266895004",
        "display": "Family history: Ischemic heart disease at less than 60 years"
      }
    ]
  },
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
        "code": "Y",
        "display": "Yes"
      }
    ]
  }
}
```

### Code

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `266895004` | Family history: Ischemic heart disease at less than 60 years |

### Value

Uses HL7 v2-0532 Yes/No coding:

| Code | Display | Meaning |
| --- | --- | --- |
| `Y` | Yes | Family history present |
| `N` | No | No family history |

**System**: `[http://terminology.hl7.org/CodeSystem/v2-0532](http://terminology.hl7.org/CodeSystem/v2-0532)`

## Smoking Status

Records the patient's current smoking status.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "023cdeea-0e87-4380-b5e3-eddf585136a7",
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
          "code": "social-history",
          "display": "Social History"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "160603005",
        "display": "Light cigarette smoker (1-9 cigs/day)"
      }
    ]
  },
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
        "code": "Y",
        "display": "Yes"
      }
    ]
  }
}
```

### Smoking Status codes

The SNOMED CT code in `code.coding` indicates the specific smoking status:

| SNOMED CT Code | Display | Category |
| --- | --- | --- |
| `266919005` | Never smoked tobacco | Non-smoker |
| `8517006` | Ex-smoker | Former smoker |
| `160603005` | Light cigarette smoker (1-9 cigs/day) | Current smoker |
| `160604004` | Moderate cigarette smoker (10-19 cigs/day) | Current smoker |
| `160605003` | Heavy cigarette smoker (20-39 cigs/day) | Current smoker |
| `160606002` | Very heavy cigarette smoker (40+ cigs/day) | Current smoker |

### Value

The `valueCodeableConcept` confirms the status:

| Code | Display | Meaning |
| --- | --- | --- |
| `Y` | Yes | Status confirmed |
| `N` | No | Status not applicable |


## AUDIT-C alcohol score

The AUDIT-C (Alcohol Use Disorders Identification Test - Consumption) is a 3-question screening tool for alcohol consumption.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "5b06b38c-343e-4555-9695-8cf4aecff94c",
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
          "code": "social-history",
          "display": "Social History"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "763256006",
        "display": "Alcohol Use Disorders Identification Test - Consumption score"
      }
    ]
  },
  "valueInteger": 5
}
```

### Code

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `763256006` | Alcohol Use Disorders Identification Test - Consumption score |

### Value

The value is an integer representing the AUDIT-C score:

| Property | Value |
| --- | --- |
| Data Type | `valueInteger` |
| Range | 0 - 12 |


## Value types summary

| Observation | Value Element | Data Type |
| --- | --- | --- |
| Family History | `valueCodeableConcept` | Coded (Yes/No) |
| Smoking Status | `valueCodeableConcept` | Coded (Yes/No) |
| AUDIT-C Score | `valueInteger` | Integer |
