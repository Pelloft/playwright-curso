const {chromium} = requiere('playwright');

(async () => {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.facebook.com');
    
    //espers implicita
    page.setDefaultTimeout(5000);
    
    await page.fill('#email', 'user@gmail.com');
    await page.fill('#pass', 'password');

    //espera explicita
    await Promise.all([
        page.waitForURL('https://www.facebook.com'),
        page.click('[id^="u_0_5_B/"]'),
    ]);

    await page.waitForSelector('');
    await browser.close();

}) ();