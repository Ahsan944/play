const{ chromium, devices } = require ('Playwright');
const iPhone = devices['iPhone 11']

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    
    // Mobile code 

    const browser = await chromium.launch({headless:false ,slowMo: 300 })

    const context = browser.newContext ({
        ...iPhone,
        permissions : ['geolocation'],
        Geolocation : { latitude : 19.432608 , longitude : -99.133209 },
        locale : 'fr-FR'
    });

    const page = await context.newPage()
    
    
    // enter any website url

    await page.goto('https://www.google.com/maps')

    await page.waitForTimeout(5000)

    await browser.close();

}) ();
   