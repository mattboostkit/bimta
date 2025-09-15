const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG template for BIMTA icon
const createSvg = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${size * 0.125}" fill="#1e3a8a"/>
  <text x="${size/2}" y="${size * 0.55}" font-family="Arial, sans-serif" font-size="${size * 0.35}" font-weight="bold" text-anchor="middle" fill="white">B</text>
  <text x="${size/2}" y="${size * 0.75}" font-family="Arial, sans-serif" font-size="${size * 0.1}" text-anchor="middle" fill="#60a5fa">BIMTA</text>
</svg>`;

const icons = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
  { size: 180, name: 'apple-touch-icon.png' }
];

async function generateIcons() {
  for (const icon of icons) {
    const svg = createSvg(icon.size);
    const outputPath = path.join(__dirname, '..', 'public', icon.name);

    try {
      await sharp(Buffer.from(svg))
        .png()
        .toFile(outputPath);
      console.log(`✓ Created ${icon.name}`);
    } catch (error) {
      console.error(`Error creating ${icon.name}:`, error);
    }
  }

  // Create favicon.ico from 16x16 PNG
  const favicon16Path = path.join(__dirname, '..', 'public', 'favicon-16x16.png');
  const faviconPath = path.join(__dirname, '..', 'public', 'favicon.ico');

  try {
    await sharp(favicon16Path)
      .resize(16, 16)
      .toFile(faviconPath);
    console.log('✓ Created favicon.ico');
  } catch (error) {
    console.error('Error creating favicon.ico:', error);
  }

  console.log('\n✅ All icons generated successfully!');
}

generateIcons().catch(console.error);