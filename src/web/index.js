(function () {
	function fetchAndInstantiate(url, importObject) {
		return fetch(url).then(response =>
			response.arrayBuffer()
		).then(bytes =>
			WebAssembly.instantiate(bytes, importObject)
		).then(results =>
			results.instance
		);
	}

	fetchAndInstantiate("./main.wasm", {})
		.then(mod => {
			console.log(mod);
		}).catch(function (e) {
			console.error('Creating WASM module failed', e)
	  });
}());
