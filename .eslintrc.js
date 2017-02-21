module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react", "jsx-a11y", "import"
    ],
    "env": {
        "browser": true
    },
    "rules": {
        "react/jsx-filename-extension": 0,
        "space-before-function-paren": [
            "error", "never"
        ],
        "no-tabs": 0,
        "indent": 0,
        "no-underscore-dangle": 0,
        "react/jsx-indent": 0,
		"react/jsx-indent-props": 0
    }
};
