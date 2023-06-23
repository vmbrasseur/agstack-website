---
layout: page
title: Known issues and limitations
permalink: /known_issues
horizontal: false
nav: false
---

Continue reading to view the current known issues of the AgStack project. There is also a link to the Jira issue if you are interested in helping to resolve the issue.

## Documentation known issues

### Real URLs for API documentation are inaccurate 

* When you select **Asset registry** from the _APIs_ drop-down tab, the User registry API is displayed with the following URL:

`https://agstack.github.io/agstack-website/asset_registry_api`. 

When you select **Asset registry** from the _Select a definition_ drop-down menu, the Asset registry API is displayed with the following URL:

`https://agstack.github.io/agstack-website/user_registry_api?urls.primaryName=Asset%20registry` 

Similarly, when you select **User registry** from the _Select a definition_ drop-down menu, the URL is not updated accurately. This is due to the Swagger configuration for selecting definitions. To view the API that you want from the Swagger user interface, you must select the API from the _Select a definition_ drop-down menu.

* [AG-23](https://team-16705118030816.atlassian.net/browse/AG-23) - **Ensure there are effective and helpful READMES for the AgStack repos** 

## Asset registry known issues

#### Field boundary management unavailable

Updating or deleting field boundaries is not supported.

#### Field registeration limits

You can only create GeoIDs for fields less than 1000 acres. For example, forests for hydrology, political boundaries, etc. registration is not supported.

Return to the [AgStack Home page](https://agstack.github.io/agstack-website/).
