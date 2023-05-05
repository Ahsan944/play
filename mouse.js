const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // anonymous arrow function 
    // function code 

    // lauching browser

    // Must use "await"
    
    const browser = await chromium.launch({headless:false ,slowMo: 100 })

    //creating a page inside browser

    const page = await browser.newPage()

    // navigating to site 
    
    // enter any website url

    await page.goto('https://paint.js.org/')

    await page.mouse.move(200,200);

    await page.mouse.down();

    await page.mouse.move(400,200);
    await page.mouse.move(400,400);
    await page.mouse.move(200,400);
    await page.mouse.move(200,200);

    
    await page.close();

}) ();
   