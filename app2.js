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

  data.map((item, index) => {
    const itemCount = index + 1;

    if(index === 0){
      if((index + 1) % 10 === 0 && data.length > 10){
        pageIndexPdf++;
      }
    }
    
    const itemsPerPage = pageIndex === 0 ? pageBreakAfter : pageBreakAfter * 2;
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

    if (itemCount % itemsPerPage === 0 && itemCount < data.length) {
      //if((i + 1) % 20 === 0){}
      html += `</div></div><div class="page-break"></div> `;
      pageIndex++;
    }
  });
  data.map((item, index) => {
    const itemCount = index + 1;
    
    
    if(index === 0){
      if (data.length > pageBreakAfter) {
        //if((i + 1) % 20 === 0){}
        html += `</div></div><div class="page-break"></div> `;
        //pageIndex++;
      }
      html += `  
      <div class="${pageIndexPdf > 3 || data.length > 20 ? "container" : ""}" style="${
        pageIndexPdf > 3 || data.length > 20 ? "border-top:0;" : ""
      }">
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
  });

  const defaultHeight = 300;
  
  //console.log(pageIndexPdf)
  await page.setContent(html);

  const pdf = await page.pdf({
    width: "500mm",
    height: `${pageIndexPdf > 2 && data.length >= 20 ? data.length > 20 ? "330":"400":documentHeights[data.length]?.h || defaultHeight}mm`,
    printBackground: true,
  });

  await browser.close();

  res.set({ "Content-Type": "application/pdf", "Content-Length": pdf.length });
  res.send(pdf);
});