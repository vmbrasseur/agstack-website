window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    url: [
      {urls: "https://github.com/agstack/agstack-website/blob/main/apis/asset_registry.json", name: "Asset registry API"},
      {urls: "https://github.com/agstack/agstack-website/blob/main/apis/user_registry.json", name: "User registry API"},
      ]
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
