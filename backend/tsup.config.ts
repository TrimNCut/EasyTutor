import { defineConfig } from 'tsup';

const isDev = process.env.npm_lifecycle_event === 'dev';

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  format: ['esm'],
  minify: !isDev,
  target: 'esnext',
  outDir: 'dist',
  onSuccess: isDev ? 'node -r dotenv/config . dotenv_config_path=env/local.env' : undefined,
});
