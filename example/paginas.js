
//Manejo de sincronizacin de ventanas secundarias

const {chromium} = require ('playwright');

(async () => {
    const browser = await chromium.launch({headless: false});

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.google.com')
    console.log('Primera pagina de google')

    const page2 = await context.newPage();
    await page2.goto('https://www.facebook.com')
    console.log('Segunda pagina de facebook')

    console.log('Cambiando a la pestañas de google');
    await page.bringToFront();
    await page.fill('#APjFqb', 'Linux');
    await page.keyboard.press('Enter');

    console.log('Cambiando a la pestañas de google');
    await page2.bringToFront();
    await page2.fill('#email', 'linux@gmail.com');
    await page2.fill('#pass', 'linux123');
        


})();