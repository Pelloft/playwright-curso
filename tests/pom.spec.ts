import {test, expect, Page} from '@playwright/test';

class GooglePage {
    private page: Page;
    private searchBox = 'input[name="q"]';
    private searchButton = 'input[name="btnK"]';

    constructor(page: Page) {
        this.page = page;
    }
    
    //buscar un termino en ggogle 
    async search(text: string){
        await this.page.fill(this.searchBox, text);
        await this.page.click(this.searchButton);
    }

    //metodo para verificar que los resultados contengan un texto
    async verifyResultsContain(text: string){
        const results = await this.page.locator('body');
        await expect(results).toContainText(text);
    }
}