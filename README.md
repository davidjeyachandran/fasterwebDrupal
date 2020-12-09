# FasterWeb Drupal 7 module

We believe that **anyone**, **anywhere** with **any device** should be able to access the information and the services that they need... **instantly**.

When someone uses your website, their experience depends on where they are, their bandwidth and their device. With this module, someone living far from the server, on a 512Kb Internet connection and using an old phone will still get an amazing user experience - sub second page loads on most links. The module does not change the first page load on your site - it accelerates subsequent clicks of links in your site.

##How it works?
On page load:

- We intelligently prefech the pages the user is most likely to click on
- We load these pages using AJAX and store the HTML in memory

When the user clicks on a link, if we have the HTML:

- we apply this HTML (using a DOM tree diff between the current page HTML and the target page HTML)

It works based because we know that:

- human behaviour on a website is generally predictable
- loading HTML via AJAX is fast
- minimising DOM changes using a diff is fast

##Will it work on my site?
The FasterWeb module will work on standard Drupal pages. The module creates a JS click event that may conflict with your own page's JS functionality - especially if they haven't been setup using Drupal.behaviours. The module is not an all or nothing solution. Using the module's configuration you can exclude pages that cause conflict. It's better that 90% of pages are accelerated using the FasterWeb module than none. If there is JS code that hasn't been included using Drupal.behaviours, they can be added to the FasterWeb configuration eg. run jQuery("#homeslider").bxSlider()

## FasterWeb service (non-Drupal)

The FasterWeb module connects to an external FasterWeb service. Analytics for every link clicked are sent to the FasterWeb service. We use this information to intelligently predict where future users are likely to click. We will NEVER share or sell this information and we do not fingerprint users. This is the information that is sent:

- sessionKey (random hash)
- country (for statistics)
- current url
- target url
- time to load HTML
- time to apply target page
- Cache Hit?

## Cost

- free for personal sites
- low cost for not-for-profits

## Components of the solution

- Drupal module + Javascript configuration
- Javascript Library (fasterweb.js)
- Server side for suggesting pages that need to be prefetched

## Why try FasterWeb?

- Most bang for your buck and your time. Nothing else will help get your users sub-second page loads, anywhere and on any device.
- FasterWeb complements other web performance tools/services - Drupal caching, CDNs, image and other front-end optimizations
