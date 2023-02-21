---
layout: page
title: Asset registry
permalink: /asset_registry
horizontal: false
---

Asset registry (`asset-registry`) is a web application for AgStack users to register and query their assets. Some assets might include, physical land, argicultural machinery, water management systems, tractors, etc. Each asset is considered to be a polygon. 

## Prerequisites


<!--are these prerequisite accurate or will this library already be within the stack? If the library is a part of AgStack, how does the user access the library?
* You must have a user account for AgStack.

<!--If this prereq is required, what command should the user run to verify the installation?-->
* Verify that the S2 Geometry library is installed on your local environment. See [S2 Geometry Quick Start](https://s2geometry.io/devguide/cpp/quickstart).

<!--Should the user have python installed to use AgStack? Will Python already be within the stack? -->

## Register an asset 

When you register a new asset, you receive a unique geoID. You can register your Complete the following steps to register a field:

1. Log in to AgStack, then select the **Asset registry** link: asset-registry.agstack.org.
2. Register your assets by completing the _Asset_ form. Enter the required information.


## Search for an exisiting asset

You can search for specific assets by entering the geospatial information for your polygon. After you query your polygon, you receive a 256-byte/16-Char alphanumeric unique ID. You can view only the assets that are available from your user account. You can search for your asset using the following approaches:
   
   - Enter the polygon name
   - Enter the boundaries using latitude and longitude points
   - Select specific points from the geomap view
   - Entering an similarity overlap percentage

## Asset registry API

You can enter values to test the Asset registry API. From the AgStack website, click the **_APIs_** drop-down menu. Select _Asset registry_ to view the documentation. 

**Note:** Be sure to open the API in a new tab.

To test the API, click the drop-down arrow for the function that you want to test. Click the **Try it out** button to enter queries.
