.PHONY: clean

clean:
	sass styles/main.scss:style.css && open index.html
	
watch:
	sass styles/main.scss:style.css --watch