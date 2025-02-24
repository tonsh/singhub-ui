.PHONY: lint install build-css

eslint:
	npm run lint

stylelint:
	npx stylelint "**/*.scss"

lint: eslint stylelint

install:
	rm -rf node_modules package-lock.json
	npm install --legacy-peer-deps

build-css:
	npx sass src/styles/main.scss dist/styles.css
