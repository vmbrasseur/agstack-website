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

Your field is registered.

## Fetch a field

Complete the following steps to fetch a field:

1. After you log in, navigate to the asset registry by selecting the **Asset registry** button.
2. Select the **Action** icon from the map.
3. Enter a valid Geo ID for the _Search by Geo ID_ parameter.

The bounded field is displayed on the map.

### Fetch overlapping fields

1. Select the **Draw polygon** icon.
2. Enter the values for the following parameter fields: _Resolution level_, _Threshold_, _S2 index_, and _Domain_.
3. Select the **Fetch field** button.

Relevant bounded fields are displayed from the map

### Fetch bounding box fields

1.  Select the **Draw rectangle** icon.
2.  Draw a rectangle across the area that you want.
3.  Click the **Fetch field** button.

Relevant bounded fields are displayed from the map.

### Fetch fields for a point

You can fetch a field based on the latitude and longitude point that you provide. Complete the following steps:

1. Select the **Marker** icon on the map.
2. Enter the values for the _Domain_ and _S2 index_ parameter fileds.
3. Select the **Fetch field** button.

The bounded field appears on the map.

## Get overlap percentage of two fields

Complete the following steps to discover the overlap percentage of two Geo IDs:

1. Select the **Actions** icon.
2. Provide the two Geo IDs.
3. Click the **% Percentage** button.

A percentage value is provided.

## Asset registry API

You can enter values to test the Asset registry API from the AgStack website. Complete the following steps:

1. From the AgStack website header, click the **_APIs_** tab > **Asset registry**. 

   **Note:** Be sure to open the API in a new tab.

2. To test the API, click the drop-down arrow for the function that you want to test. 
3. Click the **Try it out** button to enter queries.
