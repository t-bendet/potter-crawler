const scraperObject = {
  async scraper(browser) {
    let counter = 1;
    let pagePromise = (link) =>
      new Promise(async (resolve, reject) => {
        let newPage = await browser.newPage();
        await newPage.goto(link);
        const content = await newPage.$$eval(".fact_box > .data", (content) =>
          content.map((p, i) => {
            if (i === 0) {
              return [
                "Book_Name",
                p.childNodes[3].textContent
                  .trim()
                  .replace(/(\r\n\t|\n|\r|\t)/gm, "")
                  .split("— ")[1],
              ];
            }
            if (p.childNodes.length === 2 || p.childNodes.length === 3) {
              return [
                p.childNodes[0].textContent
                  .trim()
                  .replace(/(\r\n\t|\n|\r|\t)/gm, "")
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
        if (counter === 6) {
          dataObj["Description"] = await newPage.$eval(
            ".article-body > .row > .col-md-8",
            (text) => text.children[2].innerText
          );
        } else {
          dataObj["Description"] = await newPage.$eval(
            ".article-body > .row > .col-md-8",
            (text) => text.children[1].innerText
          );
        }
        dataObj["Book_number"] = counter;

        counter++;

        resolve(dataObj);
        await newPage.close();
      });
    const urls = [
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/ps/",
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/cs/",
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/pa/",
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/gf/",
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/op/",
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/hbp/",
      "https://www.hp-lexicon.org/source/the-harry-potter-novels/dh/",
    ];
    for (link in urls) {
      let currentPageData = await pagePromise(urls[link]);
      console.log(currentPageData);
    }
  },
};

module.exports = scraperObject;

//TODO add book chapters
