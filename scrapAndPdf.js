// const puppeteer = require('puppeteer');
// (async function() {
//     try{
//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();
//         await page.setViewport({width: 1024, height: 880});
//         await page.goto('https://www.facebook.com/dipankar.gupta.1293', {"waitUntil" :'networkidle2'}).catch(function() {
//             console.log('Error while loading up the url.');
//         });
//         await page.pdf({path: './file.pdf', format: 'A4', printBackground: true});
//         // .catch(function () {
//         //
//         //     console.log('Error creating pdf.');
//         // });
//         browser.close();
//     }catch(error){
//         console.log(error)
//     }
// })()

const puppeteer = require('puppeteer')
const fs = require('fs');
void (async()=>{

    try{
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto('https://www.facebook.com/dipankar.gupta.1293')
        //await page.pdf({path: './pdf/page.pdf'})

        const pdf = await page.pdf({path: './pdf/page.pdf',
            format: 'A4',
            printBackground: true,
            margin: {top: '1cm', right: '1cm', bottom: '1cm', left: '1cm'}
          });
          fs.writeFile('page.pdf', pdf, _ => console.log('HTML saved'));
          //async()=>process.stdout.write(pdf)

        await browser.close()
    }catch(error){
        console.log(error)
    }
})()

// const pdf = await page.pdf({
//     format: 'A4',
//     printBackground: true,
//     margin: {top: '1cm', right: '1cm', bottom: '1cm', left: '1cm'}
//   });
  
//   process.stdout.write(pdf)


// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.setExtraHTTPHeaders({Referer: 'https://sparktoro.com/'}) 
//   await page.goto('https://sparktoro.com/trending');
//   await page.waitForSelector('div.title > a');

//   const stories = await page.evaluate(() => {
//   const links = Array.from(document.querySelectorAll('div.title > a'))
//   return links.map(link => link.href).slice(0, 10)
//   })

//   	console.log(stories);
//     await browser.close();
//     })()