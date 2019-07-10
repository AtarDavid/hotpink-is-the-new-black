const express = require('express');
const app = express();
const port = 4000;
const converter = require('./converter');

app.get('/', (req, res) => res.send('<h1>Hotpink is the new black</h1>'));

app.use('/convert', converter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
