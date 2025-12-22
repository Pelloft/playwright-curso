import {test, expect} from '@playwright/test';

test.describe('Prueba de login de facebook', () =>{
    test.beforeEach(async ({page}) => {
        await page.goto('');
    });

    test('debaria inciar sesion con credenciales validas', async ({page}) => {
        await page.fill('#email', 'usuario_valido@gmail.com');
        await page.fill('#pass', 'password');
        await page.click('button[name="login"]');
        await expect(page).toHaveURL('https://www.facebook.com/');
    });

    test('deberia mostrar un error con credenciales invalidas', async ({page}) => {
        await page.fill('#email', 'usuarioinvalido@gmail.com');
        await page.fill('#pass', 'password');
        await page.click('button[name="login"]');
        const errorLocator = await page.locator('#error');
        expect(await errorLocator.isVisible()).toBeTruthy();
    });

});