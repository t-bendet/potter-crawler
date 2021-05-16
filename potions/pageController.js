const pageScraper = require("./pageScraper");
async function scrapeAll(browserInstance) {
  let browser;
  const upperCases = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "Y",
    "Z",
  ];
  for (const element of upperCases) {
    try {
      browser = await browserInstance;
      await pageScraper.scraper(browser, element);
    } catch (err) {
      console.log("Could not resolve the browser instance => ", err);
    }
  }
}

module.exports = (browserInstance) => scrapeAll(browserInstance);
