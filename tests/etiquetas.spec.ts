import {test, expect} from '@playwright/test';

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
