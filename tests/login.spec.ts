import {test, expect} from '@playwright/test';
import {LoginPage} from './patrones.spec';

test('Login de facebook', async ({page}) => {
    const loginpage = new LoginPage(page);
    
    await loginpage.navigate();
    
    await loginpage.login('usuario@gmail.com', 'contraseña');
    
});