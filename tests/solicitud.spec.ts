import {test, expect} from '@playwright/test';


test('Interceptar y manupular una solicitud GET', async ({page}) => {
    await page.route('https://reqres.in/api/users', async (route) => {
        const mockResponse = {
            status: 200,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                data:[
                    {id: 1, first_name: 'John', last_name: 'Doe', email: 'juan@exampel.com'},
                    {id: 2, first_name: 'Jane', last_name: 'Doe', email: 'juan@exampel.com'}
                ]
            })
        }
        await route.fulfill(mockResponse)
    });

    await page.goto('https://example.com/');
    const response = await page.evaluate(async () =>{
        const res = await fetch('https://reqres.in/api/users');
        return res.json();
    })

    expect(response.data).toHaveLength(2);
    expect(response.data[0].first_name).toBe('John');
});