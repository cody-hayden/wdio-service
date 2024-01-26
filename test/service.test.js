'use strict';

const { Target } = require('@applitools/eyes-webdriverio');

describe('ACME Bank', function () {
  
  it('should log into a bank account', async () => {

    await browser.url('https://demo.applitools.com');

    await browser.eyesCheck(Target.window().fully());
    
  });

  after(async () => {

    await browser.closeWindow();

  });

  afterEach(async () => {
    let testResults = await browser.eyesGetTestResults();
  });
  
  
});
