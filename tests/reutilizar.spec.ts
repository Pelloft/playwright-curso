import {test, expect, chromium, BrowserContext} from  '@playwright/test';

let context: BrowserContext;

test.beforeAll(async () => {
   const browser = await chromium.launch();
   context = await browser.newContext(); 
});

test('prueba reutilizando contexto', async () => {
    const page = await context.newPage();
    await page.goto('https://www.google.com');
    await page.fill('[name=q]', 'Playwright');

    //En vez de waitForNavigation usar espera explicita waitForURL
    await Promise.all([
        page.waitForURL(/search/),
        page.keyboard.press('Enter')
    ]);

    const title = await page.title();
    expect(title).toContain('Playwright');

    await page.close();
});

test.afterAll(async () => {
    await context.close();
});