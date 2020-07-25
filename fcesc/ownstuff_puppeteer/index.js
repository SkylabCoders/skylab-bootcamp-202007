// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
const puppeteer = require("../node_modules/puppeteer-core/lib/cjs/common/puppeteer");

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    //assign first item of the array with destructuring to el
    const [el] = await page.$x('/html/body/div[3]/div[3]/div/div/div[1]/section/ul/li[1]/article/div/header/h1/a');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt})
}

scrapeProduct('https://www.lavanguardia.com/');