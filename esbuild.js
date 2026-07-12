import { build, context } from 'esbuild';
import svelte from 'esbuild-svelte';
import rm from './env/rm.js';
import log from './env/log.js';
import meta from './env/meta.js';
import pkg from './package.json' with { type: 'json' };

const DEV = process.argv.includes('--dev');

const serveOptions = {
  servedir: 'public',
  // onRequest(args) {
  //   console.log(
  //     // `%d %s %dms %s`,
  //     args.status,
  //     args.method,
  //     args.timeInMS,
  //     args.remoteAddress + args.path,
  //   );
  // },
};

const svelteOptions = {
  compilerOptions: {
    dev: DEV,
    runes: true,
    modernAst: true,
    css: 'external',
    cssHash: ({ css, _filename, _name, hash }) => {
      return `${pkg.name}-${hash(css)}`;
    },
  },
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
  legalComments: 'none',
  logLevel: 'info',
  metafile: !DEV,
};

await rm('public/build');

if (DEV) {
  const ctx = await context(buildOptions);

  await ctx.watch();
  await ctx.serve(serveOptions);

  process.on('SIGTERM', ctx.dispose);
  process.on('exit', ctx.dispose);
} else {
  await meta(await build(buildOptions));
}
