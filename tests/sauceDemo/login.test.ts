import { test, expect } from "@playwright/test";
import { url } from "inspector";
import { LoginPage } from "../../pages/loginPage"



test('Successfully logs in', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();

});

test('Trying to bypass login', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPageBypassLogin();
    await login.needToBeAuth();

});

test('Empty Username', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();
    await login.emptyUsername();

});

test('Empty Password', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();
    await login.emptyUsername();

});

test('Wrong username', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_test');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();
    await login.wrongUsernameOrPassword();

});

test('Wrong password', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_spice');
    await login.clickLoginButton();
    await login.wrongUsernameOrPassword();

});

test('User blocked', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('locked_out_user');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();
    await login.userBlocked();

});

test('Performance issue user lag at login', async ({ page }) => {

    try {
        const login = new LoginPage(page);
        await login.gotoPage();
        await login.enterUsername('performance_glitch_user');
        await login.enterPassword('secret_sauce');
        await login.clickLoginButton();
    }
    catch (error) {
        expect(error.message).toContain('Timed out 5000ms waiting for expect(locator).toContainText(expected)')
    }
});

test('Problem user login bug', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();
    await login.buggedImage();
});
