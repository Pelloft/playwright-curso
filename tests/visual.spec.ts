import {test, expect} from '@playwright/test';

test('Test visual con capturas de pantalla', async ({page}) => {
    await page.goto('https://www.google.com');
    const screenshot = await page.screenshot();

    expect(screenshot).toMatchSnapshot('google-homepage.png');
});