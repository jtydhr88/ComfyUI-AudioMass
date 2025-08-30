const assets = [
	'/audiomass/manifest.json',
	'/audiomass/ico.png',
	'/audiomass/icon.png',
	'/audiomass/index.html',
	'/audiomass/main.css',
	'/audiomass/dist/wavesurfer.js',
	'/audiomass/dist/plugin/wavesurfer.regions.js',
	'/audiomass/oneup.js',
	'/audiomass/app.js',
	'/audiomass/keys.js',
	'/audiomass/contextmenu.js',
	'/audiomass/ui-fx.js',
	'/audiomass/ui.js',
	'/audiomass/modal.js',
	'/audiomass/state.js',
	'/audiomass/engine.js',
	'/audiomass/actions.js',
	'/audiomass/drag.js',
	'/audiomass/recorder.js',
	'/audiomass/welcome.js',
	'/audiomass/fx-pg-eq.js',
	'/audiomass/fx-auto.js',
	'/audiomass/local.js',
	'/audiomass/id3.js',
	'/audiomass/lzma.js',
	'/audiomass/lame.js',
	'/audiomass/fonts/icomoon.ttf',
	'/audiomass/fonts/icomoon.woff',
	'/audiomass/favicon.ico',
	'/audiomass/eq.html',
	'/audiomass/sp.html',
	'/audiomass/test.mp3'

];

self.addEventListener( 'install', async function () {
	const cache = await caches.open( 'audiomass' );
	assets.forEach( function ( asset ) {
		cache.add( asset ).catch( function () {
			console.error( '[SW] Cound\'t cache:', asset );
		});
	});
});

self.addEventListener( 'fetch', async function ( event ) {
	const request = event.request;
	event.respondWith( cacheFirst( request ) );
});

async function cacheFirst( request ) {
	const cachedResponse = await caches.match( request );
	if ( cachedResponse === undefined ) {
		console.error( '[SW] Not cached:', request.url );
		return fetch( request );
	}

	return cachedResponse;
}