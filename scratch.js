const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'app', 'services');
const files = fs.readdirSync(servicesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => path.join(servicesDir, dirent.name, 'page.tsx'))
  .filter(file => fs.existsSync(file));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  if (!content.includes('import AdditionalServices')) {
    content = content.replace('import Footer from "@/components/footer";', 'import AdditionalServices from "@/components/additional-services";\nimport Footer from "@/components/footer";');
  }

  if (!content.includes('<AdditionalServices />')) {
    content = content.replace('<Footer />', '<AdditionalServices />\n      <Footer />');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
})
