require("../src/db/mongoose");

const browserObject = require("./browser");
//characters
// const scraperController = require("../characters/pageController");

//books
// const scraperController = require("../books/pageController");

//creatures
// const scraperController = require("../creatures/pageController");

//potions
// const scraperController = require("../potions/pageController");

//spells
const scraperController = require("../spells/pageController");

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);
