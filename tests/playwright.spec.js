const ROOT_URL = 'http://localhost:8080';
const { test, expect } = require('@playwright/test');

const inputSelector = 'input[name="name"]';
const submitButtonSelector = 'button[type="submit"]';
const greetingSelector = 'h5#greeting';
const name = 'John Doe';

test.beforeEach(async ({ page }) => {
  await page.goto(ROOT_URL);
});

test.describe('Playwright link', () => {
  test('should navigate to Playwright documentation page', async ({ page }) => {
    await page.click('a[href="https://playwright.dev/"]');
    await expect(page.title()).resolves.toMatch('| Playwright');
  });
});

test.describe('Text input', () => {
  test('should display the entered text in the text input', async ({ page }) => {
    await page.fill(inputSelector, name);

    // Verify the input value
    const inputValue = await page.inputValue(inputSelector);
    expect(inputValue).toBe(name);
  });
});

test.describe('Form submission', () => {
  test('should display the "Hello, X" message after form submission', async ({ page }) => {
    const expectedGreeting = `Hello, ${name}.`;
    await page.fill(inputSelector, name);
    await page.click(submitButtonSelector);

    await page.waitForSelector(greetingSelector);
    const greetingText = await page.textContent(greetingSelector);
    expect(greetingText).toBe(expectedGreeting);
  });
});
