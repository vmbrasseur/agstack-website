---
layout: page
title: Project & repository descriptions
permalink: /projects_overview
horizontal: false
nav: false
---

There are independent projects within the AgStack projects, and more can be added depending on community participation. View the following table list of the projects within AgStack:

|            |              |            |                |
|------------|-------------|-----------|-----------|
| **Project/repository** | **Description** | **Type** | **Status** |
| [`ag-rec`](https://github.com/agstack/ag-rec) | Simple recommendation repository for publishing and subscribing to agricultural recommendations. | Hosted web service | Prototype stage, working to create a Minimum Viable Product (MVP) |
| [`asset-registry`](https://github.com/agstack/asset-registry) | API and Map F/E for registering and querying field boundaries. Returns a value for your geographical identification for a unique geo-boundary. | Hosted web service| Alpha stage, working to become beta stage |
| [`MessageCast`](https://github.com/agstack/MessageCast) | Mobile websockets asynchronous message bus that allows users to publish and subscribe messages on a _topic_ (which is a channel) [including using forms - see form-hub]. Importantly, all images | Software framework | Early prototype |
| [`user-registry`](https://github.com/agstack/user-registry) | API for registering a user and getting (via email / OTP) a public and a private set of credentials that are be used for all `ag-stack` projects | Hosted web service | Early prototype; need to refine the credential system by leveraging open source best practices |
| [`weather-server`](https://github.com/agstack/weather-server) | National Centers for Environmental Prediction (NCEP) weather server for hourly weather forecast anywhere in the world. |  Hosted web service| Early prototype |

View the [_Contribute_](https://agstack.github.io/agstack-website/contribute) tab for more details. 
<!--projects that do not have an existing repository-->
<!--| [`ag-model`]() | Simple Python repository/wheel (invoked through pip) that allows object-oriented models to be created, published and subscribed in Python. Initially, this is only for pests and diseases. | Model repository | N/A |
|[`api-hub`]() | Simple hub for vendors to publish and enable APIs that support AgStack projects. | Hosted web service | N/A |
| [`ag-net`]() | Tagged image data store for agriculture-relevant images published by any instance from MessageCast. No user or author-attributable information is stored. Images are stored with both geo-spatial and hashtag support. | Hosted web service | Early prototype |
| [`data-wallet`]() | A distributed, secure, and data aggregation that implements the digital wallet work. | Software framework that can be downloaded on Linux Ubuntu 20.04| N/A |
| [`event-store`]() | A simple, no-sql db that is pre-integrated and bundled with asset-registry, user-registry, api-hub,  message-cast and mobile-pwa. Provides multi-tenant support (as opposed to single tenant in FarmOS) | Software framework that can be downloaded on Linux Ubuntu 20.04 |  N/A |
| [`form-hub`]() | Mobile form builder and publisher, where programming is not required, to a form library and post in MessageCast. There are plans to leverage the digital `data-wallet` paradigm and design being built at the Linux Foundation. | Hosted web service | N/A |
| [`mobile-pwa`]() | A progressive web application (mobile, offline supported) that is pre-integrated and bundled with the following projects, `event-store`, `MessageCast`, `api-hub`,and `form-hub`. | Software framework that can be downloaded on Linux Ubuntu 20.04 | N/A |-->



