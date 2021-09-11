install:
	npm ci

brein-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
