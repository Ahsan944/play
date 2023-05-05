const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    
    const browser = await chromium.launch({headless:false ,slowMo: 400 })

    const page = await browser.newPage()
    
    // enter any website url

    await page.goto('https://demoqa.com/alerts');
    
    // code to handle the alerts 

    page.on('dialog', async dialog =>{
        console.log(dialog.message())
        await dialog.accept();
    })

    await page.click('#confirmButton');

    page.on('dialog', async dialog =>{
        console.log(dialog.message())
        await dialog.accept('my text is this');
    })

    await page.click('#promtButton')

    // closing browser 
    
    await browser.close();

}) ();
   