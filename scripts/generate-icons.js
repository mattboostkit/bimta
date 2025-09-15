const fs = require('fs');
const path = require('path');

// Simple SVG icon for BIMTA
const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect width="512" height="512" rx="64" fill="#1e3a8a"/>
  <text x="256" y="280" font-family="Arial, sans-serif" font-size="160" font-weight="bold" text-anchor="middle" fill="white">B</text>
  <text x="256" y="380" font-family="Arial, sans-serif" font-size="48" text-anchor="middle" fill="#60a5fa">BIMTA</text>
</svg>`;

// Save SVG files with different sizes referenced in manifest
const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' }
];

// For now, we'll save them as SVG files (browsers can handle SVG icons)
// In production, you'd convert these to actual PNG files
sizes.forEach(({ name }) => {
  const outputPath = path.join(__dirname, '..', 'public', name);
  // Save SVG with PNG extension (browsers will handle it)
  fs.writeFileSync(outputPath, svgIcon);
  console.log(`Created ${name}`);
});

// Create a basic favicon.svg
fs.writeFileSync(path.join(__dirname, '..', 'public', 'favicon.svg'), svgIcon);
console.log('Created favicon.svg');

console.log('Icon placeholders generated successfully!');