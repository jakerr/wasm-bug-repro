Wasm bug
===

This repo is to reproduce a crash instantiating wasm32-unknown-unknown built
wasm created with the debug configuration.

requires Browserify `npm install -g browserify`

It simply builds a main.rs with empty main.
When built with --release instantiation succeeds. When built without instantiation fails in the browser with:

```
bundle.js:10 Creating WASM module failed RuntimeError: memory access out of bounds
    at _ZN8dlmalloc8dlmalloc8Dlmalloc6malloc17h4bbdde81e8f6d029E (wasm-function[388]:1523)
    at _ZN91_$LT$$RF$$u27$a$u20$dlmalloc..global..GlobalDlmalloc$u20$as$u20$alloc..allocator..Alloc$GT$5alloc17h573839c1c2aedc42E (wasm-function[406]:79)
    at __rdl_alloc (wasm-function[98]:90)
    at __rust_alloc (wasm-function[549]:9)
    at _ZN41_$LT$std..sync..mutex..Mutex$LT$T$GT$$GT$3new17h33cf35f583237304E (wasm-function[95]:82)
    at _ZN3std6thread6Thread3new17h3709e8b66e12ce6eE (wasm-function[71]:1164)
    at _ZN3std2rt10lang_start17h915e4ff7777401cdE (wasm-function[126]:247)
    at main (wasm-function[1]:23)
    at _start (wasm-function[555]:7)
    at <anonymous>
```

reproduction:

```
make debug
open http://localhost:8000
```

Notice that release works

```
make release
open http://localhost:8000
```
