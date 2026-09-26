const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'app', 'services');
let files = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => path.join(servicesDir, dirent.name, 'page.tsx'))
  .filter(file => fs.existsSync(file));

// Also include the main services page
files.push(path.join(servicesDir, 'page.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.includes('import AdditionalServices')) {
    content = content.replace(/import AdditionalServices from ["']@\/components\/additional-services["'];?\n?/, '');
  }

  if (content.includes('<AdditionalServices />')) {
    content = content.replace(/\s*<AdditionalServices \/>\s*/, '\n      ');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed from ' + file);
  }
});
