const puppeteer = require('puppeteer');
const http=require('http')


const getdata=async () => {

  const browser = await puppeteer.launch({
    headless: false,  // Open a real browser window
    defaultViewport: null,
    args: ['--start-maximized']
  })

  const page = await browser.newPage();

  // Pretend to be Chrome on Windows
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36');

  const url = 'https://www.google.com/search?q=sbh';

  await page.goto(url, { waitUntil: 'networkidle2' });

  // Wait for any visible search result to appear
  await page.waitForSelector('h3', { visible: true });

  // Extract the titles of the search results
  const data = await page.evaluate(() => {
    return document.querySelectorAll('.BBwThe').textContent;
     
  });

  console.log('Search Results Titles:\n', data);

  await browser.close();
  return data;
}




const server=http.createServer(async (req,res)=>{    

   
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log("hiii");
   
   
    const data = await getdata();
     res.write(getdata());


    res.end("it done");
   



});
server.listen(3000,()=>{console.log("sbh ok")});

