const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

const distDir = path.resolve(__dirname, '../dist');

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') reqPath = '/index.html';
  const filePath = path.join(distDir, reqPath);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    const fallback = path.join(distDir, 'index.html');
    if (fs.existsSync(fallback)) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(fallback).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  }
});

async function run() {
  const PORT = 5230;
  await new Promise(r => server.listen(PORT, r));
  console.log(`Server running on http://localhost:${PORT}`);

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
  });

  const screenshotsDir = path.resolve(__dirname, '../screenshots');
  if (!fs.existsSync(screenshotsDir)) fs.mkdirSync(screenshotsDir, { recursive: true });

  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900 },
    { name: 'tablet-720', width: 720, height: 1024 },
    { name: 'mobile-390', width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    console.log(`Capturing for ${vp.name}...`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });

    // Preloader takes ~1.5s total now, wait 2.5s for full entrance animation
    await page.waitForTimeout(2800);

    // Hero Viewport Screenshot (at top)
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    await page.screenshot({
      path: path.join(screenshotsDir, `${vp.name}-hero.png`),
    });

    // Work Section Screenshot
    await page.evaluate(() => {
      const el = document.getElementById('work');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(screenshotsDir, `${vp.name}-work.png`),
    });

    // About Section Screenshot
    await page.evaluate(() => {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(screenshotsDir, `${vp.name}-about.png`),
    });

    // Contact Section Screenshot
    await page.evaluate(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'instant' });
    });
    await page.waitForTimeout(600);
    await page.screenshot({
      path: path.join(screenshotsDir, `${vp.name}-contact.png`),
    });

    // Hover state capture on desktop
    if (vp.name === 'desktop-1440') {
      await page.evaluate(() => {
        const el = document.getElementById('work');
        if (el) el.scrollIntoView({ behavior: 'instant' });
      });
      await page.waitForTimeout(400);

      const firstCard = await page.$('article.group button');
      if (firstCard) {
        await firstCard.hover();
        await page.waitForTimeout(400);
        await page.screenshot({
          path: path.join(screenshotsDir, `desktop-1440-hover-work.png`),
        });
      }

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      const ctaBtn = await page.$('button[data-magnetic]');
      if (ctaBtn) {
        await ctaBtn.hover();
        await page.waitForTimeout(400);
        await page.screenshot({
          path: path.join(screenshotsDir, `desktop-1440-hover-btn.png`),
        });
      }
    }

    // Mobile menu toggle capture
    if (vp.name === 'mobile-390') {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(300);
      const menuBtn = await page.$('button[aria-label="Toggle menu"]');
      if (menuBtn) {
        await menuBtn.click();
        await page.waitForTimeout(700);
        await page.screenshot({
          path: path.join(screenshotsDir, `mobile-390-menu-open.png`),
        });
      }
    }

    await context.close();
  }

  await browser.close();
  server.closeAllConnections?.();
  server.close();
  console.log('All screenshots captured successfully!');
  process.exit(0);
}

run().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
