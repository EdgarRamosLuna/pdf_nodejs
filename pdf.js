const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

app.get("/pdf", async (req, res) => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.emulateMediaType("screen");
  await page.setViewport({ width: 1920, height: 1080 });
  const path = require("path");
  const htmlPath = path.resolve(__dirname, "pdf.html");
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });
  //await page.setContent(html);
  await page.addStyleTag({content: '.page-break { page-break-before: always; }'});

  const pdf = await page.pdf({
    width: "530mm",
    height: "329mm",
    printBackground: true,
  });

  await browser.close();

  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});

app.listen(3000, () => console.log("Servidor escuchando en el puerto 3000"));
