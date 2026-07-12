import { cpSync } from 'node:fs';
import { dirname, join } from 'node:path';

export function copy(paths = []) {
  return {
    name: 'copy',
    setup(build) {
      build.onEnd((end) => {
        paths.forEach(({ from, to }) => {
          cpSync(from, join(dirname(build.initialOptions.outfile), to), {
            recursive: true,
            force: true,
            dereference: true,
          });
        });
      });
    },
  };
}
