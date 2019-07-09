const express = require('express');
const app = express();
const port = 4000;
const convert = require('color-convert');

app.get('/convert/rgbtohsl/', (req, res) =>
  res.send(convert.rgb.hsl(255, 105, 180))
);
app.get('/convert/keywordtorgb/', (req, res) =>
  res.send(convert.keyword.rgb('hotpink'))
);
app.get('/convert/rgbtohex/', (req, res) =>
  res.send(convert.rgb.hex(255, 105, 180))
);
app.get('/convert/hextorgb/', (req, res) =>
  res.send(convert.hex.rgb('FF69B4'))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
