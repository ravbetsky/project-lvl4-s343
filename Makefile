install: install-deps install-flow-typed

start:
	npx nodemon --exec npx babel-node server/bin/slack.js

install-deps:
	npm install

build:
	rm -rf dist
	npm run build

run:
	node dist/bin/slack.js

test:
	npm test

check-types:
	npx flow

lint:
	npx eslint --ext .js --ext .jsx .

publish:
	npm publish

.PHONY: test
