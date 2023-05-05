const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    
    const browser = await chromium.launch()

    const page = await browser.newPage()
    
    // enter any website url

    await page.goto('https://applitools.com/')

    // take screenshot code 

    await page.screenshot({path: 'screenshot.png'});
    const logo = await page.$('.logo');
    await logo.screenshot({path:'logo.png'})
    
    await logo.screenshot({path:'fullpage.png', fullPage:true,})


    
    
    await page.close();

}) ();

   