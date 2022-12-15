---
layout: page
title: Asset registry API
permalink: /asset_registry_api
horizontal: false
nav: false
---

## Overview

Learn about the APIs that are used to manage assets:

* [Find asset for a specific field](#find-asset-for-a-specific-field)
* [Get asset](#get-asset)
* [Find asset for a specific point](#find-asset-for-a-specific-point)
* [Find asset for the Area of Interest (AOI)](#find-asset-for-the-area-of-interest)
* [Set metadata](#set-metadata)

### Find asset for a specific field

This documentation is for the `findAssetForField` API, which can be used to define or create a new polygon and search for polygons. There are four possible requests: create, read, update, and delete. 

<!--are there any user requirements to use this API?-->
**Version information**

Alpha version

#### Request

Define a new polygon to register your asset
<!--add JSON example of requests-->

#### URI

`POST /api/user-registration/asset-registration/{geoId}`

##### Request parameters

|            |              |            |
|------------|-------------|-----------|
| Parameter | Type | Description |
| bound | WKT for the polygon | _Required_ The polygon to be identified.|
| inclusion | Decimal number between 0 and 1 <!--is float the appropriate data type to list?--> | _Optional_ The area of the intersection divided by the area of the result polygon will be at least this large. Default is 0.9. |
| overlap |  Decimal number between 0 and 1                   |                   |
| create      |  Decimal number between 0 and 1                   |                   |
| includeAutocreated      |  Decimal number between 0 and 1                   |                   |
| includeS2Indices      |  Decimal number between 0 and 1                   |                   |
| accessKey      |   string        |                   |
| signature      |   string        |                   |







<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>bound</td>
    <td>WKT for the polygon</td>
    <td><i>Required</i> The polygon to be identified. </td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

BaseURL: http://api.agstack.org/asset-registry/
Schemes: HTTP

#### Response








Add a new asset by registering geograph boundaries for your field. After you add an asset, a unique geoid,  to add A registration is the association between the user registration and other AgStack 
