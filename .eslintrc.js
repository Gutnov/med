module.exports = {
	root: true,
	env: {
		node: true
	},
	"extends": [
		"plugin:vue/essential",
		"plugin:vue/recommended",
		"eslint:recommended"
	],
	parserOptions: {
		parser: "babel-eslint"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"vue/script-indent": ["error", "tab", {
			"baseIndent": 0,
		}],
		"vue/html-indent": ["error", "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
		}],
		"indent": ["error", "tab"],
		"quotes":["error", "double"],
		"semi": ["error", "always"],
		"no-multi-spaces": ["error"]
	}
};
