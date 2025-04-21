// This script runs Lighthouse performance tests on the portfolio
// To use it, install the Lighthouse CLI:
// npm install -g lighthouse

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create reports directory if it doesn't exist
const reportsDir = path.join(__dirname, '../lighthouse-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Get current date for report naming
const date = new Date().toISOString().split('T')[0];
const reportPath = path.join(reportsDir, `lighthouse-report-${date}.html`);

// URL to test (change to your production URL when deployed)
const url = 'http://localhost:3000';

console.log('Running Lighthouse performance test...');
console.log(`Testing URL: ${url}`);
console.log(`Report will be saved to: ${reportPath}`);

// Run Lighthouse
exec(`lighthouse ${url} --output html --output-path ${reportPath} --view`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error running Lighthouse: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`Lighthouse stderr: ${stderr}`);
    return;
  }
  
  console.log(`Lighthouse test completed successfully!`);
  console.log(`Report saved to: ${reportPath}`);
  console.log(`Lighthouse stdout: ${stdout}`);
});
