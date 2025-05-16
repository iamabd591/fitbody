module.exports = {
  plugins: ["import"],
  rules: {
    "import/order": [
    "warn",
    {
      groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
      pathGroups: [
        {
          pattern: "@/components/**",
          group: "internal",
        },
      ],
      pathGroupsExcludedImportTypes: ["builtin"],
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
      "newlines-between": "always",
    },
  ],
}}