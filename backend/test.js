


const puppeteer=require('puppeteer');

/* const express=require('express');

const app=express(); */

const url='https://www.google.com/search?q=sbh';

const http=require("http")
const server=http.createServer(async (req,res)=>{    

    const data= await scrapeSite(url);
    console.log("we have the data");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("hiii");
    res.write(data);


    res.end("it done");
   



});
server.listen(3000,()=>{console.log("sbh ok")});




async function scrapeSite(url) {
    console.log("start browser");
  const browser = await puppeteer.launch();
  console.log(" browser open");
  const page = await browser.newPage();
  console.log("new page");
  await page.goto(url);
  console.log("page open");

  const data = await page.evaluate(() => {
    console.log("page evaluating...");
    const el= document.querySelector(".BBwThe");
    return el ? el.textContent : 'Element not found!';
  

  });

  console.log("evaluated");
  await browser.close();
  console.log("start browser");
  return data;
}








