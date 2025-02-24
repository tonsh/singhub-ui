.PHONY: lint install build-css

lint:
	npm run lint

install:
	rm -rf node_modules package-lock.json
	npm install --legacy-peer-deps

build-css:
	npx sass src/styles/main.scss dist/styles.css
