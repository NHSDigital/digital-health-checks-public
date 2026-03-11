---
layout: default
title: "Development guide"
---
{% from "contents-list.njk" import contentsList %}
{% from "warning-callout.njk" import warningCallout %}

This development guide explains the integration between the Health Check Online service and its downstream data consumers. It introduces the overall architecture and describes the two key integration paths, the data flow and the acknowledgement flow.

{{ warningCallout("Important", "To support this integration, all consumers must be onboarded to the NHS Patient Data Manager (PDM) and the NHS Multicast Notification Service (MNS).") }}

{{ contentsList([
  { title: "Development guide", url: "/digital-health-checks-public/dev-guide/" },
  { title: "Integration overview", url: "/digital-health-checks-public/dev-guide/integration-overview/" },
  { title: "Health Check data flow", url: "/digital-health-checks-public/dev-guide/health-check-data-flow/" },
  { title: "Acknowledgement flow", url: "/digital-health-checks-public/dev-guide/acknowledgement-flow/" }
], "Development guide") }}
