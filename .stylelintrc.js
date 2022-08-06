module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'at-rule-no-unknown': null,
    /* only for empty *.scss files
      TODO: remove no-empty-sourse after fill unused *.scss */
    'no-empty-source': null,
  },
};
