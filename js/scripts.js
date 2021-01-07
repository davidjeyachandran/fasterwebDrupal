(function ($, Drupal) {
  /* This code must NOT be in Drupal.behaviours because we call Drupal.attachBehaviors()
    that calls all Drupal.behaviours and we do not want to call recursively the code below.
  */

  var externalScriptObject = new Object({
    Drupal,
    jQuery,
  });

  var websiteConfig = {
    urlInclude: ["/education-center/*", "/knowledge-center/*"],
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

          if (window.ga) {
            window.ga("set", "dimension1", "faster");
            window.ga("send", "pageview", urlTarget);
          }

          var Drupal = externalScriptObject.Drupal;
          if (Drupal) Drupal.attachBehaviors();
        },
      },
    },
  };

  window.addEventListener("load", function () {
    window.faster(websiteConfig);
  });
})(jQuery, Drupal);
