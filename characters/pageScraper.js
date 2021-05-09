const Character = require("../src/models/Character");

const scraperObject = {
  url: `https://www.hp-lexicon.org/character/?letter=`,
  async scraper(browser, char) {
    let page = await browser.newPage();
    console.log("characters crawler...");
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
        const content = await newPage.$$eval(".fact_box > .data", (content) =>
          content.map((p, i) => {
            if (i === 0) {
              return [
                "Name",
                p.childNodes[0].textContent
                  .trim()
                  .replace(/(\r\n\t|\n|\r|\t)/gm, "")
                  .replace("Species / Race", "Species"),
              ];
            }
            if (p.childNodes.length === 2 || p.childNodes.length === 3) {
              return [
                p.childNodes[0].textContent
                  .trim()
                  .replace(/(\r\n\t|\n|\r|\t)/gm, "")
                  .replace("Species / Race", "Species")
                  .replace(" ", "_"),
                p.childNodes[1].textContent
                  .trim()
                  .replace(/(\r\n\t|\n|\r|\t)/gm, ""),
              ];
            }
            return [];
          })
        );
        const dataObj = Object.fromEntries(content);
        resolve(dataObj);
        await newPage.close();
      });

    for (link in urls) {
      try {
        let currentPageData = await pagePromise(urls[link]);
        console.log(currentPageData);
        const character = new Character(currentPageData);
        await character.save();
      } catch (e) {
        console.dir(e);
      }
    }
  },
};

module.exports = scraperObject;

//G stopped at Queenie Goldstein
//P stopped at Jimmy Peakes
//Z stopped at Zacharias Smith's father
