import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: [],
  project: [],
  jest: {
    config: ["**/jest.config.ts", "./jest.preset.js"],
  },
  eslint: {
    config: ["**/.eslintrc.json"],
  },
  ignoreDependencies: [
    "@nx/node",
    "@nx/workspace",
    "axios",
    "@types/jest",
    '@typescript-eslint/eslint-plugin',
    'prettier',
    'ts-node',
    "@swc/core",
    "@swc-node/register",
    "nx",
    "jest-environment-jsdom",
    'jest-environment-node',
  ],
};

export default config;
