module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended",
  "plugin:react/recommended",
  "plugin:react/jsx-runtime",
 ],
 overrides: [
  {
   env: {
    node: true,
   },
   files: [".eslintrc.{js,cjs}"],
   parserOptions: {
    sourceType: "script",
   },
  },
 ],
 parser: "@typescript-eslint/parser",
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 plugins: ["@typescript-eslint", "react"],
 rules: {
  indent: ["error", 1, { SwitchCase: 1 }],
  "linebreak-style": ["error", "unix"],
  quotes: ["error", "double"],
  semi: ["error", "never"],
  "@typescript-eslint/no-unused-vars": "off",
 },
}
