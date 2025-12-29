import {test, expect} from '@playwright/test';

test('Test visual con capturas de pantalla', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    //const screenshot = await page.screenshot();

    await expect(page.locator('.login_logo')).toBeVisible();
    
    //reemplazar toMatchSnapshot a toHaveScreenshot
    await expect(page).toHaveScreenshot('suacedemo-login.png');
});