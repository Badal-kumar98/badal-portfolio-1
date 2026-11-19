const { chromium } = require('playwright');
const path = require('path');

async function testScreenshots() {
  console.log('Launching browser...');
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const urls = [
    { name: 'aurea', url: 'https://badal-kumar98.github.io/aurea-smartphones/' },
    { name: 'bedrock', url: 'https://badal-kumar98.github.io/bedrock-civil-epc/' },
    { name: 'aranyaa', url: 'https://badal-kumar98.github.io/aranyaa-heritage-sarees/' },
    { name: 'maison', url: 'https://badal-kumar98.github.io/maison-ore-lifestyle/' },
  ];

  for (const item of urls) {
    console.log(`Loading ${item.name}: ${item.url}...`);
    try {
      await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 15000 });
      await page.waitForTimeout(2000);
      const shotPath = path.join('C:\\Users\\konce\\.gemini\\antigravity\\scratch\\badal-portfolio-3\\screenshots', `live-${item.name}.png`);
      await page.screenshot({ path: shotPath });
      console.log(`Saved screenshot to ${shotPath}`);
    } catch (e) {
      console.error(`Error on ${item.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('Done!');
}

testScreenshots().catch(console.error);
