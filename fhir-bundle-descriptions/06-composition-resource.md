## Overview

The **Composition** resource serves as the document index for the NHS Health Check details. It organises all health check data into logical sections and provides references to the underlying clinical resources.

## Resource Purpose

The Composition:

- Acts as a table of contents for the health check data- Organises observations into clinical categories- Provides document metadata (date, author, subject)- Enables document-based navigation of the health check

## Resource Structure

### Complete Example

```json
{
  "resourceType": "Composition",
  "id": "8890ba53-9ee2-45c2-a63d-79f06f7ef421",
  "status": "final",
  "type": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "2242631000000104",
        "display": "Digital National Health Service Health Check completed (situation)"
      }
    ]
  },
  "subject": {
    "identifier": {
      "system": "https://fhir.nhs.uk/Id/nhs-number",
      "value": "9999999999"
    }
  },
  "author": [
    {
      "identifier": {
        "system": "https://fhir.nhs.uk/Id/ods-organization-code",
        "value": "R8N8C"
      }
    }
  ],
  "encounter": {
    "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
  },
  "date": "2025-10-03T10:00:00+00:00",
  "title": "NHS Health Check Assessment Report",
  "section": [ ... ]
}
```

## Element Specification

### Core Elements

| Element | Cardinality | Type | Description |
| --- | --- | --- | --- |
| `id` | 1..1 | id | Unique resource identifier (UUID) |
| `status` | 1..1 | code | Document status - always `final` |
| `type` | 1..1 | CodeableConcept | Document type (SNOMED CT) |
| `subject` | 1..1 | Reference | Patient identifier (NHS Number) |
| `author` | 1..* | Reference | Document author (ODS code) |
| `encounter` | 0..1 | Reference | Related encounter |
| `date` | 1..1 | dateTime | Document creation date |
| `title` | 1..1 | string | Human-readable title |
| `section` | 1..* | BackboneElement | Document sections |

### Status

The composition status is always `final` for completed health checks:

```json
{
  "status": "final"
}
```

### Type (Document Type) 

The document type uses an NHS-specific SNOMED CT code:

```json
{
  "type": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "2242631000000104",
        "display": "Digital National Health Service Health Check completed (situation)"
      }
    ]
  }
}
```

| Code | Display |
| --- | --- |
| `2242631000000104` | Digital National Health Service Health Check completed (situation) |
|  | TBD |

### Title

```json
{
  "title": "NHS Health Check Assessment Report"
}
```

## Section Structure

The Composition contains multiple sections, each grouping related clinical data.

### Section Elements

| Element | Type | Description |
| --- | --- | --- |
| `title` | string | Section heading |
| `code` | CodeableConcept | Section classification code |
| `entry` | Reference[] | Resources in this section |

### Sections Overview

| Section Title | Code System | Code | Resources |
| --- | --- | --- | --- |
| Encounter Information |  |  | Encounter |
| Vital Signs | UKCore-RecordStandardHeadings | `observations` | Observations |
| Social History | UKCore-RecordStandardHeadings | `social-context` | Observations |
| Physical Activity | observation-category | `activity` | Observations |
| Laboratory Results | observation-category | `laboratory` | Observations |
| Risk Assessments | UKCore-RecordStandardHeadings | `clinical-risk-assessment` | RiskAssessments |
| Follow-up Recommendations |  |  | DiagnosticReport |

## Section Details

### 1. Encounter Information

```json
{
  "title": "Encounter Information",
  "entry": [
    {
      "reference": "Encounter/fa991ce0-1950-4595-ab59-6ce1568e586e"
    }
  ]
}
```

**Purpose**: Links to the health check session details.

### 2. Vital Signs

```json
{
  "title": "Vital Signs",
  "code": {
    "coding": [
      {
        "system": "https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings",
        "code": "observations",
        "display": "Observations"
      }
    ]
  },
  "entry": [
    { "reference": "Observation/abb2e248-51ce-469a-8ae3-9c2138efa890" },
    { "reference": "Observation/3ea3d79d-85d5-453b-92e7-0d034ee7b6a0" },
    { "reference": "Observation/da39d221-33d7-4823-aa9e-64128cfe8efa" },
    { "reference": "Observation/300da47b-741c-4573-836b-83a96bd617dc" },
    { "reference": "Observation/43c1b264-ebcd-429e-8aa5-19fc0524436b" },
    { "reference": "Observation/55ce6223-b4a0-4b37-be7f-0042322c419a" }
  ]
}
```

**Contains**:

- Vital signs panel- Body height- Body weight- Waist circumference- BMI- Blood pressure

### 3. Social History

```json
{
  "title": "Social History",
  "code": {
    "coding": [
      {
        "system": "https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings",
        "code": "social-context",
        "display": "Social context"
      }
    ]
  },
  "entry": [
    { "reference": "Observation/8862a5e2-70fe-4b97-9f74-23f826164393" },
    { "reference": "Observation/554796e4-6c94-42d4-99cf-57d408a61598" },
    { "reference": "Observation/023cdeea-0e87-4380-b5e3-eddf585136a7" },
    { "reference": "Observation/5b06b38c-343e-4555-9695-8cf4aecff94c" }
  ]
}
```

**Contains**:

- Social history panel- Family history of heart disease- Smoking status- AUDIT-C alcohol score

### 4. Physical Activity

```json
{
  "title": "Physical Activity",
  "code": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
        "code": "activity",
        "display": "Activity"
      }
    ]
  },
  "entry": [
    { "reference": "Observation/8b883583-76ce-4d1e-93f3-4e85b40bdbf7" }
  ]
}
```

**Contains**:

- GPPAQ Physical Activity Index

### 5. Laboratory Results

```json
{
  "title": "Laboratory Results",
  "code": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/observation-category",
        "code": "laboratory",
        "display": "Laboratory"
      }
    ]
  },
  "entry": [
    { "reference": "Observation/1a1a1a1a-2b2b-3c3c-4d4d-5e5e5e5e5e5e" },
    { "reference": "Observation/2b2b2b2b-3c3c-4d4d-5e5e-6f6f6f6f6f6f" },
    { "reference": "Observation/6960e9df-0c3f-414c-aa43-63f7a7de1d6e" },
    { "reference": "Observation/38cbb9a5-85c2-4580-9b69-8ad0e0cac3f6" }
  ]
}
```

**Contains**:

- Cholesterol panel (may include failed tests)- Total cholesterol- HDL cholesterol- HDL/LDL ratio- HbA1c

### 6. Risk Assessments

```json
{
  "title": "Risk Assessments",
  "code": {
    "coding": [
      {
        "system": "https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings",
        "code": "clinical-risk-assessment",
        "display": "Clinical risk assessment"
      }
    ]
  },
  "entry": [
    { "reference": "RiskAssessment/bf13dfe6-6483-4b1f-878f-6f7b8673e13a" },
    { "reference": "RiskAssessment/15d63e8d-f796-4f62-881d-7b30e07321ea" }
  ]
}
```

**Contains**:

- QRISK3 cardiovascular risk assessment- Leicester Diabetes Risk Score

### 7. Follow-up Recommendations

```json
{
  "title": "Follow-up Recommendations",
  "entry": [
    { "reference": "DiagnosticReport/c4020612-619e-4a3d-a2e1-3d20c64167b4" }
  ]
}
```

**Contains**:

- Diagnostic report with conclusions and recommendations

## Navigation Pattern

To consume the health check data:

- **Start with Composition** - Read the Composition resource- **Identify sections** - Parse the `section` array- **Follow references** - Retrieve referenced resources- **Process by category** - Handle each section type appropriately

```
Composition
├── Encounter Information
│   └── Encounter
├── Vital Signs
│   ├── Vital Signs Panel
│   │   ├── Height
│   │   ├── Weight
│   │   ├── Waist Circumference
│   │   └── BMI
│   └── Blood Pressure
├── Social History
│   ├── Social History Panel
│   │   ├── Family History
│   │   ├── Smoking Status
│   │   └── AUDIT-C Score
├── Physical Activity
│   └── GPPAQ Index
├── Laboratory Results
│   ├── Cholesterol Panel
│   │   ├── Total Cholesterol
│   │   ├── HDL Cholesterol
│   │   └── HDL/LDL Ratio
│   └── HbA1c
├── Risk Assessments
│   ├── QRISK3
│   └── Leicester Diabetes Score
└── Follow-up Recommendations
    └── DiagnosticReport
```
