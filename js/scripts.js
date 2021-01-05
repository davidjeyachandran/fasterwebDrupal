(function ($, Drupal) {
  /* This code must NOT be in Drupal.behaviours because we call Drupal.attachBehaviors()
    that calls all Drupal.behaviours and we do not want to call recursively the code below.
  */

  var googleAnalytics = window.ga || null;

  var externalScriptObject = new Object({
    Drupal,
    jQuery,
    ga: googleAnalytics,
  });

  var websiteConfig = {
    urlInclude: [],
    urlExclude: ["*logout*", "/admin_menu*", "*admin/*"],
    doNotFetch: ["*logout*"],
    elementSelector: null,
    externalScriptObject: externalScriptObject,
    url: {
      "/": {
        pageFunction: function (urlTarget, externalScriptObject) {},
      },
      all: {
        pageFunction: function (urlTarget, externalScriptObject) {
          console.log("All url callback: " + window.location.pathname);

          var Drupal = externalScriptObject.Drupal;
          var ga = externalScriptObject.ga;
          if (ga) {
            ga("set", "dimension1", "faster");
            ga("send", "pageview", urlTarget, {
              location: window.location.href,
            });
          }
          if (Drupal) Drupal.attachBehaviors();
        },
      },
    },
  };

  window.addEventListener("load", function () {
    window.faster(websiteConfig);
  });
})(jQuery, Drupal);
