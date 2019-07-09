const express = require('express');
const app = express();
const port = 4000;
const convert = require('color-convert');

app.get('/convert/rgbtohsl', (req, res) => {
  let rgbColor = req.query.color.split(',').map(color => parseInt(color));
  res.send(convert.rgb.hsl(rgbColor));
});
app.get('/convert/keywordtorgb', (req, res) =>
  res.send(convert.keyword.rgb(req.query.color))
);
app.get('/convert/rgbtohex', (req, res) => {
  let rgbColor = req.query.color.split(',').map(color => parseInt(color));
  res.send(convert.rgb.hex(rgbColor));
});
app.get('/convert/hextorgb', (req, res) =>
  res.send(convert.hex.rgb(req.query.color))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
