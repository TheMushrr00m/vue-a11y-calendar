importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/vue-a11y-calendar/_nuxt/app.5eab43769ef16336efc6.js",
    "revision": "e3a2ca2d195ae25452590dfc5fe59285"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/common.b83a2094ee680ebe0eef.js",
    "revision": "28edd4025a9dd9da0bbb97fa214bc242"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/layouts/default.0c317dd6fbceadb0eb0d.js",
    "revision": "183fcaa2e09ee3fbf6b14b47f73e6649"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/manifest.610334777725d40d3713.js",
    "revision": "616223cf4c3f9846cd4b61b94c167182"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/pages/components/_component.592be15fd8f5e9041d7d.js",
    "revision": "7ea444da65025ad6e61bf7e4de5a21aa"
  },
  {
    "url": "/vue-a11y-calendar/_nuxt/pages/index.262ca893493f6579bb27.js",
    "revision": "85692508a39a44317da4f578ded2ebc9"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "vue-a11y-calendar_0.1.2",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/vue-a11y-calendar/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/vue-a11y-calendar/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
