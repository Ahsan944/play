const{ chromium } = require ('Playwright');

// const{browser}

( async() => {
    // function code 
    // Must use "await"
    
    const browser = await chromium.launch({headless:false ,slowMo: 300 })

    const page = await browser.newPage()
    
    // enter any website url

    await page.goto('https://the-internet.herokuapp.com/dropdown')

    const dropdown = await page.$('#dropdown');

    // value 
    await dropdown.selectOption({value: '1' });

    // label 

    await dropdown.selectOption({label: 'Option 2'});

    // index

    await dropdown.selectOption({index : 1});

    //values inside this select
    
    const availableOptions = dropdown.$('option') ; 
    for (let  i = 0 ; i < availableOptions.length; i++) {
        console.log(await availableOptions[i].innerText());
    }

    await page.close();

}) ();
   