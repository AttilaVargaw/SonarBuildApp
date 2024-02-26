const jsxRuntime = require("eslint-plugin-react/configs/jsx-runtime.js");
const reactRecommended = require("eslint-plugin-react/configs/recommended.js");
const globals = require("globals");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

exports = [
  compat.extends("plugin:@typescript-eslint/recommended"),
  {
    ...reactRecommended,
    ...jsxRuntime,
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ...reactRecommended.languageOptions,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        __dirname: true,
        CSS: true,
      },
    },
  },
];
