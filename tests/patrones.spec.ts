import { Page } from "@playwright/test";

//Creamos la clase llamada LoginPage y con export nos permite usar la clase en otros archivos
//private page: Page - propiedad privada que guarda la instancia de la página

export class LoginPage {
    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    async navigate(){
        await this.page.goto('https://www.facebook.com/');
    }

    async login(username: string, password: string){
        await this.page.fill('#email', username);
        await this.page.fill('#pass', password);
        await this.page.click('button[name="login"]');
    }

    //Este metodo verifica si aparece un msj de error
     async isErrorVisible(): Promise<boolean>{
        return await this.page.locator('#error_box').isVisible();
     }
}