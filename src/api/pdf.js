const express = require('express');
const pdf = require('html-pdf');

const router = express.Router();
const htmlToConvert = '<div><h1>Hello World</h1></div>';

router.get('/', (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/pdf');
    pdf.create(htmlToConvert).toStream((err, stream) => {
      if (err) {
        throw new Error(err);
      }
      stream.pipe(res);
    });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
