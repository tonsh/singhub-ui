.PHONY: lint install

lint:
	npm run lint

install:
	rm -rf src/components/ui
	npx shadcn@canary add -y calendar popover
	rm -rf node_modules package-lock.json
	npm install --legacy-peer-deps
