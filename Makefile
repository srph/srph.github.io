NPM=./node_modules/.bin

.PHONY: clean

clean:
	sass styles/main.scss --style compressed \
		| $(NPM)/postcss --use autoprefixer --autoprefixer.browsers "last 2 versions" \
			--use cssnano \
		-o style.css
	
watch:
	sass styles/main.scss:style.css --watch