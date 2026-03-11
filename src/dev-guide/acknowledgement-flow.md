---
layout: default
title: "Acknowledgement flow"
---

## Overview

The acknowledgement flow is implemented using the [Acknowledgement framework](https://simplifier.net/guide/Acknowledgement-Framework/Home?version=current). It is designed to manage both technical and business acknowledgements, covering success and failure scenarios. Acknowledgements are a mandatory part of the data flow and play a critical role in reducing operational risk. If an expected acknowledgement is not received within the defined timeframe, an alert is raised and the relevant Standard Operating Procedure is triggered.

Under the framework, the consumer of a Health Check notification must retrieve the data from PDM. When data is manually filed into the patient record, the consumer must issue a technical acknowledgement after receiving the Health Check event, followed by a business acknowledgement once the data has been successfully written to the patient record.

![Integration overview](/digital-health-checks-public/dev-guide/assets/Integration-overview-ack.png)

The primary interface for the data consumer is PDM. The MessageHeader and OperationOutcome FHIR resources are used to carry acknowledgement details. Once these resources have been successfully created, PDM issues an MNS notification to inform the NHS Health Check Service that the acknowledgement is ready to be retrieved.

The framework supports two acknowledgement modes. In single-acknowledgement mode, one acknowledgement message is issued for each outbound event. Alternatively, acknowledgements can be split into two separate messages:

- **Technical acknowledgement** — issued when the subscribed consumer receives the event.
- **Business acknowledgement** — issued when the subscribed consumer has processed the event.

## Single Acknowledgement Mode

### Positive Acknowledgement (Business Acknowledgement)

![Positive Acknowledgement (Business Acknowledgement)](/digital-health-checks-public/dev-guide/assets/positive-ack.png)

### Negative Acknowledgement (Business Acknowledgement)

![Negative Acknowledgement (Business Acknowledgement)](/digital-health-checks-public/dev-guide/assets/negative.ack.png)

## Business and Technical Acknowledgement Mode

### Positive Technical and Positive Business Acknowledgement

![Positive Technical and Positive Business Acknowledgement](/digital-health-checks-public/dev-guide/assets/positive-tech-ack.png)

### Positive Technical and Negative Business Acknowledgement

![Positive Technical and Negative Business Acknowledgement](/digital-health-checks-public/dev-guide/assets/postiive-tech-nagative-business-ack.png)

### Negative Technical Acknowledgement

![Negative Technical Acknowledgement](/digital-health-checks-public/dev-guide/assets/negative-tech-ack.png)

### Positive Technical and no Business Acknowledgement

Failure to receive a business acknowledgement within the agreed timeframe will trigger an alert.

### No Acknowledgement

Failure to receive a business acknowledgement within the agreed timeframe will trigger an alert.
