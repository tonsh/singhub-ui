.PHONY: lint install

lint:
	npm run lint

install:
	rm -rf src/components/ui
	npx shadcn@canary add -y calendar popover select command
	rm -rf node_modules package-lock.json
	npm install --legacy-peer-deps
