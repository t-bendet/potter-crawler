const puppeteer = require("puppeteer");
const axios = require("axios");
const {
  charactersScraper,
  placesScraper,
  spellsScraper,
} = require("./crawlers");
const baseUrl = "https://www.hp-lexicon.org/magic/summoning-charm/";
const fs = require("fs");
require("events").EventEmitter.defaultMaxListeners = 20;

const main = async () => {
  // const testData = await charactersScraper(baseUrl);
  // console.log(testData);
  // fs.writeFileSync("./draco-malfoy.json", JSON.stringify(testData));

  // const testData = await placesScraper(baseUrl);
  // console.log(testData);
  // fs.writeFileSync("./data/places/leaky-cauldron.json", JSON.stringify(testData));

  const testData = await spellsScraper(baseUrl);
  console.log(testData);
  fs.writeFileSync(
    "./data/spells/summoning-charm.json",
    JSON.stringify(testData)
  );
};
main();
