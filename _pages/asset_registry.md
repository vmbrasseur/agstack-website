---
layout: page
title: Asset registry
permalink: /asset_registry
horizontal: false
---

Asset registry (`asset-registry`) is a web application for AgStack users to register and query their assets. Some assets might include, physical land, argicultural machinery, water management systems, tractors, etc. Each asset is considered to be a polygon. 

## Prerequisites

* You must have a user account for AgStack.

<!--If this prereq is required, what command should the user run to verify the installation?-->
* Verify that the S2 Geometry library is installed on your local environment. See [S2 Geometry Quick Start](https://s2geometry.io/devguide/cpp/quickstart).

## Search for an exisiting asset

You can search for specific assets by entering the geospatial information for your polygon. After you query your polygon, you receive a 256-byte/16-Char alphanumeric unique ID. You can view only the assets that are available from your user account. 
   
To find out the percentage overlap of two Geo IDs, enter the specific Geo IDs that you want to check.

## Register a field 

When you register a field, you receive a unique geoID. You can register a field by using the asset registry map. Complete the following steps to register a field:

1. Log in to the AgStack user registry, then select the **Asset registry** button. You are directed to the map user interface: [asset-registry.agstack.org](asset-registry.agstack.org)
2. Select the _Draw polygon_ or _Draw rectangle_ icon.
3. You can draw the polygon in different ways:
   * When you select to draw a polygon, select specific points to create a boundary around the area. Select the initial point to close the polygon.
   * When you select to draw a rectangle, click and drag your cursor to create the rectangular boundary.
4. When you click the drawn polygon the _Field Actions_ box appears. The actions listed in the _Field Actions_ box are optional.
5. To fetch an existing field, enter the the geo information that you have. Click the _Fetch Field_ button.
6. Select the _Register Field_ button to register the polygon.

## Fetch a field


### Fetch overlapping fields

1. Select the _Draw polygon_ icon.
2. Enter the values for the following parameter fields: _Resolution level_, _Threshold_, _S2 index_, and _Domain_.



### Fetch bounding box fields

1.  Select the _Draw rectangle_ icon.
2.  Draw a rectangle across the area that you want.
3.  Click the **Fetch field** button.
4.  Relevant bounded fields are displayed on the map.

### Fetch fields for a point

1. Select the marker icon on the map.
2. Enter the values for the _Domain_ and _S2 index_ parameter fileds.
3. Select the **Fetch field** button.
4. The bounded field appears on the map.


## Get percentage overlap of two fields






## Asset registry API

You can enter values to test the Asset registry API. From the AgStack website, click the **_APIs_** drop-down menu. Select _Asset registry_ to view the documentation. 

**Note:** Be sure to open the API in a new tab.

To test the API, click the drop-down arrow for the function that you want to test. Click the **Try it out** button to enter queries.
