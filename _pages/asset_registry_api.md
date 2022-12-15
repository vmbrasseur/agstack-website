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

**BaseURL**: http://api.agstack.org/asset-registry/
<!--are there any user requirements to use this API?-->
**Version information**

Alpha version

#### Request

Define a new polygon to register your asset.
<!--add JSON example of requests-->

#### URI

`POST /api/user-registry/asset-registry/{geoId}`

##### Request parameters

<!--Type options: 
We can list if the parameter is a Header, Path, or Body parameter

Object, Array<String>, UUID, String, Boolean, Map<String,String>

is float the appropriate data type to list?-->

Or do we want to keep the type options that we have. now 
|            |              |            |
|------------|-------------|-----------|
| Parameter | Type | Description |
| bound | Well-known text (WKT) for the polygon | _Required_ <br /> The polygon to be identified. <!--I recommend the following (please confirm if this is accurate): Enter the boundaries of a polygon as latitude and longitude degrees-->|
| inclusion | Decimal number between 0 and 1  | _Optional_ <br /> The area of the intersection divided by the area of the result polygon. Default value is `0.9`. |
| overlap |  Decimal number between 0 and 1 | The area of the intersection of the result and query divided by the area of the query polygon. Default is value `0.9`. |
| create |  Integer | If no matching polygon is found, a new polygon is registered if `create` is set to `1` (`create=1`). |
| includeAutocreated |  Integer  | Include all auto-created polygons (using machine learning)|
| includeS2Indices |  integer | Include the S2 indices (list of Level 20, Level 19, Level 15. Level 8 and level 5) of all the indices that intersect the asset ID. <!--what do the levels represent? why is this important?-->|
| accessKey  |  string  | The identifier of the workload making the request <!--is this the username?--> |
| signature  | string | The hash of the arguments excluding the signature keyed with the private key, and associated with the access key.|


<table>
  <tr>
    <th>Parameter</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>bound</td>
    <td>Well-known text (WKT) for the polygon</td>
    <td><i>Required</i> <br /> The polygon to be identified. </td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>



<!--#### Response-->

<!--Add JSON snippet-->


#### Error codes

<!--Add Error codes if applicable-->
