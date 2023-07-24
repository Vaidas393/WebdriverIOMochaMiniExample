class Functions
{
    async isDisplayed(element, waitTime) {
        return await (await element).isDisplayed({ timeout: waitTime });
      }
    
      async isClickable(element, waitTime) {
        const el = await element;
        await el.waitForClickable({ timeout: waitTime });
      }

      async waitUntilLimitIsChanged(element, text) {
        await browser.waitUntil(
          async () => (await (await element).getText()).includes(text),
          {
            timeout: 20000,
            timeoutMsg: "expected text to be different after 10s",
          }
        );
      }
}

module.exports = new Functions()


