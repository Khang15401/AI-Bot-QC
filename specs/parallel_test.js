var assert = require("assert"),
  webdriver = require("selenium-webdriver"),
  conf_file = process.argv[3] || "conf/single.conf.js";

var capabilities = require("../" + conf_file).capabilities;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
        LT_USERNAME +
        ":" +
        LT_ACCESS_KEY +
        "@hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

capabilities.forEach(function(caps) {
 
  describe("SOLX App Test " + caps.browserName, function() {
    var driver;
    this.timeout(0);

    beforeEach(function(done) {
      caps.name = this.currentTest.title;
      driver = buildDriver(caps);
      done();
    });

    it("can find search results on SOLX", async function() {
      try {
        await driver.get("https://solx.community/");
        let mintBtn = await driver.findElement(
          webdriver.By.xpath(
            // '//*[@id="home"]/div[2]/div/div[3]/div[2]/div/div[1]/button[1]'
            '//*[@id="home"]/div[2]/div/div[3]/div[2]/div/div[1]/button[2]'
          )
        );
        await driver.executeScript("arguments[0].scrollIntoView(true);", mintBtn);
        console.log("1. Action Done");
        await sleep(5000);
        await driver.executeScript("smartui.takeScreenshot=Picture 1");
  
        await driver.get("https://solx-stg.blocktrend.xyz/");
        let PopupNoti = await driver.findElement(webdriver.By.xpath('//*[@id="term_of_use"]/header/img'));
        await PopupNoti.click();
        let mintBtn2 = await driver.findElement(
          webdriver.By.xpath(
            '//*[@id="home"]/div[1]/div/div[4]/div[2]/div/div[1]/button[1]'
          )
        );
        await driver.executeScript(
          "arguments[0].scrollIntoView(true);",
          mintBtn2
        );
        console.log("2. Action Done");
        await sleep(5000);
        await driver.executeScript("smartui.takeScreenshot=Picture 2");
      } catch (error) {
        console.log(error);
      }

    afterEach(async function() {
      try {
        if (this.currentTest.isPassed()) {
          driver.executeScript("lambda-status=passed");
        } else {
          driver.executeScript("lambda-status=failed");
        }
        
      } finally {
       await driver.quit()
      }
    });
  });
})
});
