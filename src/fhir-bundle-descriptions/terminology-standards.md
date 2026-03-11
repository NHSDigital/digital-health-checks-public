---
layout: default
title: "Terminology standards"
---

The NHS Health Check online uses internationally recognised clinical terminology standards to ensure semantic interoperability. This document details all terminology systems used and their application within the FHIR Bundle.

---

## Terminology systems summary

| System | URI | Purpose |
| --- | --- | --- |
| SNOMED CT | [http://snomed.info/sct](http://snomed.info/sct) | Clinical concepts |
| LOINC | [http://loinc.org](http://loinc.org) | Observation codes |
| UCUM | [http://unitsofmeasure.org](http://unitsofmeasure.org) | Units of measure |
| HL7 v2-0532 | [http://terminology.hl7.org/CodeSystem/v2-0532](http://terminology.hl7.org/CodeSystem/v2-0532) | Yes/No answers |
| HL7 v3-ActCode | [http://terminology.hl7.org/CodeSystem/v3-ActCode](http://terminology.hl7.org/CodeSystem/v3-ActCode) | Encounter classification |
| HL7 observation-category | [http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category) | Observation categories |
| UK Core Record Headings | [https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings](https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings) | Document sections |

---

## SNOMED CT

### Overview

SNOMED CT (Systematized Nomenclature of Medicine - Clinical Terms) is the primary clinical terminology used in the NHS. It provides comprehensive coverage of clinical concepts.

**System URI**: `[http://snomed.info/sct](http://snomed.info/sct)`

**NHS SNOMED Browser**: [https://termbrowser.nhs.uk/](https://termbrowser.nhs.uk/)


### NHS Health Check specific codes

These SNOMED CT codes are specific to the NHS Health Check programme:

| Code | Display | Usage |
| --- | --- | --- |
| `2242631000000104` | Digital National Health Service Health Check completed (situation) | Composition.type |
| 2242641000000108 | Digital NHS Health Check stopped (situation) | Composition.type |
| `2242661000000109` | Digital National Health Service Health Check requires urgent follow-up (finding) | DiagnosticReport.conclusionCode |
| 2242651000000106 | Digital National Health Service Health Check requires follow-up (finding) | DiagnosticReport.conclusionCode |


### Vital Signs codes

| Code | Display | Usage |
| --- | --- | --- |
| `118227000` | Vital signs finding | Vital signs panel |
| `1153637007` | Body height | Height observation |
| `27113001` | Body weight | Weight observation |
| `276361009` | Waist circumference | Waist measurement |
| `60621009` | Body mass index | BMI observation |
| `75367002` | Blood pressure | Blood pressure panel |
| `271649006` | Systolic blood pressure | Systolic component |
| `271650006` | Diastolic blood pressure | Diastolic component |
| 1162737008 | Self‑reported systolic blood pressure | Systolic component |
| 1162735000 | Self‑reported diastolic blood pressure | Diastolic component |

### Social History codes

| Code | Display | Usage |
| --- | --- | --- |
| `365448001` | Social and personal history finding | Social history panel |
| `266895004` | Family history: Ischemic heart disease at less than 60 years | Family history |
| `160603005` | Light cigarette smoker (1-9 cigs/day) | Smoking status |
| 8517006 | Ex-smoker (finding) | Smoking status |
| 56771006 | Heavy smoker (over 20 per day) (finding) | Smoking status |
| 160603005 | Light cigarette smoker (1-9 cigs/day) (finding) | Smoking status |
| 160604004 | Moderate cigarette smoker (10-19 cigs/day) (finding) | Smoking status |
| 266919005 | Never smoked tobacco (finding) | Smoking status |
| `763256006` | Alcohol Use Disorders Identification Test - Consumption score | AUDIT-C |
| 160303001 | Family history of diabetes mellitus (situation) |  |

### Physical Activity codes

| Code | Display | Usage |
| --- | --- | --- |
| `1086511000000107` | General Practice Physical Activity Questionnaire Physical Activity Index | GPPAQ index |
| `366241000000106` | General practice physical activity questionnaire physical activity index: active | GPPAQ status |
| 366121000000108 | GPPAQ physical activity index: inactive | GPPAQ status |
| 366211000000105 | GPPAQ physical activity index: moderately active | GPPAQ status |
| 366171000000107 | GPPAQ physical activity index: moderately inactive | GPPAQ status |

### Laboratory codes

| Code | Display | Usage |
| --- | --- | --- |
| 1005671000000105 | cholesterol | Serum cholesterol level (observable entity) |
| 1005681000000107 | hdlCholesterol | Serum high density lipoprotein cholesterol level (observable entity) |
| 1029071000000109 | totalCholesterolRatio | High density/low density lipoprotein ratio (observable entity) |
| 1003671000000109 | hba1cDiabetes | Haemoglobin A1c level (observable entity) |

### Risk Assessment codes

| Code | Display | Usage |
| --- | --- | --- |
| `1085871000000105` | QRISK3 cardiovascular disease 10 year risk calculator score | QRISK3 score |
| `1325531000000102` | QRISK3 Healthy Heart Age | Heart age |
| `1025601000000108` | Leicester Diabetes Risk Score | Diabetes risk |

### Encounter Type codes

| Code | Display | Usage |
| --- | --- | --- |
| `273479001` | General health questionnaire | Encounter.type |

---

## LOINC

### Overview

LOINC (Logical Observation Identifiers Names and Codes) provides standardised codes for laboratory and clinical observations. It is used alongside SNOMED CT for observation coding.

**System URI**: `[http://loinc.org](http://loinc.org)`

**LOINC Website**: [https://loinc.org/](https://loinc.org/)

### Vital Signs Panel codes

| Code | Display | Component |
| --- | --- | --- |
| `85353-1` | Vital signs, weight, height, head circumference, oxygen saturation and BMI panel | Panel |
| `8302-2` | Body height | Height |
| `29463-7` | Body weight | Weight |
| `39156-5` | Body mass index (BMI) Ratio | BMI |

### Blood Pressure codes

| Code | Display | Component |
| --- | --- | --- |
| `85354-9` | Blood pressure panel with all children optional | Panel |
| `8480-6` | Systolic blood pressure | Systolic |
| `8462-4` | Diastolic blood pressure | Diastolic |

### Social History codes

| Code | Display | Usage |
| --- | --- | --- |
| `29762-2` | Social history Narrative | Social history panel |

### Dual Coding pattern

Many observations include both SNOMED CT and LOINC codes for maximum interoperability:

```json
{
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
  }
}
```

---

## UCUM (Unified Code for Units of Measure)

### Overview

UCUM provides a standardised, unambiguous system for expressing units of measure in electronic data exchange.

**System URI**: `[http://unitsofmeasure.org](http://unitsofmeasure.org)`

**UCUM Website**: [https://ucum.org/](https://ucum.org/)

### Units used

| UCUM Code | Display | Usage |
| --- | --- | --- |
| `cm` | cm | Height, waist circumference |
| `kg` | kilogram | Body weight |
| `kg/m2` | kg/m² | BMI |
| `mmHg` | mmHg | Blood pressure |
| `mmol/L` | mmol/L | Cholesterol, HbA1c |

### Example usage

```json
{
  "valueQuantity": {
    "value": 120,
    "unit": "mmHg",
    "system": "http://unitsofmeasure.org",
    "code": "mm[Hg]"
  }
}
```

**Note**: The `unit` field is human-readable, while `code` is the machine-readable UCUM code.

## HL7 Terminology Code Systems

### v2-0532 (Yes/No Indicator)

Used for binary (Yes/No) answers in questionnaires and observations.

**System URI**: `[http://terminology.hl7.org/CodeSystem/v2-0532](http://terminology.hl7.org/CodeSystem/v2-0532)`

| Code | Display |
| --- | --- |
| `Y` | Yes |
| `N` | No |

**Example**:

```json
{
  "valueCoding": {
    "system": "http://terminology.hl7.org/CodeSystem/v2-0532",
    "code": "Y",
    "display": "Yes"
  }
}
```

### v3-ActCode (Act Classification)

Used for classifying the type of encounter.

**System URI**: `[http://terminology.hl7.org/CodeSystem/v3-ActCode](http://terminology.hl7.org/CodeSystem/v3-ActCode)`

| Code | Display | Usage |
| --- | --- | --- |
| `VR` | virtual | Virtual/remote encounter |

### observation-category

Used to categorise observations by clinical domain.

**System URI**: `[http://terminology.hl7.org/CodeSystem/observation-category](http://terminology.hl7.org/CodeSystem/observation-category)`

| Code | Display | Usage |
| --- | --- | --- |
| `vital-signs` | Vital Signs | Height, weight, BMI, blood pressure |
| `social-history` | Social History | Smoking, alcohol, family history |
| `laboratory` | Laboratory | Cholesterol, HbA1c |
| `activity` | Activity | Physical activity levels |

### data-absent-reason

Used when observation values are unavailable.

**System URI**: `[http://terminology.hl7.org/CodeSystem/data-absent-reason](http://terminology.hl7.org/CodeSystem/data-absent-reason)`

| Code | Display | Usage |
| --- | --- | --- |
| `error` | Error | Test failed (e.g., insufficient sample) |


**The reason provided by lab is populated to "text" filed within dataAbsentReason object.**


**Example**:

```json
{
  "dataAbsentReason": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/data-absent-reason",
        "code": "error",
        "display": "Error"
      }
    ],
    "text": "Insufficient sample volume"
  }
}
```

---

## UK Core Code Systems

### UKCore-RecordStandardHeadings

Used for Composition section headings conforming to UK standards.

**System URI**: `[https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings](https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings)`

| Code | Display | Section Content |
| --- | --- | --- |
| `observations` | Observations | Vital signs |
| `social-context` | Social context | Social history |
| `clinical-risk-assessment` | Clinical risk assessment | Risk assessments |

## NHS Identifier Systems

### NHS Number

The unique patient identifier used across NHS services.

**System URI**: `[https://fhir.nhs.uk/Id/nhs-number](https://fhir.nhs.uk/Id/nhs-number)`

**Format**: 10-digit number with check digit (Modulus 11 algorithm)

**Example**: `9999999999`

```json
{
  "identifier": {
    "system": "https://fhir.nhs.uk/Id/nhs-number",
    "value": "9999999999"
  }
}
```

### ODS Organisation Code

Identifies NHS organisations (e.g., GP practices, trusts).

**System URI**: `[https://fhir.nhs.uk/Id/ods-organization-code](https://fhir.nhs.uk/Id/ods-organization-code)`

**ODS Portal**: [https://odsportal.digital.nhs.uk/](https://odsportal.digital.nhs.uk/)

**Example**: `R8N8C`

```json
{
  "identifier": {
    "system": "https://fhir.nhs.uk/Id/ods-organization-code",
    "value": "R8N8C"
  }
}
```

### Service-Specific Identifier

Bundle and encounter identifier for the NHS Health Check service.

**System URI**: `[http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/](http://fhir.nhs.uk/nhs-health-check-online.service.nhs.uk/)`
