const ROOT_URL = 'http://localhost:8080';

describe('Page tests', () => {
  const inputSelector = 'input[name="name"]';
  const submitButtonSelector = 'button[type="submit"]';
  const greetingSelector = 'h5#greeting';
  const name = 'John Doe';

  beforeEach(async () => {
    await page.goto(ROOT_URL);
  });

  describe('Puppeteer link', () => {
    it('should navigate to Puppeteer documentation page', async () => {
      await page.click('a[href="https://pptr.dev/"]');
      await expect(page.title()).resolves.toMatch('Puppeteer | Puppeteer');
    });
  });

  describe('Text input', () => {
    it('should display the entered text in the text input', async () => {
      await page.type(inputSelector, name);

      // Verify the input value
      const inputValue = await page.$eval(inputSelector, el => el.value);
      expect(inputValue).toBe(name);
    });
  });

  describe('Form submission', () => {
    it('should display the "Hello, X" message after form submission', async () => {
      const expectedGreeting = `Hello, ${name}.`;
      await page.type(inputSelector, name);
      await page.click(submitButtonSelector);

      await page.waitForSelector(greetingSelector);
      const greetingText = await page.$eval(greetingSelector, el => el.textContent);
      expect(greetingText).toBe(expectedGreeting);
    });
  });
});

