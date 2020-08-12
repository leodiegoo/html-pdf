const express = require('express');
const convertHTMLToPDF = require('pdf-puppeteer');

const router = express.Router();
const htmlToConvert = '<div><h1>Hello World</h1></div>';

router.get('/', (req, res) => {
  try {
    convertHTMLToPDF(
      htmlToConvert,
      (pdf) => {
        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdf);
      },
      null,
      null,
      true
    ).catch((err) => {
      console.error(err);
      throw new Error(err);
    });
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = router;
