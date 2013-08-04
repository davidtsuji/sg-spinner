build: template.js
	@make install
	@lessc styles/spinner.less > styles/spinner.css
	@component build --dev

install:
	@npm install > /dev/null
	@component install --dev > /dev/null

demo:
	@make build
	@open http://localhost:5000/demo.html
	@node demo/server.js

template.js: template.html
	@component convert $<

.PHONY: build install demo template.js