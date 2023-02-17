import http from 'http';

export default (host = '0.0.0.0', port = 8000) => http.createServer((req, res) => {
    const forwardRequest = (path) => {
        const options = {
            hostname: host,
            port,
            path,
            method: req.method,
            headers: req.headers,
        };
        const proxyReq = http.request(options, (proxyRes) => {
            if (proxyRes.statusCode === 404) {
                return forwardRequest("/");
            }
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res, { end: true });
        });

        req.pipe(proxyReq, { end: true });
    };
    forwardRequest(req.url);
});