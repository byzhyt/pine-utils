export default {
    "$schema": "https://developer.microsoft.com/json-schemas/tsdoc/v0/tsdoc.schema.json",
    "entryPoints": [
        "./src/index.ts"
    ],
    "theme": "default",
    // "hidePageHeader": false,
    // "hideGenerator": false,
    // "hidePageTitle": false,
    // "hideInPageTOC": false,
    // "sidebar": false,
    "exclude": [
        "**/*.test.ts",
        "**/node_modules/**"
    ],
    "tsconfig": "./tsconfig.json",
    "plugin": [
        "typedoc-plugin-markdown",
        "typedoc-plugin-merge-modules"
    ],
    "readme": "README.md"
}
