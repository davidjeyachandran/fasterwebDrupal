(function ($, Drupal) {
  Drupal.behaviors.fasterweb = {
    attach: function (context, settings) {
      // Ensure that we run this code only once
      if (!Drupal.settings.fasterweb.isRunAlready) {
        Drupal.settings.fasterweb.isRunAlready = true;

        var externalScriptObject = new Object({
          Drupal,
          jQuery,
        });

        var websiteConfig = {
          type: "Drupal 7",
          debug: settings.fasterweb.debug,
          urlInclude: settings.fasterweb.urls_include,
          urlExclude: settings.fasterweb.urls_exclude,
          urlDoNotFetch: settings.fasterweb.urls_do_not_prefetch,
          elementSelector: null,
          externalScriptObject: externalScriptObject,
          url: {
            "/": {
              pageFunction: function (urlTarget, externalScriptObject) {},
            },
            all: {
              pageFunction: function (urlTarget, externalScriptObject) {
                // console.log("All url callback: " + window.location.pathname);

                if (window.ga) {
                  // window.ga("send", "pageview", urlTarget);
                }

                var Drupal = externalScriptObject.Drupal;
                if (Drupal) Drupal.attachBehaviors();
              },
            },
          },
        };

        window.faster.init(websiteConfig);
      }
    },
  };
})(jQuery, Drupal);
