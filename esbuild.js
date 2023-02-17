import { build, context } from 'esbuild';
import svelte from 'esbuild-svelte';
import preprocess from 'svelte-preprocess';
import rm from './env/rm.js';
import log from './env/log.js';

const DEV = process.argv.includes('--dev');

const serveOptions = {
    servedir: 'public',
    onRequest(args) {
        console.log(
            // `%d %s %dms %s`,
            args.status,
            args.method,
            args.timeInMS,
            args.remoteAddress + args.path,
        );
    },
};

const svelteOptions = {
    compileOptions: {
        dev: DEV,
        css: false,
        immutable: true
    },
    preprocess: [
        preprocess({
            sourceMap: DEV,
            typescript: true,
        }),
    ]
};

const buildOptions = {
    bundle: true,
    minify: !DEV,
    sourcemap: DEV,
    entryPoints: ['src/app.ts'],
    outdir: 'public/build',
    format: 'esm',
    loader: { '.svg': 'text' },
    plugins: [svelte(svelteOptions), log],
    inject: DEV ? ['./env/lr.js'] : [],
    legalComments: "none",
    logLevel: 'info'
};

await rm('public/build');

if (DEV) {
    const ctx = await context(buildOptions);

    await ctx.watch();
    const { host, port } = await ctx.serve(serveOptions);

    // const proxy = http();
    // proxy.listen(port);
    // console.log(`Serve on http://${host}:${port}`);

    process.on('SIGTERM', ctx.dispose);
    process.on("exit", ctx.dispose);

    // const time = new Date().toLocaleTimeString();
    // console.dir(`${time} ${process.env.npm_package_name} started on http://${host}:${port}`);
} else {
    await build(buildOptions);
};