module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "react/prop-types": 0,
    "react/jsx-key": 0,
    "react/react-in-jsx-scope": 0,
  },
  settings: {
    react: {
      version: "latest",
    },
  },
  ignorePatterns: [".next", "node_modules", "public", "build", "packages"],
};
