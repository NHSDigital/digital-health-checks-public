# Vital Signs Observations

## Overview

Vital signs observations capture the patient's basic physical measurements collected during the NHS Health Check. These include height, weight, waist circumference, BMI, and blood pressure.

## Observations Included

| Observation | SNOMED CT Code | LOINC Code | Unit |
| --- | --- | --- | --- |
| Vital Signs Panel | `118227000` | `85353-1` |  |
| Body Height | `1153637007` | `8302-2` | cm |
| Body Weight | `27113001` | `29463-7` | kg |
| Waist Circumference | `276361009` |  | cm |
| BMI | `60621009` | `39156-5` | kg/m² |
| Blood Pressure | `75367002` | `85354-9` | mmHg |

## Observation Category

All vital signs use the `vital-signs` category:

```json
{
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ]
}
```

## Vital Signs Panel

The vital signs panel is a grouping observation that references individual measurements.

### Structure

```json
{
  "resourceType": "Observation",
  "id": "abb2e248-51ce-469a-8ae3-9c2138efa890",
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "85353-1",
        "display": "Vital signs, weight, height, head circumference, oxygen saturation and BMI panel"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "118227000",
        "display": "Vital signs finding"
      }
    ]
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
  "effectiveDateTime": "2024-07-17T12:12:59+01:00",
  "performer": [
    {
      "identifier": {
        "system": "https://fhir.nhs.uk/Id/ods-organization-code",
        "value": "R8N8C"
      }
    }
  ],
  "hasMember": [
    { "reference": "Observation/3ea3d79d-85d5-453b-92e7-0d034ee7b6a0" },
    { "reference": "Observation/da39d221-33d7-4823-aa9e-64128cfe8efa" },
    { "reference": "Observation/300da47b-741c-4573-836b-83a96bd617dc" },
    { "reference": "Observation/43c1b264-ebcd-429e-8aa5-19fc0524436b" }
  ]
}
```

### hasMember References

The `hasMember` element links to child observations:

| Reference | Observation Type |
| --- | --- |
| `Observation/3ea3d79d-...` | Body Height |
| `Observation/da39d221-...` | Body Weight |
| `Observation/300da47b-...` | Waist Circumference |
| `Observation/43c1b264-...` | BMI |

## Body Height

### Structure

```json
{
  "resourceType": "Observation",
  "id": "3ea3d79d-85d5-453b-92e7-0d034ee7b6a0",
  "status": "final",
  "effectiveDateTime": "2023-09-01T12:00:00Z",
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
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "8302-2",
        "display": "Body height"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "1153637007",
        "display": "Body height"
      }
    ]
  },
  "valueQuantity": {
    "value": 160,
    "unit": "cm",
    "system": "http://unitsofmeasure.org",
    "code": "cm"
  }
}
```

### Codes

| System | Code | Display |
| --- | --- | --- |
| LOINC | `8302-2` | Body height |
| SNOMED CT | `1153637007` | Body height |

### Value

| Property | Value |
| --- | --- |
| Unit | centimetres (cm) |
| UCUM Code | `cm` |
| Expected Range | 50 - 250 cm |

## Body Weight

### Structure

```json
{
  "resourceType": "Observation",
  "id": "da39d221-33d7-4823-aa9e-64128cfe8efa",
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "29463-7",
        "display": "Body weight"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "27113001",
        "display": "Body weight"
      }
    ]
  },
  "valueQuantity": {
    "value": 50,
    "unit": "kilogram",
    "system": "http://unitsofmeasure.org",
    "code": "kg"
  }
}
```

### Codes

| System | Code | Display |
| --- | --- | --- |
| LOINC | `29463-7` | Body weight |
| SNOMED CT | `27113001` | Body weight |

### Value

| Property | Value |
| --- | --- |
| Unit | kilograms (kg) |
| UCUM Code | `kg` |

## Waist Circumference

### Structure

```json
{
  "resourceType": "Observation",
  "id": "300da47b-741c-4573-836b-83a96bd617dc",
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "276361009",
        "display": "Waist circumference"
      }
    ]
  },
  "valueQuantity": {
    "value": 35,
    "unit": "cm",
    "system": "http://unitsofmeasure.org",
    "code": "cm"
  }
}
```

### Codes

| System | Code | Display |
| --- | --- | --- |
| SNOMED CT | `276361009` | Waist circumference |

**Note**: No LOINC code is used for waist circumference.

### Value

| Property | Value |
| --- | --- |
| Unit | centimetres (cm) |
| UCUM Code | `cm` |
| Expected Range | 50 - 200 cm |

## Body Mass Index (BMI)

### Structure

```json
{
  "resourceType": "Observation",
  "id": "43c1b264-ebcd-429e-8aa5-19fc0524436b",
  "status": "final",
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "39156-5",
        "display": "Body mass index (BMI) [Ratio]"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "60621009",
        "display": "Body mass index"
      }
    ]
  },
  "valueQuantity": {
    "value": 20,
    "unit": "kg/m²",
    "system": "http://unitsofmeasure.org",
    "code": "kg/m2"
  }
}
```

### Codes

| System | Code | Display |
| --- | --- | --- |
| LOINC | `39156-5` | Body mass index (BMI) Ratio |
| SNOMED CT | `60621009` | Body mass index |

### Value

| Property | Value |
| --- | --- |
| Unit | kg/m² |
| UCUM Code | `kg/m2` |
| Calculation | weight (kg) / height (m)² |

### Blood Pressure

Blood pressure is recorded as a single observation with two components (systolic and diastolic).

### Structure

```json
{
  "resourceType": "Observation",
  "id": "55ce6223-b4a0-4b37-be7f-0042322c419a",
  "status": "final",
  "effectiveDateTime": "2023-09-01T12:00:00Z",
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
        "code": "85354-9",
        "display": "Blood pressure panel with all children optional"
      },
      {
        "system": "http://snomed.info/sct",
        "code": "75367002",
        "display": "Blood pressure"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ]
    }
  ],
  "component": [
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8480-6",
            "display": "Systolic blood pressure"
          },
          {
            "system": "http://snomed.info/sct",
            "code": "271649006",
            "display": "Systolic blood pressure"
          }
        ]
      },
      "valueQuantity": {
        "value": 120,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    },
    {
      "code": {
        "coding": [
          {
            "system": "http://loinc.org",
            "code": "8462-4",
            "display": "Diastolic blood pressure"
          },
          {
            "system": "http://snomed.info/sct",
            "code": "271650006",
            "display": "Diastolic blood pressure"
          }
        ]
      },
      "valueQuantity": {
        "value": 80,
        "unit": "mmHg",
        "system": "http://unitsofmeasure.org",
        "code": "mm[Hg]"
      }
    }
  ]
}
```

### Panel Codes

| System | Code | Display |
| --- | --- | --- |
| LOINC | `85354-9` | Blood pressure panel with all children optional |
| SNOMED CT | `75367002` | Blood pressure |

### Component Codes

| Component | LOINC | SNOMED CT |
| --- | --- | --- |
| Systolic | `8480-6` | `271649006` |
| Diastolic | `8462-4` | `271650006` |

### Values

| Component | Unit | UCUM Code | 
| --- | --- | --- |
| Systolic | mmHg | `mmHg` |
| Diastolic | mmHg | `mmHg` | 


## Common Elements

All vital signs observations share these common elements:

| Element | Description |
| --- | --- |
| `status` | Always `final` |
| `subject` | Patient NHS Number |
| `encounter` | Reference to Encounter |
| `effectiveDateTime` | When measurement was taken |
| `performer` | ODS code of performing organisation |
