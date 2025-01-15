module.exports = {
  space: true,
  prettier: true,
  // extends: ["xo-react"],
  extends: ["xo-react", "plugin:react/jsx-runtime"],
  // Ignore generated files
  // ignores: ["packages/client/src/routeTree.gen.ts"],
  overrides: [
    {
      // TSX files are PascalCase
      files: "**/*.tsx",
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase",
          },
        ],
        "n/file-extension-in-import": "off",
        "import/extensions": "off",
      },
    },
    // {
    //   // File based routes are camelCase
    //   files: ["packages/client/src/routes/**/*.ts?(x)", "packages/client/src/main.tsx"],
    //   rules: {
    //     "unicorn/filename-case": [
    //       "error",
    //       {
    //         case: "kebabCase",
    //       },
    //     ],
    //   },
    // },
    // {
    //   files: "**/*.ts",
    //   rules: {
    //     "import/extensions": "off",
    //     "n/file-extension-in-import": "off",
    //   },
    // },
  ],
};