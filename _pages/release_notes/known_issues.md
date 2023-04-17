---
layout: page
title: Known issues and limitations
permalink: /known_issues
horizontal: false
nav: false
---

## Documentation known issues

### API real URLs inaccurate 

When you select **Asset registry** from the _APIs_ drop-down tab, the User registry API is displayed while the URL shows, `asset_registry_api`. Similarly, when you select **User registry** from the _Select a definition_ drop-down menu, the URL is not updated accurately.

This is due to the Swagger configuration for selecting definitions. To view the API that you want from the Swagger user interface, you must select the API from the _Select a definition_ drop-down menu.

## Asset registry known issues

### Field boundary management unavailable

Updating or deleting field boundaries is not supported.

### Field registeration limits

You can only create GeoIDs for fields less than 1000 acres. For example, forests for hydrology, political boundaries, etc. registration is not supported.

Return to the [AgStack Home page](https://agstack.github.io/agstack-website/).
