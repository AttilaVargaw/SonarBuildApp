const jsxRuntime = require("eslint-plugin-react/configs/jsx-runtime.js");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRecommended = require("eslint-plugin-react/configs/recommended.js");
const globals = require("globals");

const { FlatCompat } = require("@eslint/eslintrc");

const compat = new FlatCompat({ resolvePluginsRelativeTo: __dirname });

exports = [
  compat.extends("plugin:@typescript-eslint/recommended"),
  {
    ...reactRecommended,
    ...jsxRuntime,
    ...reactHooks,
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ...reactRecommended.languageOptions,
      ...jsxRuntime.languageOptions,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        __dirname: true,
        CSS: true,
      },
    },
    rules: {
      ...reactRecommended.rules,
      ...jsxRuntime.rules,
      ...reactHooks.rules,
    },
    plugins: {
      ...reactRecommended.plugins,
      ...jsxRuntime.plugins,
      ...reactHooks.plugins,
    },
  },
];
