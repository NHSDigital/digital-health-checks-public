## Overview

Laboratory observations capture blood test results from the NHS Health Check. These include cholesterol measurements (total cholesterol, HDL, and cholesterol ratio) and HbA1c (glycated haemoglobin) for diabetes screening.

## Observations Included

| Observation | SNOMED CT Code | Unit |
| --- | --- | --- |
| Cholesterol Panel | `365793008` |  |
| Total Cholesterol | `1005671000000105` | mmol/L |
| HDL Cholesterol | `1005681000000107` | mmol/L |
| HDL/LDL Ratio | `1029071000000109` | ratio |
| HbA1c | `441689006` | mmol/mol |

## Observation Category

All laboratory results use the `laboratory` category:

```json
{
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ],
      "text": "Laboratory - Total Cholesterol, HDL, and Cholesterol to HDL ratio"
    }
  ]
}
```

## Cholesterol Panel

The cholesterol panel groups related cholesterol measurements.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "6960e9df-0c3f-414c-aa43-63f7a7de1d6e",
  "status": "final",
  "effectiveDateTime": "2024-12-03T10:20:48.000Z",
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
        "system": "http://snomed.info/sct",
        "code": "365793008",
        "display": "Finding of cholesterol level"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ]
    }
  ],
  "hasMember": [
    { "reference": "Observation/d2e3b814-8daa-45ee-803f-59f29d5a33fd" },
    { "reference": "Observation/6ef353fa-f751-4730-9609-f455ced6a1d3" },
    { "reference": "Observation/b0eff260-a94d-4180-b1cd-a440d387b820" }
  ]
}
```

### Panel Code

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `365793008` | Finding of cholesterol level |

### hasMember References

| Reference | Observation Type |
| --- | --- |
| `Observation/d2e3b814-...` | Total Cholesterol |
| `Observation/6ef353fa-...` | HDL Cholesterol |
| `Observation/b0eff260-...` | HDL/LDL Ratio |

## Total Cholesterol (Serum Cholesterol)

### Structure

```json
{
  "resourceType": "Observation",
  "id": "d2e3b814-8daa-45ee-803f-59f29d5a33fd",
  "status": "final",
  "effectiveDateTime": "2024-12-03T10:20:48.000Z",
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
        "system": "http://snomed.info/sct",
        "code": "1005671000000105",
        "display": "Serum cholesterol level"
      }
    ]
  },
  "valueQuantity": {
    "value": 6.3,
    "unit": "mmol/L",
    "system": "http://unitsofmeasure.org",
    "code": "mmol/L"
  }
}
```

### Code

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `1005671000000105` | Serum cholesterol level |

### Value

| Property | Value |
| --- | --- |
| Unit | mmol/L |
| UCUM Code | `mmol/L` |
| Desirable Range | < 5.0 mmol/L |

## HDL Cholesterol

### Structure

```json
{
  "resourceType": "Observation",
  "id": "6ef353fa-f751-4730-9609-f455ced6a1d3",
  "status": "final",
  "effectiveDateTime": "2024-12-03T10:20:48.000Z",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "1005681000000107",
        "display": "Serum high density lipoprotein cholesterol level"
      }
    ]
  },
  "valueQuantity": {
    "value": 1.5,
    "unit": "mmol/L",
    "system": "http://unitsofmeasure.org",
    "code": "mmol/L"
  }
}
```

### Code

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `1005681000000107` | Serum high density lipoprotein cholesterol level |

### Value

| Property | Value |
| --- | --- |
| Unit | mmol/L |
| UCUM Code | `mmol/L` |
| Desirable Range | > 1.0 mmol/L (men), > 1.2 mmol/L (women) |

## Cholesterol/HDL Ratio

### Structure

```json
{
  "resourceType": "Observation",
  "id": "b0eff260-a94d-4180-b1cd-a440d387b820",
  "status": "final",
  "effectiveDateTime": "2024-12-03T10:20:48.000Z",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "1029071000000109",
        "display": "High density/low density lipoprotein ratio"
      }
    ]
  },
  "valueQuantity": {
    "value": 5,
    "unit": "mmol/L",
    "system": "http://unitsofmeasure.org",
    "code": "mmol/L"
  }
}
```

### Code

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `1029071000000109` | High density/low density lipoprotein ratio |

### HbA1c (Glycated Haemoglobin)

HbA1c measures average blood glucose over the preceding 2-3 months and is used for diabetes screening.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "38cbb9a5-85c2-4580-9b69-8ad0e0cac3f6",
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
        "system": "http://snomed.info/sct",
        "code": "441689006",
        "display": "Measurement of total hemoglobin concentration"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "laboratory",
          "display": "Laboratory"
        }
      ],
      "text": "Laboratory - Hba1c"
    }
  ],
  "component": [
    {
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/sct",
            "code": "1003671000000109",
            "display": "Haemoglobin A1c level"
          }
        ],
        "text": "HbA1c in mmol/L"
      },
      "valueQuantity": {
        "value": 20,
        "unit": "mmol/L",
        "system": "http://unitsofmeasure.org",
        "code": "mmol/L"
      }
    }
  ]
}
```

### Codes

**Main observation code**:

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `441689006` | Measurement of total hemoglobin concentration |

**Component code**:

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `1003671000000109` | Haemoglobin A1c level |

### Value

| Property | Value |
| --- | --- |
| Unit | mmol/mol |
| UCUM Code | `mmol/L` |
| Normal Range | 20-42 mmol/mol |

### Handling Failed Tests

Laboratory tests may fail due to sample issues. Failed tests are recorded with `dataAbsentReason`.

### Failed Test Example

```json
{
  "resourceType": "Observation",
  "id": "2b2b2b2b-3c3c-4d4d-5e5e-6f6f6f6f6f6f",
  "status": "final",
  "effectiveDateTime": "2024-11-20T08:15:00+00:00",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "1005671000000105",
        "display": "Serum cholesterol level"
      }
    ]
  },
  "dataAbsentReason": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        "code": "error",
        "display": "Error"
      }
    ],
    "text": "Insufficient sample volume"
  },
  "note": [
    {
      "text": "Total cholesterol test failed - Insufficient sample volume. Test repeated on 2024-12-03."
    }
  ]
}
```

### Key Elements for Failed Tests

| Element | Purpose |
| --- | --- |
| `dataAbsentReason` | Indicates why value is missing |
| `dataAbsentReason.text` | Human-readable failure reason |
| `note` | Additional context, including retest information |

### dataAbsentReason Code

| System | Code | Display |
| --- | --- | --- |
| [http://terminology.hl7.org/CodeSystem/data-absent-reason](http://terminology.hl7.org/CodeSystem/data-absent-reason) | `error` | Error |

## Multiple Test Attempts

When a test fails and is repeated, both attempts may be present in the bundle:

- **Failed test** - with `dataAbsentReason` and `note`- **Successful retest** - with `valueQuantity`

Both are linked to the same cholesterol panel via `hasMember`.
