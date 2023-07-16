const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const path = require("path");

// app.use('/assets', express.static(path.join(__dirname, 'src/assets/img/')))
app.use("/assets", express.static(path.join(__dirname, "src/assets/img")));

app.get("/reporte-de-inspeccion", async (req, res) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.emulateMediaType("screen");
  await page.setViewport({ width: 1920, height: 1080 });
  const data = [
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },

    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
  ];
  let sumA = 0,
    sumB = 0,
    sumC = 0,
    sumD = 0,
    sumE = 0,
    sumF = 0,
    sumG = 0,
    sumH = 0,
    sumI = 0;

  data.forEach((item) => {
    sumA += item.A;
    sumB += item.B;
    sumC += item.C;
    sumD += item.D;
    sumE += item.E;
    sumF += item.F;
    sumG += item.G;
    sumH += item.H;
    sumI += item.I;
  });
  let pageIndex = 0;
  let pageIndexPdf = 1;

  const pageBreakAfter = 20;
  let html = `
  <!DOCTYPE html>
  <html>
  
  <head>
    <style>
      .page-break {
        page-break-before: always;
      }
  
      @media print {
  
  
        .page {
          page-break-after: always;
        }
      }
  
      * {
        font-family: Arial, sans-serif;
      }
  
      .two-columns {
        grid-column: span 2;
      }
  
      .six-columns {
        grid-column: span 6;
      }
  
      .nine-columns {
        grid-column: span 9;
      }
  
      .eleven-columns {
        grid-column: span 11;
      }
  
      .vertical-text {
        writing-mode: vertical-rl;
        grid-row: span 5;
      }
  
      .seven-columns {
        grid-column: span 7;
      }
  
      .incidents-container {
        width: 100%;
      }
  
      .container {
        margin: 15px 0px;
        padding: 0;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid;
  
      }
  
      .row-item {
        border-left: 2px solid;
        box-sizing: border-box;
        border-right: 0;
        border: 0;
        border-right: 2px solid;
        border-top: 1 px solid;
        border-bottom: 0;
        font-size: 11px;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-align: center;
        font-weight: bold;
      }
  
      .row-item:last-child {
        border-right: 0;
      }
  
      h1 {
        font-weight: 500;
      }
  
      .title-item {
        background: #b4c6e7;
        font-weight: bold;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-items: center;
        text-align: center;
        box-sizing: border-box;
        padding: 0 5px;
        width: 100%;
      }
  
      .sub-table-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-content: start;
        justify-items: center;
  
      }
  
      .checkbox {
        width: 30px;
        height: 20px;
        border: 1px solid #000;
        box-sizing: border-box;
      }
  
      .checked {
        background: #000;
      }
  
      .firma-container {
        width: 100%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
  
      .firma {
        width: 300px;
        margin: 0 auto;
        background-color: #000;
        height: 2px;
      }
  
      .footer {
        width: 100%;
      }
      .thead-th{
        height:40px; width:10px;border:1px solid; border-bottom:0; border-top:0; border-right:0;
      }
      .thead-th:first-child {
        height:40px; width:10px;border:1px solid; border-bottom:0; border-top:0; border-right:0; border-left:0;
      }
      .table-th {
        max-width: 10px;
        width: 10px;
        border: 1px solid;
        border-bottom: 0;
        border-top: 0;
        border-right: 0;
      }
      
      .table-th:first-child {
        max-width: 10px;
        width: 10px;
        border: 1px solid;
        border-bottom: 0;
        border-top: 0;
        border-right: 0;
        border-left: 0;
      }
    </style>
  </head>
  
  <body>
    <div class="container" id="divToPrint">
      <div
        style="display: grid; grid-template-columns: 1fr 85%; width: 100%; justify-content: center; align-items: center; justify-items: center; grid-template-rows: 80px;">
        <div style="width: 100%;text-align: center;border-right: 2px solid #000;">
        <img src="http://localhost:3001/assets/logo.png" alt="Daryan Saltillo" style="width:180px;" />

        </div>
  
        <div>
          <h1>
            <b>REPORTE DE INSPECCION / INSPECTION REPORT</b>
          </h1>
        </div>
      </div>
      <div class="">
        <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 141px 380px 250px 379px 130px 260px 180px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 40px; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item title-item" style="">PLANTA /
              FACILITY
            </div>
            <div class="row-item" style=""></div>
            <div class="row-item title-item" style="">
              PROVEEDOR /
              SUPPLIER</div>
            <div class="row-item" style=""></div>
            <div class="row-item title-item" style="">FECHA /
              DATE</div>
            <div class="row-item" style=""></div>
            <div class="row-item title-item">No. DE REPORTE /
              REPORT <br> NUMBER</div>
            <div class="row-item" style=""></div>
  
          </div>
        </div>
        <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 141px 450px 353px 206px 130px 260px 100px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 40px; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item title-item" style="">NOMBRE DE PARTE / PART
              DESCRIPTION
            </div>
            <div class="row-item" style=""></div>
            <div class="row-item title-item" style="">
              HORAS TRABAJADAS / HOURS WORKED</div>
            <div class="row-item" style=""></div>
            <div class="row-item title-item" style="">RATE</div>
            <div class="row-item" style=""></div>
            <div class="row-item title-item" style="">TURNO /
              SHIFT</div>
            <div class="row-item" style="display: flex;
                justify-content: center;
                align-items: center">3</div>
          </div>
        </div>
        <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 141px 350px 100px 130px 80px 143px 96px 240px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 40px; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item title-item" style="text-align:center;">
              TIPO DE SERVICIO / SERVICE
              TYPE
            </div>
            <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
              SELECCIÓN/VISUAL INSPECCIÓN
            </div>
            <div class="row-item" style="">
              <div class="checkbox checked"></div>
            </div>
            <div class="row-item" style="">RETRABAJO / RE-WORK</div>
            <div class="row-item" style="">
              <div class="checkbox "></div>
            </div>
            <div class="row-item" style="">OTROS (ESPECIFIQUE)
              / OTHERS</div>
            <div class="row-item" style="">
              <div class="checkbox "></div>
            </div>
            <div class="row-item title-item" style="display: flex;
                justify-content: center;
                align-items: center">NUMERO DE PARTE / PART NUMBER</div>
            <div class="row-item" style="display: flex;
                justify-content: center;
                align-items: center"></div>
          </div>
        </div>
        <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 141px 350px 100px 130px 80px 143px 96px 130px 110px 100px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 50px; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item title-item" style="text-align:center;">
              FECHA DE PRODUCCION / PRODUCTION DATE
            </div>
            <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
  
  
            </div>
            <div class="row-item" style="">
              <div class="checkbox checked"></div>
            </div>
            <div class="row-item" style="">FECHA DE APROBADO/
              APROBAL DATE</div>
            <div class="row-item" style="">
              <div class="checkbox "></div>
            </div>
            <div class="row-item" style="">SERIE / SERIAL
              NUMBER</div>
            <div class="row-item">
              <div class="checkbox "></div>
            </div>
            <div class="row-item" style="display: flex;justify-content: center;align-items: center">LOTE / LOT</div>
            <div class="row-item">
              <div class="checkbox "></div>
            </div>
            <div class="row-item" style="display: flex;justify-content: center;align-items: center">OTROS
              (ESPECIFIQUE) /
              OTHERS
            </div>
            <div class="row-item" style="display: flex;justify-content: center;align-items: center"></div>
          </div>
        </div>
  
        <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 40px 551px 130px 223px 96px 130px 110px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item title-item" style="text-align:center;">
              <p style="text-align:center; display:flex; align-items:center; justify-content:center;font-weight:bold;">
                I<br>
            T<br>
            E<br>
            M
              </p>
            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class="" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                CONTROL DEL CLIENTE / CUSTOMER CONTROL</div>
              <div class="sub-table-container">
                <div class=""
                  style="border-right: 2px solid; height:40px; display:flex; box-sizing:border-box; align-items:center; width:180px; margin:0 auto;">
                  FECHA DE PRODUCCION /
                  PRODUCTION DATE</div>
                <div class=""
                  style="border-right: 2px solid; height:40px; display:flex; box-sizing:border-box; align-items:center; width:100px; margin:0 auto;">
                  LOTE / LOT</div>
                <div class=""
                  style="height:40px; display:flex; box-sizing:border-box; align-items:center; width:110px; margin:0 auto;">
                  SERIE / SERIAL</div>
              </div>
  
            </div>
            <div class="row-item title-item" style="">
              CANTIDAD
              INSPECCIONADA / QT.
              INSPECTED</div>
            <div class="row-item title-item" style="">PIEZAS NG / NG PIECES </div>
            <div class="row-item title-item" style="">PIEZAS OK / OK PIECES</div>
            <div class="row-item title-item" style="">PIEZAS
              RETRABAJADAS / RE
              WORK PARTS</div>
            <div class="row-item title-item" style="">SCRAP</div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class="" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                INCIDENTES / INCIDENTS TO VERIFY</div>
  
              <table style="width:100%; border-collapse: collapse; height:100%;">
                <thead>
                  <tr>
                  ${data
                    .map(
                      (item, index) => `
                       ${
                         index === 0 && item.A > 0
                           ? `<th class="thead-th">${"A"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.B > 0
                           ? `<th class="thead-th">${"B"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.C > 0
                           ? `<th class="thead-th">${"C"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.D > 0
                           ? `<th class="thead-th">${"D"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.E > 0
                           ? `<th class="thead-th">${"E"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.F > 0
                           ? `<th class="thead-th">${"F"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.G > 0
                           ? `<th class="thead-th">${"G"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.H > 0
                           ? `<th class="thead-th">${"H"}</th>`
                           : ""
                       }
                       ${
                         index === 0 && item.I > 0
                           ? `<th class="thead-th">${"I"}</th>`
                           : ""
                       }
                    `
                    )
                    .join("")}
                  </tr>
                </thead>
                <tbody>
                  <!-- Aquí se pueden agregar las filas de la tabla -->
                </tbody>
              </table>
  
  
            </div>
          </div>
        </div>

        `;
  let itemsPerPage = 20;
  let firstPageItems = data.slice(0, itemsPerPage);
  let remainingItems = data.slice(itemsPerPage);

  // Procesa los primeros 20 elementos para la primera página
  firstPageItems.forEach((item, index) => {
    // Tu lógica para agregar filas a la página aquí...

    const itemCount = index + 1;
    if (itemCount % itemsPerPage === 0 && itemCount < firstPageItems.length) {
      html += `</div></div><div class="page-break"></div> `;
      pageIndex++;
    }
  });
  // Ahora cambia itemsPerPage a 25 para las siguientes páginas
  itemsPerPage = 24;
  remainingItems.forEach((item, index) => {
    // Tu lógica para agregar filas a la página aquí...
    html += `
            <div class="" id="table-data-${index + 1}"
            style="display: grid; grid-template-columns: 40px 551px 130px 223px 96px 130px 110px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 30px; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item " style="text-align:center;">
              <h3><b>${index + 1}</b></h3>
            </div>
            <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
              <div class="sub-table-container">
                <div class=""
                  style="border-right: 2px solid; height:30px; display:flex; box-sizing:border-box; align-items:center; width:180px; margin:0 auto;"></div>
                <div class=""
                  style="border-right: 2px solid; height:30px; display:flex; box-sizing:border-box; align-items:center; width:100px; margin:0 auto;"></div>
                <div class=""
                  style="height:40px; display:flex; box-sizing:border-box; align-items:center; width:110px; margin:0 auto;"></div>
              </div>
  
            </div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
  
              <table style="width:100%; border-collapse: collapse; height:100%;">
                <thead>
                  <tr>
                    ${item.A > 0 ? `<th class="table-th">${item.A}</th>` : ""}
                    ${item.B > 0 ? `<th class="table-th">${item.B}</th>` : ""}
                    ${item.C > 0 ? `<th class="table-th">${item.C}</th>` : ""}
                    ${item.D > 0 ? `<th class="table-th">${item.D}</th>` : ""}
                    ${item.E > 0 ? `<th class="table-th">${item.E}</th>` : ""}
                    ${item.F > 0 ? `<th class="table-th">${item.F}</th>` : ""}
                    ${item.G > 0 ? `<th class="table-th">${item.G}</th>` : ""}
                    ${item.H > 0 ? `<th class="table-th">${item.H}</th>` : ""}
                    ${item.I > 0 ? `<th class="table-th">${item.I}</th>` : ""}
                  </tr>
                </thead>
              </table>
  
  
          </div>
            </div>
          `;
    const itemCount = index + 1;
    if (itemCount % itemsPerPage === 0 && itemCount < remainingItems.length) {
      html += `</div></div><div class="page-break"></div> `;
      pageIndex++;
    }
  });
  // data.map((item, index) => {
  //   const itemCount = index + 1;

  //   //itemsPerPage = pageIndex === 0 ? pageBreakAfter : pageBreakAfter * 2;
  //   html += `
  //           <div class="" id="table-data-${index + 1}"
  //           style="display: grid; grid-template-columns: 40px 551px 130px 223px 96px 130px 110px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 30px; border-left: 0; border-right: 0; border-bottom:0;">
  //           <div class="row-item " style="text-align:center;">
  //             <h3><b>${index + 1}</b></h3>
  //           </div>
  //           <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
  //             <div class="sub-table-container">
  //               <div class=""
  //                 style="border-right: 2px solid; height:30px; display:flex; box-sizing:border-box; align-items:center; width:180px; margin:0 auto;"></div>
  //               <div class=""
  //                 style="border-right: 2px solid; height:30px; display:flex; box-sizing:border-box; align-items:center; width:100px; margin:0 auto;"></div>
  //               <div class=""
  //                 style="height:40px; display:flex; box-sizing:border-box; align-items:center; width:110px; margin:0 auto;"></div>
  //             </div>

  //           </div>
  //           <div class="row-item " style=""></div>
  //           <div class="row-item " style=""></div>
  //           <div class="row-item " style=""></div>
  //           <div class="row-item " style=""></div>
  //           <div class="row-item " style=""></div>
  //           <div class="row-item " style="padding:0; display:flex; flex-direction:column;">

  //             <table style="width:100%; border-collapse: collapse; height:100%;">
  //               <thead>
  //                 <tr>
  //                   ${item.A > 0 ? `<th class="table-th">${item.A}</th>` : ""}
  //                   ${item.B > 0 ? `<th class="table-th">${item.B}</th>` : ""}
  //                   ${item.C > 0 ? `<th class="table-th">${item.C}</th>` : ""}
  //                   ${item.D > 0 ? `<th class="table-th">${item.D}</th>` : ""}
  //                   ${item.E > 0 ? `<th class="table-th">${item.E}</th>` : ""}
  //                   ${item.F > 0 ? `<th class="table-th">${item.F}</th>` : ""}
  //                   ${item.G > 0 ? `<th class="table-th">${item.G}</th>` : ""}
  //                   ${item.H > 0 ? `<th class="table-th">${item.H}</th>` : ""}
  //                   ${item.I > 0 ? `<th class="table-th">${item.I}</th>` : ""}
  //                 </tr>
  //               </thead>
  //             </table>

  //         </div>
  //           </div>
  //         `;
  //         if (itemCount % itemsPerPage === 0 && itemCount < data.length) {
  //           html += `</div></div><div class="page-break"></div> `;
  //           pageIndex++;

  //           // Después de la primera página, cambiar itemsPerPage a 25
  //           if (pageIndex === 2) {
  //               itemsPerPage = 25;
  //           }
  //       }
  //   // if (itemCount % itemsPerPage === 0 && itemCount < data.length) {
  //   //   //if((i + 1) % 20 === 0){}
  //   //   html += `</div></div><div class="page-break"></div> `;
  //   //   pageIndex++;
  //   // }
  // });
  data.map((item, index) => {
    const itemCount = index + 1;

    if (index === 0) {
      // if (data.length > pageBreakAfter) {
      //   //if((i + 1) % 20 === 0){}
      //   html += `</div></div><div class="page-break"></div> `;
      //   //pageIndex++;
      // }
      html += `  
      <div class="${
        pageIndexPdf > 3 || data.length > 20 ? "container" : ""
      }" style="${pageIndexPdf > 3 || data.length > 20 ? "border-top:0;" : ""}">
        <div class="">
          <div
            style="display: grid; grid-template-columns: 591px 130px 223px 96px 130px 110px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
    
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              TOTALES / TOTAL
            </div>
            <div class="row-item " style=""> </div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style=""></div>
            <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
    
    
              <table style="width:100%; border-collapse: collapse; height:100%;">
                <thead>
                  <tr>
                    ${sumA > 0 ? `<th class="thead-th">${sumA}</th>` : ""} 
                    ${sumB > 0 ? `<th class="thead-th">${sumB}</th>` : ""} 
                    ${sumC > 0 ? `<th class="thead-th">${sumC}</th>` : ""} 
                    ${sumD > 0 ? `<th class="thead-th">${sumD}</th>` : ""} 
                    ${sumE > 0 ? `<th class="thead-th">${sumE}</th>` : ""} 
                    ${sumF > 0 ? `<th class="thead-th">${sumF}</th>` : ""} 
                    ${sumG > 0 ? `<th class="thead-th">${sumG}</th>` : ""} 
                    ${sumH > 0 ? `<th class="thead-th">${sumH}</th>` : ""} 
                    ${sumI > 0 ? `<th class="thead-th">${sumI}</th>` : ""} 
                  </tr>
                </thead>
                <tbody>
                  <!-- Aquí se pueden agregar las filas de la tabla -->
                </tbody>
              </table>
    
    
            </div>
          </div>
        </div>
        <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 591px 579px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
    
            <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                REALIZO / INSPECTED BY</div>
              
                ${
                  sumA > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
                <div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"A"}</div></div>`
                    : ""
                } 
                ${
                  sumB > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"B"}</div></div>`
                    : ""
                } 
                ${
                  sumC > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"C"}</div></div>`
                    : ""
                } 
                ${
                  sumD > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"D"}</div></div>`
                    : ""
                } 
                ${
                  sumE > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"E"}</div></div>`
                    : ""
                } 
                ${
                  sumF > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"F"}</div></div>`
                    : ""
                } 
                ${
                  sumG > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"G"}</div></div>`
                    : ""
                } 
                ${
                  sumH > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"H"}</div></div>`
                    : ""
                } 
                ${
                  sumI > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"I"}</div></div>`
                    : ""
                } 
           
    
            </div>
            <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                OBSERVACIONES / COMMENTS</div>
    
                ${
                  sumA > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
                <div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"A"}</div></div>`
                    : ""
                } 
                ${
                  sumB > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"B"}</div></div>`
                    : ""
                } 
                ${
                  sumC > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"C"}</div></div>`
                    : ""
                } 
                ${
                  sumD > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"D"}</div></div>`
                    : ""
                } 
                ${
                  sumE > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"E"}</div></div>`
                    : ""
                } 
                ${
                  sumF > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"F"}</div></div>`
                    : ""
                } 
                ${
                  sumG > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"G"}</div></div>`
                    : ""
                } 
                ${
                  sumH > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"H"}</div></div>`
                    : ""
                } 
                ${
                  sumI > 0
                    ? `<div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% "><div class=""
                  style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">${"I"}</div></div>`
                    : ""
                } 
    
            </div>
            <div class="row-item" style="padding: 0;flex-direction: column;width: 100%;display: flex;overflow: hidden;">
              <div class="title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                INCIDENTES / INCIDENTS TO VERIFY
              </div>
              <div class="incidents-container">
              ${
                sumA > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
              <div class=""
                style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"A"}</div> <div class=""
                style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
              </div></div>`
                  : ""
              } 
              ${
                sumB > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"B"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumC > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"C"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumD > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"D"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumE > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"E"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumF > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"F"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumG > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"G"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumH > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"H"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              } 
              ${
                sumI > 0
                  ? `<div class="" style="display:grid; grid-template-columns: 110px 1fr; grid-template-rows:30px; ">
                  <div class=""
                    style="border-right: 2px solid; text-align:left;padding:0 50px; width:auto;text-align:center; height:100%; display:flex; align-items:center; border-bottom:2px solid">${"I"}</div>   <div class=""
                    style=" text-align:left; display:flex; padding: 0 80px; width:100%; border-bottom: 2px solid; height:100%">
    
                  </div></div>`
                  : ""
              }               
              </div>
    
            </div>
          </div>
          <div class="footer">
            <div style="">
              <div class=""
                style="display: grid; grid-template-columns: 591px 689px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
    
                <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
                  <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                    REALIZO / INSPECTED BY</div>
                  <div class="firma-container">
                    <div class="firma"></div>
                  </div>
                </div>
                <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
                  <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                    OBSERVACIONES / COMMENTS</div>
                  <div class="firma-container">
                    <div class="firma"></div>
                  </div>
                </div>
                <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
                  <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
                    OBSERVACIONES / COMMENTS</div>
                  <div class="firma-container">
                    <div class="firma"></div>
                  </div>
                </div>
    
    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </body>
    
    </html>
    `;
    }

    // html += `
    //         <div class="" id="table-data-${index + 1}"
    //         style="display: grid; grid-template-columns: 40px 551px 130px 223px 96px 130px 110px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 30px; border-left: 0; border-right: 0; border-bottom:0;">
    //         <div class="row-item " style="text-align:center;">
    //           <h3><b>${index + 1}</b></h3>
    //         </div>
    //         <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
    //           <div class="sub-table-container">
    //             <div class=""
    //               style="border-right: 2px solid; height:30px; display:flex; box-sizing:border-box; align-items:center; width:180px; margin:0 auto;"></div>
    //             <div class=""
    //               style="border-right: 2px solid; height:30px; display:flex; box-sizing:border-box; align-items:center; width:100px; margin:0 auto;"></div>
    //             <div class=""
    //               style="height:40px; display:flex; box-sizing:border-box; align-items:center; width:110px; margin:0 auto;"></div>
    //           </div>

    //         </div>
    //         <div class="row-item " style=""></div>
    //         <div class="row-item " style=""></div>
    //         <div class="row-item " style=""></div>
    //         <div class="row-item " style=""></div>
    //         <div class="row-item " style=""></div>
    //         <div class="row-item " style="padding:0; display:flex; flex-direction:column;">

    //           <table style="width:100%; border-collapse: collapse; height:100%;">
    //             <thead>
    //               <tr>
    //                 ${item.A > 0 ? `<th class="table-th">${item.A}</th>` : ""}
    //                 ${item.B > 0 ? `<th class="table-th">${item.B}</th>` : ""}
    //                 ${item.C > 0 ? `<th class="table-th">${item.C}</th>` : ""}
    //                 ${item.D > 0 ? `<th class="table-th">${item.D}</th>` : ""}
    //                 ${item.E > 0 ? `<th class="table-th">${item.E}</th>` : ""}
    //                 ${item.F > 0 ? `<th class="table-th">${item.F}</th>` : ""}
    //                 ${item.G > 0 ? `<th class="table-th">${item.G}</th>` : ""}
    //                 ${item.H > 0 ? `<th class="table-th">${item.H}</th>` : ""}
    //                 ${item.I > 0 ? `<th class="table-th">${item.I}</th>` : ""}
    //               </tr>
    //             </thead>
    //           </table>

    //       </div>
    //         </div>
    //       `;
  });

  const documentHeights = {
    1: {
      h: 200,
    },
    2: {
      h: 210,
    },
    3: {
      h: 220,
    },
    4: {
      h: 230,
    },
    5: {
      h: 240,
    },
    6: {
      h: 250,
    },
    7: {
      h: 260,
    },
    8: {
      h: 270,
    },
    9: {
      h: 280,
    },
    10: {
      h: 290,
    },
    11: {
      h: 290,
    },
    12: {
      h: 290,
    },
    13: {
      h: 290,
    },
    14: {
      h: 290,
    },
    15: {
      h: 290,
    },
    16: {
      h: 290,
    },
    17: {
      h: 290,
    },
    18: {
      h: 290,
    },
    19: {
      h: 290,
    },
    20: {
      h: 200,
    },
  };
  const defaultHeight = 300;

  //console.log(pageIndexPdf)
  await page.setContent(html);

  const pdf = await page.pdf({
    width: "500mm",
    height: `${
      pageIndexPdf > 2 && data.length >= 20
        ? data.length > 20
          ? "330"
          : "400"
        : documentHeights[data.length]?.h || defaultHeight
    }mm`,
    printBackground: true,
  });

  await browser.close();

  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});
app.get("/lista-de-asistencia", async (req, res) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.emulateMediaType("screen");
  await page.setViewport({ width: 1920, height: 1080 });
  const data = [
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
  ];

  const html = `
  <!DOCTYPE html>
<html>

<head>
  <style>
    .page-break {
      page-break-before: always;
    }

    .days-week {
      width: 100%;
    }

    .days-week-container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }

    .list-top-item {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
    }

    .item-input {
      width: 200px;
    }

    .item-input-text {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-transform: uppercase;
    }

    .item-input input {
      width: 100%;

    }

    input {
      border: 1px solid #6f98c9;
      border-right: 0;
      border-left: 0;
      border-top: 0;
      margin: 0;
      margin-top: -5px;
      box-sizing: border-box;
      padding: 0;
      outline: none;
    }

    .week-input {
      max-width: 60px;
    }

    @media print {


      .page {
        page-break-after: always;
      }
    }

    * {
      font-family: Arial, sans-serif;
    }

    .two-columns {
      grid-column: span 2;
    }

    .six-columns {
      grid-column: span 6;
    }

    .nine-columns {
      grid-column: span 9;
    }

    .eleven-columns {
      grid-column: span 11;
    }

    .vertical-text {
      writing-mode: vertical-rl;
      grid-row: span 5;
    }

    .seven-columns {
      grid-column: span 7;
    }

    .incidents-container {
      width: 100%;
    }

    .container {
      margin: 15px auto;
      padding: 0;
      width: 93%;

      box-sizing: border-box;
      border: 2px solid;

    }

    .row-item {
      border-left: 2px solid;
      box-sizing: border-box;
      border-right: 0;
      border: 0;
      border-right: 2px solid;
      border-top: 1 px solid;
      border-bottom: 0;
      font-size: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
      font-weight: bold;
    }

    .row-item:last-child {
      border-right: 0;
    }

    h1 {
      font-weight: 500;
    }

    .title-item {
      background: #b4c6e7;
      font-weight: bold;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
      box-sizing: border-box;
      padding: 0 5px;
      width: 100%;
    }

    .sub-table-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: start;
      justify-items: center;

    }

    .checkbox {
      width: 30px;
      height: 20px;
      border: 1px solid #000;
      box-sizing: border-box;
    }

    .checked {
      background: #000;
    }

    .report-table-hours {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      justify-content: center;
      align-items: center;
      grid-template-rows: 30px;
    }

    .report-table-hours> :last-child {
      // grid-column: 13;
    }

    .firma-container {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: c;
    }

    .firma {
      width: 80%;
      margin: 0 auto;
      background-color: #000;
      height: 2px;
    }
  </style>
</head>

<body>
  <div class="container" id="divToPrint">
    <div
      style="display: grid; grid-template-columns: 2fr 65%; width: 100%; justify-content: center; align-items: center; justify-items: center; grid-template-rows: 80px;">
      <div style="width: 100%;text-align: center;border-right: 2px solid #000;">
        <img
                        src="http://3.12.127.240/assets/img/logo.png"
                        alt="Daryan Saltillo"
                        style="width:180px;"
                      />
      </div>

      <div>
        <h1>
          <b>LISTA DE ASISTENCIA</b>
        </h1>
      </div>
    </div>
    <div class="">
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 750px 1fr 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 40px; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item list-top-item" style="">

            <div class="item-input-text">
              PLANTA:
              <input type="text">
            </div>
          </div>
          <div class="row-item list-top-item" style="">
            <div class="item-input-text">
              Semana Del:
              <input type="text" class="week-input">
            </div>
            <div class="item-input-text">
              Al
              <input type="text" class="week-input">
            </div>
          </div>
          <div class="row-item list-top-item" style="">
            <div class="item-input-text">
              Mes
              <input type="text" class="week-input">
            </div>
            <div class="item-input-text">
              Año
              <input type="text" class="week-input">
            </div>
          </div>


        </div>
      </div>
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 300px 250px 200px 630px 80px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 20px; border-left: 0; border-right: 0; border-bottom:0;">

        </div>
      </div>


      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 40px 551px  1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="text-align:center;">
            <p style="text-align:center; display:flex; align-items:center; justify-content:center;font-weight:bold;">
              I<br>
          T<br>
          E<br>
          M
            </p>
          </div>
          <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
            NOMBRE
          </div>
          <div class="days-week-container">
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Lunes</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Martes</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Miercoles</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Jueves</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Viernes</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Sabado</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>
            <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
              <div class=""
                style="width:100%;border-bottom: 2px solid; padding:15px 0;display: flex;flex-direction: column;justify-content: start;">
                Domingo</div>

              <div class="days-week">

                <div class="report-table-hours" style="">
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    <b>E</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>S</b>
                  </div>
                  <div
                    style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    <b>Total</b>
                  </div>

                </div>
              </div>


            </div>

          </div>
        </div>
      </div>


      <div id="container">
        ${data
          .map(
            (item, index) => `
          <div style="">
          <div class=""
            style="display: grid; grid-template-columns: 40px 551px  1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
            <div class="row-item title-item" style="text-align:center;">
              <p style="text-align:center; display:flex; align-items:center; justify-content:center;font-weight:bold;">
              ${index + 1}
              </p>
            </div>
            <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
        
            </div>
            <div class="days-week-container">
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
              
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>

                  </div>
                </div>


              </div>
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
                
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                      
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>

                  </div>
                </div>


              </div>
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
              
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                  
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
              
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                  
                    </div>

                  </div>
                </div>


              </div>
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
                
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                  
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                
                    </div>

                  </div>
                </div>


              </div>
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
                
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                  
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>

                  </div>
                </div>


              </div>
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
            
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                  
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                
                    </div>

                  </div>
                </div>


              </div>
              <div class="row-item " style="padding:0; display:flex; flex-direction:column;">
                
                <div class="days-week-conatiner">

                </div>
                <div class="days-week">

                  <div class="report-table-hours" style="grid-template-rows: 50px;">
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                  
                    </div>
                    <div
                      style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                    
                    </div>

                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
          ${(index + 1) % 20 === 0 ? '<div class="page-break"></div>' : ""}
        `
          )
          .join("")}
      </div>


    </div>
    <div class="footer">
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">

          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              OBSERVACIONES / COMMENTS</div>

            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                A
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                B
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                C
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                D
              </div>
            </div>
     

          </div>



        </div>
      </div>
    </div>
    <div class="footer">
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">

          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              ELABORO / MADE BY:</div>
            <div class="firma-container">
              <div class="firma"></div>
            </div>
          </div>
          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              REVISO / CHECKED BY</div>
            <div class="firma-container">
              <div class="firma"></div>
            </div>
          </div>
          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              AUTORIZO / AUTHORIZED BY</div>
            <div class="firma-container">
              <div class="firma"></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>



</body>

</html>
  `;

  await page.setContent(html);

  const pdf = await page.pdf({
    width: "500mm",
    height: "340mm",
    printBackground: true,
  });

  await browser.close();

  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});
app.get("/tabla-de-muestreo", async (req, res) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.emulateMediaType("screen");
  await page.setViewport({ width: 1920, height: 1080 });
  const data = [
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    [
      "LOTE-001",
      "SERIAL-001",
      "10",
      "NSP-001",
      "5",
      "MUESTREO-001",
      "10:00",
      "FIRMA-001",
    ],
    [
      "LOTE-002",
      "SERIAL-002",
      "8",
      "NSP-002",
      "4",
      "MUESTREO-002",
      "11:30",
      "FIRMA-002",
    ],
    // Agrega más filas según sea necesario
  ];
  const html = `
  <!DOCTYPE html>
<html>

<head>
  <title>Tabla HTML</title>
</head>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: left;
}
td{
  text-align: right;
}

* {
  font-family: Arial, sans-serif;
}
.small-th{
  width: 40px;
  
}
body{
  margin: 10px 75px;
}
.table-title * {
margin: 3px 0;
}
.table-title {
width: 100%;
display: flex;
justify-content: end;
border-bottom: 2px solid;
padding: 0;
margin-bottom: 50px;
}
</style>
<body>
  <div class="logo">
    <img
      src="http://3.12.127.240/assets/img/logo.png"
      alt="Daryan Saltillo"
      style="width:180px;"
    />
  </div>
  <div class="table-title">
    <h4>TABLA DE MUESTREO (EL SUPERVISOR, LIDER Y/O ENCARGADO DEL TURNO DEBE DE RE-INSPECCIONAR UN 20% DE TODO EL
      MATERIAL LIBERADO).</h4>
  </div>
  <table>
    <thead>
      <tr>
        <th class="small-th">ITEM</th>
        <th>LOTE</th>
        <th>SERIAL</th>
        <th>#PZSI</th>
        <th>NSP</th>
        <th>#PZAS</th>
        <th>MUESTREO</th>
        <th>HORA</th>
        <th>FIRMA</th>
      </tr>
    </thead>
    <tbody id="tabla-body">
      ${data
        .map(
          (item, index) => `
        <tr id="table-data-${index + 1}">
          <td>${index + 1}</td>
          ${item.map((subitem) => `<td>${subitem}</td>`).join("")}
        </tr>
        ${(index + 1) % 20 === 0 ? '<tr class="page-break"></tr>' : ""}
      `
        )
        .join("")}
    </tbody>
  </table>
</body>


</html>
  `;

  await page.setContent(html);

  const pdf = await page.pdf({
    width: "500mm",
    height: "340mm",
    printBackground: true,
  });

  await browser.close();

  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});
app.get("/reporte-por-horas", async (req, res) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.emulateMediaType("screen");
  await page.setViewport({ width: 1920, height: 1080 });
  const data = [
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
    {
      Item: "Item 1",
      "production date": "2023-07-01",
      lot: "100",
      serial: "A1B2C3",
      "QT inspected": 50,
      "NG Pieces": 5,
      "OK Pieces": 45,
      REwork: 0,
      SCRAP: 0,
      A: 1,
      B: 1,
      C: 1,
      D: 1,
      E: 1,
      F: 1,
      G: 1,
      H: 1,
      I: 1,
    },
  ];

  const html = `
  <!DOCTYPE html>
<html>

<head>
  <style>
    .page-break {
      page-break-before: always;
    }

    @media print {


      .page {
        page-break-after: always;
      }
    }

    * {
      font-family: Arial, sans-serif;
    }

    .two-columns {
      grid-column: span 2;
    }

    .six-columns {
      grid-column: span 6;
    }

    .nine-columns {
      grid-column: span 9;
    }

    .eleven-columns {
      grid-column: span 11;
    }

    .vertical-text {
      writing-mode: vertical-rl;
      grid-row: span 5;
    }

    .seven-columns {
      grid-column: span 7;
    }

    .incidents-container {
      width: 100%;
    }

    .container {
      margin: 15px auto;
      padding: 0;
      width: 93%;

      box-sizing: border-box;
      border: 2px solid;

    }

    .row-item {
      border-left: 2px solid;
      box-sizing: border-box;
      border-right: 0;
      border: 0;
      border-right: 2px solid;
      border-top: 1 px solid;
      border-bottom: 0;
      font-size: 11px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
      font-weight: bold;
    }

    .row-item:last-child {
      border-right: 0;
    }

    h1 {
      font-weight: 500;
    }

    .title-item {
      background: #b4c6e7;
      font-weight: bold;
      font-size: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-items: center;
      text-align: center;
      box-sizing: border-box;
      padding: 0 5px;
      width: 100%;
    }

    .sub-table-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-content: start;
      justify-items: center;

    }

    .checkbox {
      width: 30px;
      height: 20px;
      border: 1px solid #000;
      box-sizing: border-box;
    }

    .checked {
      background: #000;
    }

    .report-table-hours {
      display: grid;
      grid-template-columns: repeat(12, 1fr) 200px;
      width: 100%;
      justify-content: center;
      align-items: center;
      grid-template-rows: 30px;
    }

    .report-table-hours> :last-child {
      grid-column: 13;
    }

    .firma-container {
      width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: c;
    }

    .firma {
      width: 80%;
      margin: 0 auto;
      background-color: #000;
      height: 2px;
    }
  </style>
</head>

<body>
  <div class="container" id="divToPrint">
    <div
      style="display: grid; grid-template-columns: 2fr 65%; width: 100%; justify-content: center; align-items: center; justify-items: center; grid-template-rows: 80px;">
      <div style="width: 100%;text-align: center;border-right: 2px solid #000;">
        <img
                        src="http://3.12.127.240/assets/img/logo.png"
                        alt="Daryan Saltillo"
                        style="width:180px;"
                      />
      </div>

      <div>
        <h1>
          <b>REPORTE DE INSPECCION HORA POR HORA</b>
        </h1>
      </div>
    </div>
    <div class="">
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 300px 250px 150px 310px 150px 300px 100px 100px; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 40px; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="">PLANTA /
            FACILITY
          </div>
          <div class="row-item" style=""></div>
          <div class="row-item title-item" style="">NUMERO DE PARTE</div>
          <div class="row-item" style=""></div>
          <div class="row-item title-item" style="">FECHA /
            DATE</div>
          <div class="row-item" style=""></div>
          <div class="row-item title-item">No. DE REPORTE /
            REPORT <br> NUMBER</div>
          <div class="row-item" style=""></div>

        </div>
      </div>
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 300px 250px 200px 630px 80px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 40px; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="">MESA
          </div>
          <div class="row-item" style=""></div>
          <div class="row-item title-item" style="">
            NOMBRE DE PARTE</div>
          <div class="row-item" style=""></div>
          <div class="row-item title-item" style="">TURNO /
            SHIFT</div>
          <div class="row-item" style="display: flex;
              justify-content: center;
              align-items: center">3</div>
        </div>
      </div>


      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 40px 551px  1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="text-align:center;">
            <p style="text-align:center; display:flex; align-items:center; justify-content:center;font-weight:bold;">
              I<br>
          T<br>
          E<br>
          M
            </p>
          </div>
          <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
            CONTROL DEL CLIENTE / CUSTOMER CONTROL
          </div>

          <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
            <div class="" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              INCIDENTES / INCIDENTS TO VERIFY</div>
            <div class="report-table-hours" style="grid-template-rows: 50px;">
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                1
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                2
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                3
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                4
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                5
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                6
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                7
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                8
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                9
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                10
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                11
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                12
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                Total
              </div>
            </div>


          </div>
        </div>
      </div>
      <!-- <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 40px 551px  1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="text-align:center;">
            1
          </div>
          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">

          </div>
          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class="report-table-hours">
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                1
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                2
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                3
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                4
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                5
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                6
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                7
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                8
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                9
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                10
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                11
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                12
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                Total
              </div>
            </div>


          </div>
        </div>
      </div> -->
      
      <div id="container">
        ${data
          .map((item, index) => {
            let htmlLine = `
            <div id="table-data-${index + 1}">
              <div style="display: grid; grid-template-columns: 40px 551px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
                <div class="row-item title-item" style="text-align:center;">
                  ${index + 1}
                </div>
                <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
                  <!-- Aquí puedes generar tu contenido HTML dinámico basado en 'item' -->
                </div>
                <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
                  <div class="report-table-hours">
                    ${Array.from({ length: 13 }, (_, j) => {
                      const borderStyle =
                        j === 0
                          ? "border:2px solid; border-bottom:0; border-top:0; border-right:0; border-left:0;"
                          : "border:2px solid; border-bottom:0; border-top:0; border-right:0;";
                      const content = j === 12 ? "Total" : j + 1;
                      return `
                        <div style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100%; ${borderStyle}">
                          ${content}
                        </div>`;
                    }).join("")}
                  </div>
                </div>
              </div>
            </div>
          `;

            if ((index + 1) % 20 === 0) {
              htmlLine += '<div class="page-break"></div>';
            }

            return htmlLine;
          })
          .join("")}
      </div>
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 591px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
            TOTAL DE DEFECTOS
          </div>

          <div class="row-item " style="padding:0; display:flex; flex-direction:column;">

            <div class="report-table-hours">
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                1
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                2
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                3
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                4
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                5
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                6
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                7
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                8
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                9
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                10
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                11
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                12
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
Total
              </div>
            </div>


          </div>
        </div>
      </div>
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 591px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item title-item" style="padding:0; display:flex; flex-direction:column;">
            TOTAL DE PIEZAS INSPECCIONADAS
          </div>

          <div class="row-item " style="padding:0; display:flex; flex-direction:column;">

            <div class="report-table-hours">
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:0; border-bottom:0; border-top:0; border-right:0;">
                1
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                2
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                3
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                4
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                5
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                6
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                7
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                8
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                9
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                10
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                11
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
                12
              </div>
              <div
                style="height:100%; text-align:center; display:flex; align-items:center; justify-content:center; width:100% width:10px;border:2px solid; border-bottom:0; border-top:0; border-right:0;">
Total
              </div>
            </div>


          </div>
        </div>
      </div>
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns:1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: 30px; border-left: 0; border-right: 0; border-bottom:0;">
          <div class="row-item " style="padding:0; display:flex; flex-direction:column;">

          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 591px 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">

          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              REALIZO / INSPECTED BY</div>

            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                A
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                B
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                C
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                D
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                E
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                F
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                G
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                H
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                I
              </div>
            </div>

          </div>
          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              OBSERVACIONES / COMMENTS</div>

            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                A
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                B
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                C
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                D
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                E
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                F
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                G
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                H
              </div>
            </div>
            <div class="" style="display:grid; grid-template-columns: 1fr; grid-template-rows:30px; width:100% ">
              <div class=""
                style="  height:100%; display:flex; align-items:center; justify-content:center; border-bottom:2px solid">
                I
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
    <div class="footer">
      <div style="">
        <div class=""
          style="display: grid; grid-template-columns: 1fr 1fr; border: 2px solid; box-sizing: border-box; align-content: center; grid-template-rows: auto; border-left: 0; border-right: 0; border-bottom:0;">

          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              REALIZO / INSPECTED BY</div>
            <div class="firma-container">
              <div class="firma"></div>
            </div>
          </div>
          <div class="row-item" style="padding:0; display:flex; flex-direction:column;">
            <div class=" title-item" style="width:100%;border-bottom: 2px solid; padding:15px 0;">
              OBSERVACIONES / COMMENTS</div>
            <div class="firma-container">
              <div class="firma"></div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>



</body>

</html>
  `;

  await page.setContent(html);

  const pdf = await page.pdf({
    width: "500mm",
    height: "300mm",
    printBackground: true,
  });

  await browser.close();

  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});

app.listen(3001, () => console.log("Servidor escuchando en el puerto 3000"));
