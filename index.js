const path = require('path');
const express = require('express');

const app = express();
// Set up bublic directory;
const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

const PORT = 4400;

app.listen(PORT || process.env.PORT, () => {
	console.log('Pegasus is alive on PORT ' + PORT);
});
