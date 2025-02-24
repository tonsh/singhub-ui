.PHONY: lint install

lint:
	npm run lint

install:
	rm -rf node_modules package-lock.json
	npm install --legacy-peer-deps
