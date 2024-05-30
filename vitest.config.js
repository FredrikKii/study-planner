import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
    include: ['src/tests/**/*.test.jsx']
  },
});
