Papa.parse(bigFile, {
	worker: true,
	step: function(results) {
		console.log("Row:", results.data);
	}
});