debug: MODE = debug
debug: run

release: MODE = release
release: MODE_FLAG = --release
release: run

run: wasm
	mkdir -p _static
	ln -sf ../target/wasm32-unknown-unknown/${MODE}/main.wasm _static/
	ln -sf ../src/web/index.html _static/
	ln -sf ../src/web/index.js _static/
	./tools/serve-wasm.py _static

wasm:
	cargo build ${MODE_FLAG} --target wasm32-unknown-unknown
