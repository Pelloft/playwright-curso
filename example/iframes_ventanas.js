
//Localizaon de elementos de iframes 

const {chromium} = require ('playwright');

(async () => {
    const browser = await chromium.launch({headless: false});

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')

    const iframe = await page.frame({name: 'main'});
    console.log("iframe encontrado");

    if(iframe){
        await iframe.click('text=HTML');
        console.log("Se hizo click en HTML");
    }



})();