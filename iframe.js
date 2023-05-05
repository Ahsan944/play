const{ webkit} = require ('Playwright');

// const{browser}

( async() => { // anonymous arrow function
    // function code 

    // Must use "await"

    // lauching browser
    
    const browser = await webkit.launch({headless:false ,slowMo: 100 })

    //creating a page inside browser

    const page = await browser.newPage()
    
    // navigate to site
    // enter any website url

    await page.goto('https://demoqa.com/frames')

    // logic to handle the iframes 

    const frame1 = await page.frame({url : /\/sample/});
    const heading1 = await frame1.$('h1');
    console.log(await heading1.innerText());

    // closing browser
    
    await browser.close();

}) ();
   