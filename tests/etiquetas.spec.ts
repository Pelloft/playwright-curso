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