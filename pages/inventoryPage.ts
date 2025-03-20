import { Locator, Page, expect } from "@playwright/test";
import { LoginPage } from "./loginPage";

export class InventoryPage {

    page: Page;
    inventoryItens: Locator;
    shoppingCart: Locator;
    backpackAddToCart: Locator;
    backpackAddedToCart: Locator;
    removeBackpackFromCart: Locator;
    sideMenu: Locator;
    logoutButton: Locator;
    logoutConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this.inventoryItens = page.locator('.inventory_item_name');
        this.shoppingCart = page.locator('[data-test="shopping-cart-link"]');
        this.backpackAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.backpackAddedToCart = page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' });
        this.removeBackpackFromCart = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.sideMenu = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');

    }

    async addToCart() {
        await this.backpackAddToCart.waitFor({ state: 'visible' });
        this.backpackAddToCart.click();
    }
    async clickOnCart() {
        await this.shoppingCart.click();
    }
    async addedToCart() {
        await this.backpackAddedToCart.isVisible();
    }
    async removeFromCart() {
        await this.removeBackpackFromCart.click();
    }
    async AllProductsNamedSauceLabs() {
        const allTexts = await this.inventoryItens.allTextContents();
        allTexts.forEach(text => expect(text).toContain("Sauce Labs"));
    }
    async clickSideMenu() {
        await this.sideMenu.click();
    }
    async clickLogout() {
        await this.logoutButton.click();
    }
}

