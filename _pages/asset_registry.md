---
layout: page
title: Asset registry
permalink: /asset_registry
horizontal: false
---

Asset registry (`asset-registry`) project is being developed for users to register and query their assets. Some assets might include, physical land, argicultural machinery, water management systems, tractors, etc. Each asset is considered to be a polygon. 

## Prerequisites


<!--are these prerequisite accurate or will this library already be within the stack? If the library is a part of AgStack, how does the user access the library?
* You must have a user account for AgStack.

<!--If this prereq is required, what command should the user run to verify the installation?-->
* Verify that the S2 Geometry library is installed on your local environment. See [S2 Geometry Quick Start](https://s2geometry.io/devguide/cpp/quickstart).

<!--Should the user have python installed to use AgStack? Will Python already be within the stack? -->


## Search for an exisiting asset

You can search for specific assets by entering the geospatial information for your polygon. After you query your polygon, you receive a 256-byte/16-Char alphanumeric unique ID. You can view only the assets that are available from your user account.
  
<!--Enter the following query to search for multiple assets-->

<!--Enter the following query to search for assets with holes-->


<!--## Adding a new asset-->

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
<br />

**Version information**

Alpha version

<br />

#### Request

Define a new polygon to register your asset.
<!--add JSON example of requests-->

<br />

#### URI

`POST /api/user-registry/asset-registry/{geoId}`

<br />

##### Request parameters

<!--Type options: 
We can list if the parameter is a Header, Path, or Body parameter

Object, Array<String>, UUID, String, Boolean, Map<String,String>

is float the appropriate data type to list?

Or do we want to keep the type options that we have-->

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

<br />

#### Error codes

<!--Add Error codes if applicable-->


## Asset registry API

You can enter values to test the Asset registry API. From the AgStack website, click the **_APIs_** drop-down menu. Select _Asset registry_ to view the documentation. 

**Note:** Be sure to open the API in a new tab.

To test the API, click the drop-down arrow for the function that you want to test. Click the **Try it out** button to enter queries.
