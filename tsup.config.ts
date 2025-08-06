import copy from 'esbuild-plugin-copy';
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src'],
  external: ['**/*.json'],
  splitting: false,
  sourcemap: true,
  clean: true,
  plugins: [
    copy({
      resolveFrom: 'cwd',
      assets: [
        {
          from: ['./src/**/*.json'],
          to: ['./dist'],
        },
      ],
    }),
  ],
});
