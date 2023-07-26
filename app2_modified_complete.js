
const puppeteer = require('puppeteer');

// Dummy data for illustration purposes
let data = Array.from({length: 68}, (_, i) => i + 1);

let itemsPerPage = 20;
let firstPageItems = data.slice(0, itemsPerPage);
let remainingItems = data.slice(itemsPerPage);
let html = "";
let pageIndex = 1;

// Process the first 20 items for the first page
firstPageItems.forEach((item, index) => {
    // Your logic to add rows to the page here...
    html += `Item: ${item}, Index: ${index}\n`;

    const itemCount = index + 1;
    if (itemCount % itemsPerPage === 0 && itemCount < firstPageItems.length) {
        html += `</div></div><div class="page-break"></div> `;
        pageIndex++;
    }
});

// Now change itemsPerPage to 25 for the following pages
itemsPerPage = 25;

// Process the remaining items
for (let i = 0; i < remainingItems.length; i++) {
    // Your logic to add rows to the page here...
    html += `Item: ${remainingItems[i]}, Index: ${i}\n`;
    
    const itemCount = i + 1;  // Index starts from 0, so we need to add 1 to get item count

    if (itemCount % itemsPerPage === 0 && itemCount < remainingItems.length) {
        html += `</div></div><div class="page-break"></div> `;
        pageIndex++;
    }
}

// Finally, add the page closure
html += `</div></div>`;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(html);
    await page.pdf({path: 'hn.pdf', format: 'A4'});

    await browser.close();
})();
