---
layout: default
title: "FHIR standard reference"
---
{% from "inset-text.njk" import insetText %}

The NHS Digital Health Check service implements the **HL7 FHIR R4** (Release 4) specification with conformance to the **UK Core FHIR Implementation Guide**. This document outlines the standards foundation and conformance requirements.

## HL7 FHIR R4 Specification

### What is FHIR?

FHIR (Fast Healthcare Interoperability Resources) is a standard for exchanging healthcare information electronically. It combines the best features of HL7's previous standards (v2, v3, CDA) with modern web technologies.

### Version Information

| Specification | Version 
| --- | --- | 
| HL7 FHIR | R4 (4.0.1) |
| Publication Date | 2019-10-30 |
| Specification URL | [https://hl7.org/fhir/R4/](https://hl7.org/fhir/R4/) |

### Core Concepts

#### Resources

FHIR defines healthcare data as **Resources** - discrete units of exchangeable data. The NHS Digital Health Check uses the following resource types:

| Resource | UK Core / FHIR Spec Link | Purpose |
| --- | --- | --- |
| Bundle | [https://hl7.org/fhir/R4/bundle.html](https://hl7.org/fhir/R4/bundle.html) | Container for multiple resources |
| Composition | [https://simplifier.net/hl7fhirukcorer4/ukcore-composition](https://simplifier.net/hl7fhirukcorer4/ukcore-composition) | Document structure and sections |
| Encounter | [https://simplifier.net/hl7fhirukcorer4/ukcore-encounter](https://simplifier.net/hl7fhirukcorer4/ukcore-encounter) | Healthcare interaction |
| Observation | [https://simplifier.net/hl7fhirukcorer4/ukcore-observation](https://simplifier.net/hl7fhirukcorer4/ukcore-observation) | Measurements and assertions |
| RiskAssessment | [https://hl7.org/fhir/R4/riskassessment.html](https://hl7.org/fhir/R4/riskassessment.html) | Risk predictions |
| DiagnosticReport | [https://simplifier.net/hl7fhirukcorer4/ukcore-diagnosticreport](https://simplifier.net/hl7fhirukcorer4/ukcore-diagnosticreport) | Clinical reports |
| QuestionnaireResponse | [https://hl7.org/fhir/R4/questionnaireresponse.html](https://hl7.org/fhir/R4/questionnaireresponse.html) | Answers to questionnaires |

{{ insetText("This project does not use any custom profiles. Where a UK Core profile exists (e.g. Composition, Encounter, Observation, DiagnosticReport), resources conform to that profile. For Bundle, RiskAssessment, and QuestionnaireResponse, no UK Core profile is defined, so the base FHIR R4 resource definitions apply.") }}

#### Data Types

Common FHIR data types used in this implementation:

| Data Type | Description | Example |
| --- | --- | --- |
| `Identifier` | Logical identifier for a resource | NHS Number |
| `Reference` | Reference to another resource | `Encounter/abc-123` |
| `CodeableConcept` | Coded value with text | SNOMED CT code + display |
| `Coding` | Single code from a terminology | `{ system, code, display }` |
| `Quantity` | Measured amount with units | `{ value: 120, unit: "mmHg" }` |
| `dateTime` | Date and time | `2025-01-14T10:30:00+00:00` |
| `Period` | Time range | `{ start, end }` |

## UK Core FHIR Implementation Guide

### Overview

UK Core is the NHS England endorsed FHIR implementation guide that defines UK-specific profiles, extensions, and value sets. It ensures consistent FHIR implementations across the UK healthcare system.

### Version Information

| Specification | Version | Status |
| --- | --- | --- |
| UK Core | STU3 (3.0.0) | Standard for Trial Use |
| Base Specification | FHIR R4 |  |
| Simplifier URL | [https://simplifier.net/HL7FHIRUKCoreR4](https://simplifier.net/HL7FHIRUKCoreR4) |  |
| Implementation Guide | [https://simplifier.net/guide/uk-core-implementation-guide-stu3-sequence](https://simplifier.net/guide/uk-core-implementation-guide-stu3-sequence) |  |

### Applicable UK Core Profiles

The following UK Core profiles are relevant to this implementation:

#### UKCore-Observation

Used for all clinical observations (vital signs, laboratory results, social history).

```
Profile: https://fhir.hl7.org.uk/StructureDefinition/UKCore-Observation
```

Key conformance points:

- `status` is required (typically `final`)- `code` must use appropriate terminology (SNOMED CT, LOINC)- `subject` identifies the patient- `effectiveDateTime` records when the observation was made

#### UKCore-Encounter

Used for the health check session.

```
Profile: https://fhir.hl7.org.uk/StructureDefinition/UKCore-Encounter
```

Key conformance points:

- `status` indicates the encounter state- `class` uses HL7 ActCode (e.g., `VR` for virtual)- `type` describes the encounter type- `subject` identifies the patient

#### UKCore-Composition

Used for the document structure.

```
Profile: https://fhir.hl7.org.uk/StructureDefinition/UKCore-Composition
```

Key conformance points:

- `type` identifies the document type- `section` organises content- `subject` and `author` are required

## UK Core Code Systems

The following UK Core code systems are used:

### UKCore-RecordStandardHeadings

Used for Composition section headings.

```
System: https://fhir.hl7.org.uk/CodeSystem/UKCore-RecordStandardHeadings
```

| Code | Display |
| --- | --- |
| `observations` | Observations |
| `social-context` | Social context |
| `clinical-risk-assessment` | Clinical risk assessment |

## FHIR RESTful API

### Transaction Bundles

The NHS Digital Health Check transmits data as a FHIR **Transaction Bundle**. This is an atomic operation where all resources are processed together.

```json
{
  "resourceType": "Bundle",
  "type": "transaction",
  "entry": [
    {
      "fullUrl": "urn:uuid:...",
      "resource": { ... },
      "request": {
        "method": "PUT",
        "url": "ResourceType/id"
      }
    }
  ]
}
```

### HTTP Methods

| Method | Usage | Idempotent |
| --- | --- | --- |
| `PUT` | Create or update a resource | Yes |

### Conditional Operations

The implementation uses conditional create to ensure idempotency:

```json
{
  "request": {
    "method": "PUT",
    "url": "Observation/abc-123",
    "ifNoneMatch": "*"
  }
}
```

The `ifNoneMatch: "*"` header indicates the resource should only be created if it doesn't already exist.

## Conformance Requirements

### Must Support Elements

Elements marked as "Must Support" in UK Core profiles must be:

- Populated if the data is available- Understood by receiving systems

### Required vs Optional

| Cardinality | Meaning |
| --- | --- |
| `1..1` | Required, exactly one |
| `0..1` | Optional, at most one |
| `0..*` | Optional, any number |
| `1..*` | Required, at least one |
