var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/sample/',
	'/sample/images/ic_launcher.png',
	'/sample/images/_IGP4305.jpg'
];
// インストール処理
self.addEventListener('install', function(event)
{
	event.waitUntil(caches
		.open(CACHE_NAME)
		.then(function(cache)
		{
			return cache.addAll(urlsToCache);
		}));
});
// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event)
{
	event.respondWith(caches.match(event.request).then(function(response)
	{
		return response ? response : fetch(event.request);
	}));
});