const fs = require('fs');
const p = require('path');

let content = fs.readFileSync('js/app.js', 'utf8');

const walk = dir => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = p.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(fullPath));
        } else { 
            if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
                let rel = fullPath.split('Photos\\\\')[1];
                if (!rel) rel = fullPath.split('Photos/')[1];
                if (rel && !fullPath.includes('Hero') && !fullPath.includes('Feedbacks')) {
                    results.push('Photos/' + rel.replace(/\\\\/g, '/'));
                }
            }
        }
    });
    return results;
};

let all = walk('Photos');
all = all.filter(f => !f.includes('اطفال1.jpeg') && !f.includes('اطفال11.jpeg'));

let photoStr = all.map(f => '    "' + f + '"').join(',\n');

let newVars = `const MULTI_IMAGE_GROUPS = [
    {
        folderAr: "ملابس",
        subfolderAr: "اطفال",
        images: [
            "Photos/ملابس/اطفال/اطفال1.jpeg",
            "Photos/ملابس/اطفال/اطفال11.jpeg"
        ]
    }
];

// مسارات الصور المفردة (كل صورة = منتج)
const PHOTO_PATHS = [
${photoStr}
];`;

const startIndex = content.indexOf('const MULTI_IMAGE_GROUPS = [');
const endMarker = '];';
let endIndex = content.indexOf('];', content.indexOf('const PHOTO_PATHS = ['));
if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + newVars + content.substring(endIndex + 2);
    fs.writeFileSync('js/app.js', content, 'utf8');
    console.log('Images successfully synced in app.js!');
} else {
    console.log('Could not find bounds to replace in app.js');
}
