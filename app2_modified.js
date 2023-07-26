
let data = /* Aquí deberías poner tus datos */;
let itemsPerPage = 20;
let firstPageItems = data.slice(0, itemsPerPage);
let remainingItems = data.slice(itemsPerPage);
let html = "";

// Procesa los primeros 20 elementos para la primera página
firstPageItems.forEach((item, index) => {
    // Tu lógica para agregar filas a la página aquí...
    html += /* Aquí deberías generar el HTML para el ítem */;

    const itemCount = index + 1;
    if (itemCount % itemsPerPage === 0 && itemCount < firstPageItems.length) {
        html += `</div></div><div class="page-break"></div> `;
    }
});

// Ahora cambia itemsPerPage a 25 para las siguientes páginas
itemsPerPage = 25;

// Procesa los elementos restantes
for (let i = 0; i < remainingItems.length; i++) {
    // Tu lógica para agregar filas a la página aquí...
    html += /* Aquí deberías generar el HTML para el ítem */;
    
    const itemCount = i + 1;  // El índice comienza desde 0, por lo que necesitamos agregar 1 para obtener el recuento de elementos

    if (itemCount % itemsPerPage === 0 && itemCount < remainingItems.length) {
        html += `</div></div><div class="page-break"></div> `;
    }
}

// Finalmente, agrega el cierre de la página
html += `</div></div>`;

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({path: 'hn.pdf', format: 'A4'});

    await browser.close();
})();
