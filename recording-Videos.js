// 3 Main core concepts :
// 1) Browser
// 2) Context 
// 3) Page

const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    

    // Lauching browser

    const browser = await chromium.launch({headless:false ,slowMo: 100 })

    const page = await browser.newPage()
    const Context =  await browser.newContext({
        recordVideo : {
            dir : "./recordings"
        }
    });
    
    // enter any website url

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1')
    
    // click on button 

    await page.click('button')
    
    await page.waitForSelector('#loading') 

    await page.waitForSelector('#loading',{state : 'hidden' })

    await page.waitForTimeout(100)

    

    await page.close();

}) ();
   