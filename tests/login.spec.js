const {test,expect}= require('@playwright/test');

test('Login page',async({page})=>{
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');
});
