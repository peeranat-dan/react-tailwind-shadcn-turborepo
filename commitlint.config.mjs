export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["config", "deps", "deps-dev", "ui"]],
  },
};
