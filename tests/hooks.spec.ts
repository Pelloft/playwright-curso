import {test, expect, Page} from '@playwright/test';

let page:Page;

test.describe('Ejemplo de hooks en playwright', () => {
    //Ejecutar una sola vez antes de todas las pruebas
    test.beforeAll(async ({browser}) =>{
        console.log("Configuración entorno antes de las pruebas");
        const context = await browser.newContext();
        page = await context.newPage();
    });

    // se ejecuta antes de cada prueba
    test.beforeEach(async () => {
        console.log("Configurando entorno antes de cada prueba");
        await page.goto('https://example.com');
    });

    //prueba1
    test('Validar titulo de la pagina', async () =>{
        await expect(page).toHaveTitle('Example Domain');
    });

    //prueba2
    test('validar el enlace de la pagina', async() => {
        const link = await page.locator('a');
        await expect(link).toHaveText('Learn more');

    });

    //usar aftereach se ejecuta despues de cada prueba
    test.afterEach(async () => {
        console.log("Limpiamdo el entorno despues de cada prueba");
    });

    //usar afterAll se ejecuta una sola vez despue de todoas las pruebas
    test.afterAll(async () =>{
        console.log("Cerrando recurso despues de todas las pruebas");
        await page.close();
    });
});

//Metodo page inyectado a playwright

// import { test, expect } from '@playwright/test';

// test.describe('Ejemplo de hooks en Playwright', () => {

//   // Se ejecuta antes de cada prueba
//   test.beforeEach(async ({ page }) => {
//     console.log('Configurando entorno antes de cada prueba');
//     await page.goto('https://example.com');
//   });

//   // Prueba 1
//   test('Validar título de la página', async ({ page }) => {
//     await expect(page).toHaveTitle('Example Domain');
//   });

//   // Prueba 2
//   test('Validar el enlace de la página', async ({ page }) => {
//     const link = page.locator('a');
//     await expect(link).toHaveText('Learn more');
//   });

// });
