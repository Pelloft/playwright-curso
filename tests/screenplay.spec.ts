import { chromium, Browser,Page } from "@playwright/test";

export interface Task{
    perform (page?: Page): Promise<void>;
}

//Actores
class Actor{
    name: string;
    private page?:Page;

    constructor(name: string){
        this.name = name;
    }

    async attemptsTo(...tasks: Task[]){
        for(const task of tasks){
            await task.perform(this.page);
        }
    }

    setPage(page: Page){
        this.page = page;
    }

class OpenBrowser implements Task {
    private url: string;
    private browser?: Browser;
    private page?: Page;

    constructor(url: string){
        this.url = url;
    }

    static at(url: string): OpenBrowser{
        return new OpenBrowser(url);
    }

    async perform(): Promise<void> {
        this.browser = await chromium.launch({headless: false});
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(this.url);
    }

    async close(): Promise<void>{
        if(this.browser){
            await this.browser.close();
        }
    }

    getPage(): Page | undefined{
        return this.page;
    }
}

class SearchGoogle implements Task{
    private term : string;

    constructor(term: string){
        this.term = term;
    }

    static for(term: string): SearchGoogle{
        return new SearchGoogle(term);
    }
    async perform(page: Page):Promise<void>{
        if(!page) throw new Error("No esta inicializada la pagina");

        await page.fill('input[name="q"]', this.term);
        await page.press('input[name="q"]', 'Enter')
    }
}

//Verificación
class VerifySearchResults{
    static areDisplayed(): VerifySearchResults{
        return new VerifySearchResults();
    }

    async perform(page?: Page): Promise<boolean> {
        if(!page) throw new Error('No esta inicializada la pagina');

        const results = await page.$$('h3');

        return results.length > 0;
    }
}

(async () =>{
    const actor= new Actor("Juan Perez usuario");

    const openGoogle = OpenBrowser.at('https//www.google.com');
    await openGoogle.perform();

    actor.setPage(openGoogle.getPage()!);

    const search = SearchGoogle.for('Playwright');
    await actor.attemptsTo(search);

    const verify = VerifySearchResults.areDisplayed();
    const hasResults = await verify.perform(openGoogle.getPage())

    console.log("Hay resultados o no");

    await openGoogle.close();

})