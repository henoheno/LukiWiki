module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "jquery": true,
        "amd": true
    },
    "extends": ["standard", "vue", "plugin:vue-libs/recommended"],
    "plugins": ["html", "vue", "async-await"],
    "rules": {
        "async-await/space-after-async": 2,
        "async-await/space-after-await": 2,
        "require-await": 2
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": false
    }
};