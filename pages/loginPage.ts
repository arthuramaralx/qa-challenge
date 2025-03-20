import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {

    page: Page;
    usernameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    loginConfirmation: Locator;
    logoutConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.logoutConfirmation = page.locator('[data-test="logout-sidebar-link"]');
    };

    async isLogedOut() {
        this.loginButton.isVisible({ timeout: 200 });
    };
    async gotoPage() {
        this.page.goto('https://www.saucedemo.com/', { waitUntil: 'domcontentloaded' });
    };
    async gotoPageBypassLogin() {
        this.page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'domcontentloaded' });
    };
    async enterUsername(username: string) {
        await this.usernameInput.fill(username);
    };
    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    };
    async clickLoginButton() {
        await this.loginButton.click();
    };
    async movedToNextPage() {
        this.page.getByText('Swag Labs').waitFor({ state: 'visible', timeout: 200 });
    };
    async emptyUsername() {
        await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
    };
    async emptyPassword() {
        await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
    };
    async wrongUsernameOrPassword() {
        await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
    };
    async userBlocked() {
        await expect(this.page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out');
    };
    async needToBeAuth() {
        await expect(this.page.locator('[data-test="error"]')).toContainText("Epic sadface: You can only access '/inventory.html' when you are logged in");
    };
    async buggedImage() {
        this.page.locator('img[src="https://example.com/image.jpg"]');
    };
}