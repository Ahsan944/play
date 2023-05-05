const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    
    const browser = await chromium.launch({headless:false ,slowMo: 100 })

    const page = await browser.newPage()
    
    // enter any website url

    await page.goto('https://www.google.com/')
    
    await page.close();

}) ();
   