// index.js
var glue = require('./wasm_glue.js');
var Module = {}

glue.fetchAndInstantiate("./main.wasm", {})
  .then(mod => {
    console.log(mod);
  }).catch(function (e) {
    console.error('Creating WASM module failed', e)
  });

window.Module = Module;
