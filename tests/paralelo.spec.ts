import {test, expect} from '@playwright/test';

test('Buscar playwright en google', async ({page}) => {
    await page.goto('https://www.google.com');
    await page.fill('[name="q"]', 'playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const title = await page.title();
    expect (title).toContain('playwright - Buscar con Google');
});

test('Buscar typescript en google', async ({page}) => {
    await page.goto('https://www.google.com');
    await page.fill('[name="q"]', 'typescript');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const title = await page.title();
    expect (title).toContain('typescript - Buscar con Google');
});