import {test, expect} from '@playwright/test';


// test.describe('Pruebasa de etiquetas', () => {
//     test.beforeEach(async ({page}) =>{
//         await page.goto('https://example.com');
//     });
// });

test('Prueba google', async ({page}) => {
    await page.goto('https://www.google.com');
    const title = await page.title();
    expect(title).toBe('Google');

});

test.fixme('Prueba example', async ({page}) => {
    await page.goto('https://example.com')
    await expect(page).toHaveTitle('Example Domain');
});

test.describe('Etiquetas Feature Tests', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://example.com');
    });
});

test('validar enlace', async ({page}) => {
    const enlace = await page.locator('a');
    await expect(enlace).toHaveAttribute('More information...');
});

test.fixme('validar encabezado h1', async ({page}) => {
    await page.goto('http://example.com');
    await expect(page).toHaveTitle('Example Domain');
});

