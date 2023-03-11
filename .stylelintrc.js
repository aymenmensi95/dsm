module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-tailwindcss'],
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: require('postcss-scss'),
    },
  ],
  rules: {
    'color-named': 'never',
    'function-disallowed-list': ['hsl', 'hwb', 'lch'],
    'selector-max-id': 0,
    'color-no-invalid-hex': true,
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$',
  },
};
