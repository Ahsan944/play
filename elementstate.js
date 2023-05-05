const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    
    const browser = await chromium.launch({headless:false ,slowMo: 100 })

    const page = await browser.newPage()
    
    // enter any website url

    await page.goto('https://demoqa.com/automation-practice-form');


    //print the element state 

    const firstName = await page.$('#firstName');
    const sportsCheck = await page.$('#hobbies-checkbox-1');
    const submitBtn = await page.$('#submit');

    console.log(await firstName.isDisabled());
    console.log(await firstName.isEnabled());
    console.log(await firstName.isEditable());

    console.log(await sportsCheck.isChecked());
    console.log(await sportsCheck.isVisible());
    console.log(await submitBtn.isHidden());

    console.log(await submitBtn.isVisible());


    // closing browser 

    await browser.close();

}) ();
   