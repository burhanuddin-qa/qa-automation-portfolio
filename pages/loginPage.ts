import { Page } from '@playwright/test';


export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async goto() {

        await this.page.goto('https://automationexercise.com/login');
    }

    async enterEmail(email: string) {
        await this.page.locator('input[data-qa= login-email]').fill(email);

    }
    
    async enterPassword(password: string) {
        await this.page.locator('input[data-qa= login-password]').fill(password);
    }

    async clickLoginButton() {
        await this.page.locator('button[data-qa="login-button"]').click();
    }

    async getErrorMessage() {
        return this.page.getByText('Your email or password is incorrect!');
    }
    
}