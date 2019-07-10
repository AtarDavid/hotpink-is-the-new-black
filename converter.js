const express = require('express');
const router = express.Router();
const convert = require('color-convert');

router.get('/rgbtohsl', (req, res) => {
  let rgbColor = req.query.color.split(',').map(color => parseInt(color));
  res.send(convert.rgb.hsl(rgbColor));
});
router.get('/keywordtorgb', (req, res) =>
  res.send(convert.keyword.rgb(req.query.color))
);
router.get('/rgbtohex', (req, res) => {
  let rgbColor = req.query.color.split(',').map(color => parseInt(color));
  res.send(convert.rgb.hex(rgbColor));
});
router.get('/hextorgb', (req, res) =>
  res.send(convert.hex.rgb(req.query.color))
);
module.exports = router;
