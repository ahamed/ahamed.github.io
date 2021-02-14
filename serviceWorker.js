const staticAssets = 'assets-v1';
const assets = [
	'./',
	'./index.html',
	'./assets/bundle.css',
	'./assets/bundle.js',
	'./assets/vendor.js',
	'./assets/images/banner/shape/shape-1.png',
	'./assets/images/banner/shape/shape-2.png',
	'./assets/images/banner/shape/shape-3.png',
	'./assets/images/banner/shape/shape-4.png',
	'./assets/images/banner/shape/shape-5.png',
	'./assets/images/banner/shape/shape-6.png',
	'./assets/images/work/project_360x360_1.jpg',
	'./assets/images/work/project_360x360_2.jpg',
	'./assets/images/work/project_360x360_3.jpg',
	'./assets/images/work/project_360x360_4.jpg',
	'./assets/images/work/project_360x360_5.jpg',
	'./assets/images/work/project_360x360_6.jpg',
	'./assets/images/call-to-action.jpg',
	'./assets/images/favicon.png',
	'./assets/images/map.png',
	'./assets/images/picture.png',
	'./assets/images/bullet.svg',
];

self.addEventListener('install', installEvent => {
	installEvent.waitUntil(
		caches.open(staticAssets).then(cache => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener('fetch', fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request);
		})
	);
});
