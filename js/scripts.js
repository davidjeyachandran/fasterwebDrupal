ga = null;

(function ($, ga) {
  /* This code must NOT be in Drupal.behaviours because we call Drupal.attachBehaviors()
    that calls all Drupal.behaviours and we do not want to call recursively the code below.
  */

  const externalScriptObject = new Object({
    Drupal,
    jQuery,
    ga,
  });

  const websiteConfig = {
    urlInclude: [],
    urlExclude: [
      "*logout*",
      "/admin_menu*",
      "/contact",
      "*admin/*",
      "*.txt",
      "*.doc",
      "*.docx",
      "*.pdf",
      "*.ppt",
      "*.pptx",
      "*.mp3",
      "*.mp4",
      "*.avi",
      "*.jpg",
      "*.jpeg",
      "*.zip",
    ],
    doNotFetch: ["*logout*"],
    elementSelector: null,
    externalScriptObject: externalScriptObject,
    url: {
      "/": {
        pageFunction: function (urlTarget, externalScriptObject) {},
      },
      pageFunction: function (urlTarget, externalScriptObject) {
        const Drupal = externalScriptObject.Drupal;
        const ga = externalScriptObject.ga;
        const jQuery = externalScriptObject.jQuery;

        if (ga) {
          ga("set", "dimension1", "faster");
          ga("send", "pageview", urlTarget, {
            location: window.location.href,
          });
        }
        if (Drupal) {
          console.log("Drupal attach behaviours");
          Drupal.attachBehaviors();
        }

        console.log("All url callback: " + window.location.pathname);
      },
    },
  };

  window.addEventListener("load", function () {
    // console.log(websiteConfig);
    window.faster(websiteConfig);
  });

  Drupal.behaviors.fasterweb = {
    attach: function (context, settings) {
      console.log("Running Faster");
    },
  };
})(jQuery, ga);
