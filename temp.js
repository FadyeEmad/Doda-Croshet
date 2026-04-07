const fs = require('fs');
const p = require('path');

let content = fs.readFileSync('d:/Doda Croshet/js/app.js', 'utf8');

const walk = dir => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = p.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            let rel = file.split('Photos\\\\')[1];
            if (!rel) rel = file.split('Photos/')[1];
            if(rel) results.push('Photos/'+rel.replace(/\\\\/g, '/'));
        }
    });
    return results;
};

let all = walk('d:/Doda Croshet/Photos');
all = all.filter(f => !f.includes('Hero') && !f.includes('Feedbacks') && !f.includes('اطفال1.jpeg') && !f.includes('اطفال11.jpeg'));

let photoStr = all.map(f => '"'+f+'"').join(',\n    ');

let newPaths = `const MULTI_IMAGE_GROUPS = [
    {
        folderAr: 'ملابس',
        subfolderAr: 'اطفال',
        images: [
            'Photos/ملابس/اطفال/اطفال1.jpeg',
            'Photos/ملابس/اطفال/اطفال11.jpeg'
        ]
    }
];

const PHOTO_PATHS = [
    ${photoStr}
];`;

content = content.replace(/const MULTI_IMAGE_GROUPS[\s\S]*?\];/m, newPaths);

content = content.replace(
  /<p class="product-price">([^<]+)<\/p>/g,
  `<p class="product-price">\${lang === 'en' ? 'Price on request' : 'السعر عند الطلب'}</p>`
);

content = content.replace(
  /function priceForCategory[^{]*\{[\s\S]*?(?=^\})/m,
  'function priceForCategory(categoryAr, subcategoryAr, seedStr) {\n    return 0;\n'
);

content = content.replace(
  /const ordered = Array\.from\(categories\.entries\(\)\)\.sort\(\(a, b\) => a\[1\]\.localeCompare\(b\[1\], 'ar'\)\);/g,
  `const targetOrder = [
        "ملابس / نساء",
        "شنط",
        "ملابس / اطفال",
        "مفروشات",
        "ميداليلات",
        "ملابس / ايس كاب",
        "ملابس / سكارفات",
        "ملابس / جلافز"
    ];
    const ordered = Array.from(categories.entries()).sort((a, b) => {
        const idxA = targetOrder.indexOf(a[1]);
        const idxB = targetOrder.indexOf(b[1]);
        const posA = idxA === -1 ? 999 : idxA;
        const posB = idxB === -1 ? 999 : idxB;
        return posA - posB;
    });`
);

fs.writeFileSync('d:/Doda Croshet/js/app.js', content, 'utf8');
console.log('Update complete.');
