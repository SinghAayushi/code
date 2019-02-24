const puppeteer = require('puppeteer');

let scrape = async () => {
    //try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://www.facebook.com/dipankar.gupta.1293');
        await page.click(`#u_0_e > a`);
        await page.waitFor(1000);
        await page.pdf({path: './page.pdf'})
        //process.stdout.write(pdf);

        // await page.setViewport({width: 1000, height: 3000})
        // await page.screenshot({path: 'google.png'});
        
        const result = await page.evaluate(() => {
            let title = document.querySelector('a').innerText;
            //let price = document.querySelector('').innerText;

            return {
                title
               // price
            }

        });
        browser.close();
        return result;

    // }catch(error){
    //     return console.log(error)
    // }
    
};

scrape().then((value) => {
    console.log(value); // Success!
});
