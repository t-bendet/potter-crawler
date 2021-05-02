const puppeteer = require("puppeteer");

//*******************************characters_Scraper************************************* */

const charactersScraper = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() =>
    Array.from(document.querySelector(".fact_box").children, (e) =>
      e.innerText.toLowerCase()
    )
  );

  await browser.close();
  return data;
};
//*******************************places_Scraper************************************* */
// TODO needs a lot of work for sorting the data
const placesScraper = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() =>
    Array.from(
      document.querySelector(".article-body").children,
      (e) => e.innerText
    )
  );

  await browser.close();
  return data;
};

//*******************************spells_Scraper************************************* */

const spellsScraper = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(() =>
    Array.from(document.querySelector(".fact_box").children, (e) =>
      e.innerText.toLowerCase()
    )
  );

  await browser.close();
  return data;
};
module.exports = { charactersScraper, placesScraper, spellsScraper };
