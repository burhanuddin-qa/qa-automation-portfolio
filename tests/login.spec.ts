import {test, expect} from '@playwright/test';

test('Should load homepage', async ({page}) =>{
    await page.goto('https://automationexercise.com');
    await expect(page).toHaveTitle(/Automation Exercise/)

});

test('should show login page when clicking on Signup/Login', async ({page}) =>{
    await page.goto('https://automationexercise.com');
    await page.getByRole('link', {name: 'Signup / login'}).click();
    await expect(page).toHaveURL(/login/);
});

test('Should shw error with wrong credentials', async ({page})  =>{

    await page.goto('https://automationexercise.com/login');
    await page.locator('input[data-qa= login-email]').fill('wrongemail@test.com');
    await page.locator('input[data-qa= login-password]').fill('wrongpassword');
    await page.locator('button[data-qa="login-button"]').click();
    await expect(page.getByText('Your email or password is incorrect!')).toBeVisible();
});