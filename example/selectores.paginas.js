const {chromium} = require ('playwright');

(async () => {
    const browser = await chromium.launch({headless: false});

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com');

    await page.fill('#APjFqb','Documentacion de playwright');
    await page.press('#APjFqb', 'Enter');

    //esperar a que los resultadose se carguen
    await page.waitForSelector('h3')

    await page.click('text=Instalación | Dramaturgo');

    await page.waitForTimeout(3000);

    await page.click('text=Community');

    await browser.close();

})();