const {test,expect}= require('@playwright/test');
// const path=require('path');

test('Validate the Login page Title',async({page})=>{
    // const filePath = path.join(__dirname,'../login.html');
    // const fileUrl = 'file://' + filePath;
    // await page.goto(fileUrl);
    await page.goto('/login.html');
    await expect(page).toHaveTitle('Login Page');
});

test('Validate the successful login',async({page})=>{
    // const filePath = path.join(__dirname,'../login.html');
    // const fileUrl = 'file://' + filePath;
    // await page.goto(fileUrl);
    await page.goto('/login.html');
    await page.fill('#username','admin');
    await page.fill('#password','password123');
    await page.click('button[type="submit"]');
    await expect(page.locator('#success-message')).toBeVisible();

});

test('Validate unsuccessful login',async({page})=>{
    // const filePath = path.join(__dirname,'../login.html');
    // const fileUrl = 'file://' + filePath;
    // await page.goto(fileUrl);
    await page.goto('/login.html');
    await page.fill('#username','admin12');
    await page.fill('#password','passw12ord123');
    await page.click('button[type="submit"]');
    await expect(page.locator('#error-message')).toBeVisible();
});