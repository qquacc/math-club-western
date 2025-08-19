import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import react from "eslint-plugin-react";
import tailwindcss from "eslint-plugin-tailwindcss";

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
			"@stylistic": stylistic,
			react,
			tailwindcss,
		},
		settings: {
			react: { version: "detect" },
			tailwindcss: { callees: ["cn", "clsx", "classnames"] },
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
			"@typescript-eslint/no-unused-vars": "off",
			"no-mixed-spaces-and-tabs": "error",
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/no-tabs": "off",
			"@stylistic/object-curly-spacing": ["error", "always"],
			"@stylistic/array-bracket-spacing": ["error", "never"],
			"@stylistic/semi": ["error", "always"],
			"@stylistic/quotes": ["error", "double", { avoidEscape: true }],
			"@stylistic/comma-dangle": ["error", "always-multiline"],
			"@stylistic/arrow-parens": ["error", "always"],
			"@stylistic/jsx-indent": ["error", "tab"],
			"@stylistic/jsx-indent-props": ["error", "tab"],
			"@stylistic/jsx-first-prop-new-line": ["error", "multiline"],
			"@stylistic/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
			"@stylistic/jsx-closing-bracket-location": ["error", "line-aligned"],
			"@stylistic/jsx-tag-spacing": [
				"error",
				{
					beforeSelfClosing: "always",
					afterOpening: "never",
					beforeClosing: "never",
					closingSlash: "never",
				},
			],
			"@stylistic/jsx-curly-spacing": ["error", { when: "never", children: true }],
			"@stylistic/jsx-curly-brace-presence": [
				"error",
				{ props: "never", children: "never", propElementValues: "always" },
			],
			"@stylistic/jsx-wrap-multilines": "error",
			"@stylistic/linebreak-style": ["error", "unix"],
			"react/self-closing-comp": ["warn", { component: true, html: true }],
			"tailwindcss/classnames-order": "warn",
		},
	}
);
