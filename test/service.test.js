'use strict';

const { Target } = require('@applitools/eyes-webdriverio');

describe('ACME Bank', function () {
  
  it('should log into a bank account', async () => {

    await browser.url('https://demo.applitools.com');

    await browser.eyesCheck(Target.window().fully());
    
  });
  
  it('Second test for test name', async () => {
    await browser.url('https://stackoverflow.com');
    
    const configuration = await browser.eyesGetConfiguration();

    configuration.setBrowsersInfo([
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1200, height: 800, name: 'safari'}]);

    browser.eyesSetConfiguration(configuration);

    await browser.eyesCheck(Target.window());

    const configuration2 = await browser.eyesGetConfiguration();

    configuration2.setBrowsersInfo([
        {width: 1300, height: 800, name: 'chrome'},
        {width: 1300, height: 800, name: 'firefox'},
        {width: 1300, height: 800, name: 'safari'}]);

    browser.eyesSetConfiguration(configuration2);

    await browser.eyesCheck(Target.window());

  });

  after(async () => {

    await browser.closeWindow();

  });
  
  
});
