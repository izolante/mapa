/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';

// Precache and route assets
precacheAndRoute(self.__WB_MANIFEST);

// Cache images
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images-cache',
  })
);

self.addEventListener('install', event => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});

