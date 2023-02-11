const sse = new EventSource('/esbuild');
sse.addEventListener('change', () => location.reload());