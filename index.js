const express = require('express');
const path = require('path');
const {
	performPuppeteerOperations,
	performPuppeteerExportPDF
} = require('./simulate')

const app = express();
const port = process.env.PORT || 5000;

/** Routes: START */
app.get('/', callFunction.bind(this, performPuppeteerOperations));
app.get('/export-pdf', callFunction.bind(this, performPuppeteerExportPDF));
/** Routes: END */

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
	console.log("App started at " + port)
});

function callFunction(func, req, res) {
	return func.call(this).then((response) => {
		if(response) {
			return res.send(response)
		} else {
			console.error("Error calling connectors")
			res.status(500);
			res.send();
		}
	})
}