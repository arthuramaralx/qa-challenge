import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage"
import { InventoryPage } from "../../pages/inventoryPage";




test('Adding products to cart', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();

    const inventory = new InventoryPage(page)
    await inventory.addToCart();
    await inventory.addedToCart();

});

test('Removing products of the card', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();

    const inventory = new InventoryPage(page)
    await inventory.addToCart();
    await inventory.clickOnCart();
    await inventory.removeFromCart();

});

test('Sucessfully logged out', async ({ page }) => {

    const login = new LoginPage(page);
    await login.gotoPage();
    await login.enterUsername('standard_user');
    await login.enterPassword('secret_sauce');
    await login.clickLoginButton();

    const inventory = new InventoryPage(page)
    await inventory.clickSideMenu();
    await inventory.clickLogout();
    await login.isLogedOut();

});