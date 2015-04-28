var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

driver.get("http://www.google.com");
driver.sleep(5000);
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.sleep(5000);
driver.findElement(webdriver.By.name('btnG')).click();
driver.quit();


