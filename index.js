require("./src/db/mongoose");

const browserObject = require("./browser");
//characters
const scraperController = require("./characters/pageController");

//books
// const scraperController = require("./books/pageController");

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);

//TODO add the rest of the books
//https://www.hp-lexicon.org/source/other-potter-books/qa/
//https://www.hp-lexicon.org/source/other-potter-books/fb/
//https://www.hp-lexicon.org/source/other-potter-books/tbb/
//https://www.hp-lexicon.org/source/other-canon/bos/
//https://www.hp-lexicon.org/source/other-canon/bop/
