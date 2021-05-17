const Creature = require("../src/models/Creature");

const scraperObject = {
  url: `https://www.hp-lexicon.org/creature/?letter=`,
  async scraper(browser, char) {
    let page = await browser.newPage();
    console.log("creatures crawler...");
    console.log(`Navigating to ${this.url}${char}...`);
    // Navigate to the selected page
    await page.goto(`${this.url}${char}`);
    // Wait for the required DOM to be rendered
    await page.waitForSelector("#content");
    // Get the link to all the required
    let urls = await page.$$eval(".row .col-md-12 > article", (links) => {
      // Extract the links from the data
      links = links.map((el) => el.querySelector("a").href);
      return links;
    });
    let pagePromise = (link) =>
      new Promise(async (resolve, reject) => {
        let newPage = await browser.newPage();
        await newPage.goto(link);
        const dataObj = {};
        try {
          const content = await newPage.$$eval(
            ".article-body > .row > .col-md-8",
            (content) =>
              content.map((x) => {
                return x.childNodes[3].innerText;
              })
          );
          const arr = link.split("/");
          dataObj["Name"] = arr[arr.length - 2];
          dataObj["Description"] = content[0];
        } catch (e) {
          console.dir(e);
        }
        resolve(dataObj);
        await newPage.close();
      });

    for (link in urls) {
      try {
        let currentPageData = await pagePromise(urls[link]);
        for (const [key, value] of Object.entries(currentPageData)) {
          if (key && value) {
            console.log(currentPageData);
            const creature = new Creature(currentPageData);
            await creature.save();
          } else {
            console.log("empty object");
          }
          break;
        }
      } catch (e) {
        console.dir(e);
      }
    }
  },
};

module.exports = scraperObject;
