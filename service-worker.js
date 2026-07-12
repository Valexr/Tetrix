self.addEventListener('install', (_event) => {
  console.log('Service Worker установлен');
});

self.addEventListener('activate', (_event) => {
  console.log('Service Worker активирован');
});

self.addEventListener('fetch', (_event) => {
  // Можно добавить кэширование
});
