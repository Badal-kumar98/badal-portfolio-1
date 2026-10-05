const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

console.log('--- Starting Gh-Pages Deployment & Zip Archive ---');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run npm run build first.');
  process.exit(1);
}

const tempDir = path.join(os.tmpdir(), 'gh-pages-deploy-' + Date.now());

try {
  console.log('Cloning gh-pages branch into temp directory:', tempDir);
  execSync(`git clone --branch gh-pages --depth 1 https://github.com/Badal-kumar98/badal-portfolio-1.git "${tempDir}"`, {
    stdio: 'inherit'
  });

  console.log('Cleaning old files in clone...');
  const files = fs.readdirSync(tempDir);
  for (const file of files) {
    if (file !== '.git') {
      fs.rmSync(path.join(tempDir, file), { recursive: true, force: true });
    }
  }

  console.log('Copying build artifacts from dist...');
  fs.cpSync(distDir, tempDir, { recursive: true });

  console.log('Committing and pushing to gh-pages...');
  execSync('git add -A', { cwd: tempDir, stdio: 'inherit' });
  
  // Check if anything changed
  const status = execSync('git status --porcelain', { cwd: tempDir }).toString();
  if (status.trim().length > 0) {
    execSync('git commit -m "deploy: update live site with responsive fixes and authentic assets"', {
      cwd: tempDir,
      stdio: 'inherit'
    });
    execSync('git push origin gh-pages --force', { cwd: tempDir, stdio: 'inherit' });
    console.log('Successfully pushed to gh-pages!');
  } else {
    console.log('gh-pages branch is already up to date.');
  }

  // Create zip file for Netlify in Downloads and project root
  const downloadsZip = path.join(os.homedir(), 'Downloads', 'badal-portfolio-dist.zip');
  console.log('Creating zip archive at:', downloadsZip);
  
  // Use PowerShell Compress-Archive
  execSync(`powershell -NoProfile -Command "Compress-Archive -Path '${distDir}\\*' -DestinationPath '${downloadsZip}' -Force"`, {
    stdio: 'inherit'
  });
  console.log('Zip file generated successfully!');

} catch (err) {
  console.error('Deployment error:', err);
  process.exit(1);
} finally {
  try {
    if (fs.existsSync(tempDir)) {
      fs.rmSync(tempDir, { recursive: true, force: true });
    }
  } catch (e) {
    // ignore cleanup error
  }
}

console.log('--- Deployment Finished Successfully ---');
