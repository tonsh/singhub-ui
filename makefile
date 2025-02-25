.PHONY: lint install build-css

eslint:
	npm run lint

stylelint:
	npx stylelint "**/*.scss"

lint: eslint stylelint

install:
	rm -rf node_modules package-lock.json
	npm install --legacy-peer-deps

css-build:
	npx sass src/styles/main.scss dist/styles.css

css-watch:
	npx sass --watch src/styles/main.scss dist/styles.css
