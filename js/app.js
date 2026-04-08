// ============================================================
// DATA — كل المسارات مع الصور الجديدة + دمج اطفال1 و اطفال11
// ============================================================

// المنتجات اللي عندها أكتر من صورة (نفس المنتج بأكتر من صورة)
// اطفال1.jpeg + اطفال11.jpeg → منتج واحد بـ slider
const MULTI_IMAGE_GROUPS = [
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
    // شنط
    "Photos/شنط/657923646_4446274342273277_2894811840307528743_n.jpg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.02.43 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.00 PM (1).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.00 PM (2).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.00 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (1).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (2).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (3).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (4).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (5).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (6).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (7).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM (8).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.03 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM (1).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM (2).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM (3).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM (4).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM (5).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM (6).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.04 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.05 PM (1).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.05 PM (2).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.05 PM (3).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.05 PM (4).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.05 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.06 PM (1).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.06 PM (2).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.06 PM (3).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.06 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.07 PM (1).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.07 PM (2).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.07 PM (3).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.07 PM (4).jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.07 PM.jpeg",
    "Photos/شنط/WhatsApp Image 2026-04-05 at 8.03.08 PM.jpeg",
    // مفروشات
    "Photos/مفروشات/607145879_4272278619755313_657723788804382897_n.jpg",
    "Photos/مفروشات/608185653_4272278576421984_2803294720450556526_n.jpg",
    "Photos/مفروشات/611597014_4369262803307765_8525826294154310769_n.jpg",
    "Photos/مفروشات/612571463_4369262663307779_6712935724751507555_n.jpg",
    "Photos/مفروشات/613047590_4369264059974306_8303630648955258244_n.jpg",
    "Photos/مفروشات/613067243_4369262623307783_7529371532338632460_n.jpg",
    "Photos/مفروشات/613124003_4369285133305532_3308533973188708142_n.jpg",
    "Photos/مفروشات/624250907_4390816521152393_4670101314192745522_n.jpg",
    // ملابس/اطفال (الصور المفردة — بدون اطفال1 واطفال11)
    "Photos/ملابس/اطفال/597236040_4342411575992888_6613532168573745855_n.jpg",
    "Photos/ملابس/اطفال/597813873_4342411689326210_4547782334594546128_n.jpg",
    "Photos/ملابس/اطفال/598550497_4342411735992872_492026655751231690_n.jpg",
    "Photos/ملابس/اطفال/598552588_4342411979326181_5877538828963694644_n.jpg",
    "Photos/ملابس/اطفال/598557229_4342411942659518_7179024994719382332_n.jpg",
    "Photos/ملابس/اطفال/639992144_4415594278674617_5430451025136341347_n.jpg",
    "Photos/ملابس/اطفال/645039855_4422383011329077_1859189747735063248_n.jpg",
    "Photos/ملابس/اطفال/645279738_4422386147995430_4832794282129247732_n.jpg",
    "Photos/ملابس/اطفال/645429254_4422385824662129_1533925771125368483_n.jpg",
    "Photos/ملابس/اطفال/645453354_4422385734662138_8730044688151601488_n.jpg",
    "Photos/ملابس/اطفال/646367707_4422385887995456_788750832623234303_n.jpg",
    "Photos/ملابس/اطفال/646441779_4422383117995733_1372995802596519648_n.jpg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.02.09 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.02.15 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.02.21 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.02.23 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.02.26 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.02.36 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.03.32 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.03.53 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.03.56 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.04 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.41 PM (1).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.41 PM (2).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.41 PM (3).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.41 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.42 PM (1).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.42 PM (2).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.42 PM (3).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.42 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.43 PM (1).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.43 PM (4).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.43 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.44 PM (1).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.44 PM (2).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.44 PM (3).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.44 PM (4).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.44 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.48 PM (1).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.48 PM (2).jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.04.48 PM.jpeg",
    "Photos/ملابس/اطفال/WhatsApp Image 2026-04-07 at 10.05.43 PM.jpeg",
    // ملابس/ايس كاب (جديدة + قديمة)
    "Photos/ملابس/ايس كاب/603850251_4264402607209581_2387541462213500301_n.jpg",
    "Photos/ملابس/ايس كاب/WhatsApp Image 2026-04-07 at 10.04.42 PM (4).jpeg",
    "Photos/ملابس/ايس كاب/WhatsApp Image 2026-04-07 at 10.04.43 PM (2).jpeg",
    "Photos/ملابس/ايس كاب/WhatsApp Image 2026-04-07 at 10.04.43 PM (5).jpeg",
    // ملابس/جلافز
    "Photos/ملابس/جلافز/594962283_4247385708911271_112147413282998044_n.jpg",
    "Photos/ملابس/جلافز/594963592_4247385722244603_2715356041595500212_n.jpg",
    "Photos/ملابس/جلافز/595014424_4247385608911281_2968926337948698212_n.jpg",
    "Photos/ملابس/جلافز/595275710_4247385705577938_7210122358742761741_n.jpg",
    "Photos/ملابس/جلافز/595443548_4247385648911277_4888582169971593451_n.jpg",
    "Photos/ملابس/جلافز/595814514_4247385628911279_7050966825584441893_n.jpg",
    "Photos/ملابس/جلافز/608217935_4363736693860376_1453360730923070993_n.jpg",
    "Photos/ملابس/جلافز/608867738_4363736637193715_3936782478749778277_n.jpg",
    // ملابس/سكارفات
    "Photos/ملابس/سكارفات/600420596_4264401423876366_8344115729506206592_n.jpg",
    "Photos/ملابس/سكارفات/603844045_4264401337209708_1113388525797322341_n.jpg",
    "Photos/ملابس/سكارفات/603883111_4264402653876243_6983799708591966902_n.jpg",
    "Photos/ملابس/سكارفات/605293225_4264402650542910_4512008778514734584_n.jpg",
    "Photos/ملابس/سكارفات/607948466_4363736803860365_7433566649590257390_n.jpg",
    "Photos/ملابس/سكارفات/608908368_4363736763860369_1437029328683578588_n.jpg",
    // ملابس/نساء (قديمة + جديدة)
    "Photos/ملابس/نساء/609147546_4363736927193686_134097657268709679_n.jpg",
    "Photos/ملابس/نساء/627984157_4394673327433379_1019734270232463827_n.jpg",
    "Photos/ملابس/نساء/642872187_4415590715341640_5099423793103380996_n.jpg",
    "Photos/ملابس/نساء/645923366_4422397094661002_8345093310533351968_n.jpg",
    "Photos/ملابس/نساء/646340083_4422397031327675_6692166827814110205_n.jpg",
    "Photos/ملابس/نساء/656846187_4446578978909480_3561492387892370082_n.jpg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.03.25 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.06 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.10 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.16 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.40 PM (1).jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.40 PM (5).jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.40 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.04.43 PM (3).jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.06.03 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.06.04 PM.jpeg",
    "Photos/ملابس/نساء/WhatsApp Image 2026-04-07 at 10.06.05 PM (1).jpeg",
    // ميداليلات
    "Photos/ميداليلات/652356270_4438173689750009_1385258586360355651_n.jpg",
    "Photos/ميداليلات/652506758_4438173646416680_6373690896076637194_n.jpg",
    "Photos/ميداليلات/652557811_4438173489750029_1770083689310507587_n.jpg",
    "Photos/ميداليلات/653207027_4438173259750052_8877029077248299643_n.jpg",
    "Photos/ميداليلات/653398075_4438173453083366_9142753815196616935_n.jpg",
    "Photos/ميداليلات/653711390_4438173726416672_6028037831131307525_n.jpg",
    "Photos/ميداليلات/653758100_4438173129750065_2487507858521464778_n.jpg",
    "Photos/ميداليلات/653788519_4438173536416691_5633716620294379073_n.jpg",
    "Photos/ميداليلات/653931324_4438173383083373_6168346555039859274_n.jpg",
    "Photos/ميداليلات/654263345_4438173346416710_2711433435098752808_n.jpg",
    "Photos/ميداليلات/654422197_4438173303083381_4223857001442634723_n.jpg",
    "Photos/ميداليلات/654730564_4438173576416687_3637063504088445396_n.jpg",
    "Photos/ميداليلات/654816428_4438173819749996_1631622333812606649_n.jpg",
    "Photos/ميداليلات/654822211_4438173613083350_826444075144846873_n.jpg",
    "Photos/ميداليلات/654998256_4438173759750002_2456779306107906606_n.jpg",
];

const ADDED_PHOTOS = [
    // شنط
    "Photos/شنط/490194052_4103109283256453_8436217218216002380_n.jpg",
    "Photos/شنط/490564003_4103109519923096_4101607805860058467_n.jpg",
    "Photos/شنط/491932330_4103109506589764_6138234791561068053_n.jpg",
    // مفروشات
    "Photos/مفروشات/WhatsApp Image 2026-04-07 at 10.04.47 PM (1).jpeg",
    "Photos/مفروشات/WhatsApp Image 2026-04-07 at 10.04.47 PM.jpeg",
    // ملابس اطفال
    "Photos/ملابس/اطفال/475417196_4033906246843424_7084565089896524884_n.jpg",
    "Photos/ملابس/اطفال/475814015_4033906000176782_2257835537475386288_n.jpg",
    "Photos/ملابس/اطفال/475997521_4033906220176760_44238683594391960_n.jpg",
    "Photos/ملابس/اطفال/476117707_4034720136762035_9116981824281589739_n.jpg",
    "Photos/ملابس/اطفال/489919890_4096469457253769_6848274167114165117_n.jpg",
    // ايس كاب
    "Photos/ملابس/ايس كاب/475652633_4033905896843459_8469931355251970769_n.jpg",
    "Photos/ملابس/ايس كاب/475815997_4033905880176794_3245505888028580850_n.jpg",
    "Photos/ملابس/ايس كاب/475979580_4033905970176785_4852438076750019026_n.jpg",
    // جلافز
    "Photos/ملابس/جلافز/475748932_4033905850176797_2610332611713718560_n.jpg",
    // سكارفات
    "Photos/ملابس/سكارفات/475642032_4033906173510098_74989429944532232_n.jpg",
    "Photos/ملابس/سكارفات/475760650_4037033319864050_8952288444289216331_n.jpg",
    "Photos/ملابس/سكارفات/475764757_4037033506530698_6160770485531502567_n.jpg",
    "Photos/ملابس/سكارفات/475767458_4033906273510088_5577099026230334415_n.jpg",
    "Photos/ملابس/سكارفات/475987556_4037033469864035_4328593615130342742_n.jpg",
    "Photos/ملابس/سكارفات/476147349_4037033373197378_7615967117580155181_n.jpg",
    "Photos/ملابس/سكارفات/480249487_4044896139077768_1156351419709322229_n.jpg",
    // نساء
    "Photos/ملابس/نساء/475364173_4033906123510103_3985682373706261663_n.jpg",
    "Photos/ملابس/نساء/475542203_4033906226843426_1177008894799840488_n.jpg",
    "Photos/ملابس/نساء/475588998_4033905843510131_6790148409352308616_n.jpg",
    "Photos/ملابس/نساء/475832005_4034235373477178_7056074391097421462_n.jpg",
    "Photos/ملابس/نساء/481253569_4050810265153022_6334236993345367307_n.jpg"
];

// Merge all existing + added photos, avoiding duplicates
ADDED_PHOTOS.forEach(p => {
    if (!PHOTO_PATHS.includes(p)) PHOTO_PATHS.push(p);
});

// ============================================================
// CUSTOM PRICES
// ============================================================
// حط كود المنتج وسعره هنا، والموقع هياخده بدال السعر العشوائي أو الثابت
const CUSTOM_PRICES = {
    "BG-002": 600,
    "BG-001": 700,
    "BG-007": 650,
    "BG-008": 700,
    "BG-009": 600,
    "BG-010": 750,
    "BG-011": 600,
    "BG-012": 600,
    "BG-013": 350,
    "BG-014": 600,
    "BG-015": 600,
    "BG-016": 600,
    "BG-017": 600,
    "BG-019": 350,
    "BG-020": 700,
    "BG-021": 350,
    "BG-022": 600,
    "BG-024": 650,
    "BG-025": 650,
    "BG-026": 700,
    "BG-027": 600,
    "BG-029": 700,
    "BG-030": 600,
    "BG-031": 650,
    "BG-032": 600,
    "BG-033": 350,
    "BG-034": 600,
    "BG-035": 650,
    "BG-036": 700,
    "BG-037": 350,
    "BG-038": 700,
    "BG-039": 650,
    "WM-001": 1000,
    "WM-002": 800,
    "WM-003": 1500,
    "WM-004": 1800,
    "WM-005": 1300,
    "WM-006": 800,
    "WM-007": 800,
    "WM-008": 1200,
    "WM-009": 950,
    "WM-010": 1000,
    "WM-011": 600,
    "WM-012": 900,
    "WM-013": 950,
    "WM-014": 1300,
    "WM-015": 1300,
    "WM-016": 1300,
    "WM-017": 1300,
    "WM-018": 900,
    "WM-019": 950,
    "WM-020": 600,
    "WM-021": 1300,
    "WM-022": 1300,
    "KY-001": 80,
    "KY-002": 100,
    "KY-003": 80,
    "KY-004": 100,
    "KY-005": 110,
    "KY-006": 90,
    "KY-007": 100,
    "KY-008": 100,
    "KY-009": 80,
    "KY-010": 120,
    "KY-011": 120,
    "KY-012": 110,
    "KY-013": 110,
    "KY-014": 90,
    "KY-015": 100,
    "KY-016": 120,
    "KY-017": 120,
    "WC-001": 120,
    "WC-002": 120,
    "WC-003": 120,
    "WC-004": 120,
    "WC-005": 120,
    "WC-006": 250,
    "WC-007": 250,
    "GL-001": 150,
    "GL-002": 150,
    "GL-003": 150,
    "GL-004": 150,
    "GL-005": 150,
    "GL-006": 150,
    "GL-007": 150,
};

// ============================================================
// HELPERS
// ============================================================
function translateCategoryTokenArToEn(token) {
    const map = new Map([
        ['شنط', 'Bags'],
        ['مفروشات', 'Home Decor'],
        ['ملابس', 'Clothing'],
        ['اطفال', 'Kids'],
        ['نساء', 'Women'],
        ['ايس كاب', 'Winter Caps'],
        ['جلافز', 'Gloves'],
        ['سكارفات', 'Scarves'],
        ['ميداليلات', 'Keychains'],
        ['منتجات', 'Products'],
    ]);
    return map.get(token) || token;
}

function translateCategoryLabel(arLabel, lang) {
    if (lang !== 'en') return arLabel;
    return arLabel.split(' / ').map(translateCategoryTokenArToEn).join(' / ');
}

function hashString(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) + h) ^ str.charCodeAt(i);
    }
    return (h >>> 0).toString(16);
}

function categoryKeyFromAr(categoryAr, subcategoryAr) {
    const raw = (subcategoryAr ? `${categoryAr}-${subcategoryAr}` : categoryAr).trim();
    return `cat_${hashString(raw)}`;
}

function priceForCategory(categoryAr, subcategoryAr, seedStr) {
    const seed = parseInt(hashString(seedStr), 16) >>> 0;
    const rand01 = (seed % 10000) / 10000;
    const between = (min, max) => Math.round(min + (max - min) * rand01);

    // فقط الشنط اللي هيتحددلها سعر تلقائي
    if (categoryAr === 'شنط') return between(400, 700);

    // باقي الأقسام هترجع 0 (بمعنى يحدد عند الطلب)
    return 0;
}

// ============================================================
// BUILD PRODUCTS
// ============================================================
function buildProductsFromPhotos() {
    const items = PHOTO_PATHS.map(p => {
        const parts = p.split('/');
        const photosIdx = parts.findIndex(x => x.toLowerCase() === 'photos');
        const rel = photosIdx >= 0 ? parts.slice(photosIdx) : parts;
        const categoryAr = rel[1] || 'منتجات';
        const subcategoryAr = rel.length >= 4 ? rel[2] : '';
        const filename = rel[rel.length - 1] || '';
        const categoryPathAr = subcategoryAr ? `${categoryAr} / ${subcategoryAr}` : categoryAr;
        return { path: p, categoryAr, subcategoryAr, categoryPathAr, filename, images: null };
    });

    // Add multi-image products
    MULTI_IMAGE_GROUPS.forEach(g => {
        const categoryPathAr = g.subfolderAr
            ? `${g.folderAr} / ${g.subfolderAr}`
            : g.folderAr;
        items.push({
            path: g.images[0],
            categoryAr: g.folderAr,
            subcategoryAr: g.subfolderAr,
            categoryPathAr,
            filename: g.images[0].split('/').pop(),
            images: g.images   // ← multiple images flag
        });
    });

    const PREFIX_MAP = {
        'شنط': 'BG',
        'ملابس / نساء': 'WM',
        'ملابس / اطفال': 'KD',
        'مفروشات': 'HM',
        'ملابس / ايس كاب': 'WC',
        'ملابس / سكارفات': 'SC',
        'ملابس / جلافز': 'GL',
        'ميداليلات': 'KY'
    };

    const perCategoryCounters = new Map();

    const built = items.map(x => {
        const current = (perCategoryCounters.get(x.categoryPathAr) || 0) + 1;
        perCategoryCounters.set(x.categoryPathAr, current);

        const prefix = PREFIX_MAP[x.categoryPathAr] || 'DC';
        const id = `${prefix}-${String(current).padStart(3, '0')}`;

        let price = priceForCategory(x.categoryAr, x.subcategoryAr, `${x.categoryPathAr}/${x.filename}`);
        if (CUSTOM_PRICES[id] !== undefined) {
            price = CUSTOM_PRICES[id];
        }

        return {
            id,
            categoryKey: categoryKeyFromAr(x.categoryAr, x.subcategoryAr),
            categoryLabelAr: x.categoryPathAr,
            price,
            image: x.path,
            images: x.images || null,
        };
    });

    const toRemove = ["BG-003", "BG-004", "BG-005", "BG-006", "BG-018", "BG-023", "BG-028", "BG-037"];
    return built.filter(p => !toRemove.includes(p.id));
}

const productsData = buildProductsFromPhotos();

// ============================================================
// STATE
// ============================================================
let cart = [];
let activeCategory = 'all';
const PRODUCTS_PER_PAGE = 9;
let currentPage = 1;

// ============================================================
// DOM REFS
// ============================================================
const productsGrid = document.getElementById('products-grid');
const categoryFilters = document.getElementById('category-filters');
const dashboardEl = document.getElementById('dashboard');
const productSearch = document.getElementById('product-search');
const catPrev = document.getElementById('cat-prev');
const catNext = document.getElementById('cat-next');
const openCartBtn = document.getElementById('open-cart-btn');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-panel');
const cartOverlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const checkoutBtn = document.getElementById('checkout-btn');
const toast = document.getElementById('toast');
const navbar = document.getElementById('navbar');
const imgModal = document.getElementById('img-modal');
const imgModalOverlay = document.getElementById('img-modal-overlay');
const imgModalClose = document.getElementById('img-modal-close');
const imgModalImg = document.getElementById('img-modal-img');
const langToggle = document.getElementById('lang-toggle');
const langPill = document.getElementById('lang-pill');
const langToggleTop = document.getElementById('lang-toggle-top');
const langPillTop = document.getElementById('lang-pill-top');
const whatsappContact = document.getElementById('whatsapp-contact');

// Feedbacks UI elements
const openFeedbacksBtn = document.getElementById('open-feedbacks-btn');
const closeFeedbacksBtn = document.getElementById('close-feedbacks');
const feedbacksPanel = document.getElementById('feedbacks-panel');
const feedbacksOverlay = document.getElementById('feedbacks-overlay');

// ============================================================
// I18N
// ============================================================
const I18N = {
    ar: {
        "nav.home": "الرئيسية",
        "nav.shop": "المتجر",
        "nav.about": "عن براند Doda",
        "nav.custom": "طلبات خاصة",
        "nav.reviews": "آراء العملاء",
        "nav.contact": "تواصل",
        "search.placeholder": "ابحثي بالكود أو القسم...",
        "sections.categories": "الأقسام",
        "sections.products": "المنتجات",
        "hero.badge.handmade": "Handmade with Love",
        "hero.badge.exp": "خبرة +7 سنوات",
        "hero.title": "قطع كروشيه هاند ميد بتفاصيل مصنوعة بحب",
        "hero.desc": "نقدّم منتجات كروشيه هاند ميد بجودة عالية وتشطيب دقيق، بخبرة تمتد لأكثر من 7 سنوات في تنفيذ قطع مميزة تضيف لمسة خاصة لكل مناسبة ولكل ذوق.",
        "hero.cta.shop": "تسوق الآن",
        "hero.cta.custom": "اطلب تصميمك الخاص",
        "trust.handmade": "هاند ميد بالكامل",
        "trust.exp": "خبرة +7 سنوات",
        "trust.custom": "إمكانية تنفيذ طلبات خاصة",
        "trust.finish": "تشطيب دقيق وجودة عالية",
        "custom.title": "اطلب تصميمك الخاص",
        "custom.desc": "إذا كان لديك فكرة خاصة، لون معين، أو هدية مميزة في بالك، يمكننا تنفيذ قطعة كروشيه مخصصة تناسب ذوقك أو مناسبتك.",
        "custom.cta": "اطلب الآن",
        "reviews.title": "آراء عملائنا",
        "reviews.r1": "\"الشغل طلع أجمل بكتير من الصور، والتقفيل ممتاز جدًا.\"",
        "reviews.r2": "\"أول مرة أطلب حاجة هاند ميد بالجودة دي فعلًا.\"",
        "reviews.r3": "\"التفاصيل كانت دقيقة جدًا، والمنتج طلع شيك جدًا كهدية.\"",
        "community.title": "كونوا جزءًا من مجتمعنا",
        "community.desc": "تابعوا أحدث المنتجات والطلبات الجديدة وآراء العملاء من خلال صفحاتنا ومجتمعنا على السوشيال ميديا.",
        "community.fb": "تابعنا على فيسبوك",
        "community.group": "انضم إلى الجروب",
        "community.wa": "راسلنا على واتساب",
        "faq.title": "أسئلة شائعة",
        "faq.q1": "هل يمكن تنفيذ طلب خاص؟",
        "faq.a1": "نعم، يمكن تنفيذ بعض الطلبات المخصصة حسب الفكرة والتفاصيل المطلوبة.",
        "faq.q2": "كم تستغرق مدة التنفيذ؟",
        "faq.a2": "تختلف مدة التنفيذ حسب نوع المنتج وحجم الطلب.",
        "faq.q3": "هل يمكن تغيير الألوان؟",
        "faq.a3": "نعم، يمكن اختيار ألوان مختلفة في كثير من المنتجات.",
        "faq.q4": "هل يوجد شحن؟",
        "faq.a4": "نعم، نوفر الشحن حسب المنطقة وسيتم توضيح التفاصيل أثناء الطلب.",
        "cart.title": "سلة التسوق",
        "cart.total": "الإجمالي:",
        "cart.checkout": "إتمام الطلب عبر الواتساب",
        "footer.experience": "عندنا خبرة فوق الـ 7 سنين في مجال الهاند ميد بالكروشيه.",
        "footer.group": "لينك جروب الفيسبوك",
        "footer.page": "لينك صفحة الفيسبوك",
    },
    en: {
        "nav.home": "Home",
        "nav.shop": "Shop",
        "nav.about": "About Doda",
        "nav.custom": "Custom Orders",
        "nav.reviews": "Reviews",
        "nav.contact": "Contact",
        "search.placeholder": "Search by code or category...",
        "sections.categories": "Categories",
        "sections.products": "Products",
        "hero.badge.handmade": "Handmade with Love",
        "hero.badge.exp": "7+ Years Experience",
        "hero.title": "Handmade Crochet Pieces Crafted with Love",
        "hero.desc": "We create high-quality handmade crochet pieces with refined finishing and over 7 years of experience, bringing unique designs to life with care and attention to every detail.",
        "hero.cta.shop": "Shop Now",
        "hero.cta.custom": "Custom Order",
        "trust.handmade": "100% Handmade",
        "trust.exp": "7+ Years of Experience",
        "trust.custom": "Custom Orders Available",
        "trust.finish": "Premium Finishing",
        "custom.title": "Request Your Custom Piece",
        "custom.desc": "Have a special idea, preferred color, or a unique gift in mind? We can create a custom handmade crochet piece tailored just for you.",
        "custom.cta": "Request Now",
        "reviews.title": "What Our Customers Say",
        "reviews.r1": "\"The piece looked even better in real life, and the finishing was beautiful.\"",
        "reviews.r2": "\"One of the best handmade crochet products I've ever ordered.\"",
        "reviews.r3": "\"The details were stunning, and it made a perfect gift.\"",
        "community.title": "Join Our Community",
        "community.desc": "Stay connected with our latest products, custom orders, and customer favorites through our social channels.",
        "community.fb": "Follow on Facebook",
        "community.group": "Join Our Group",
        "community.wa": "Chat on WhatsApp",
        "faq.title": "FAQ",
        "faq.q1": "Can I request a custom order?",
        "faq.a1": "Yes, we can create selected custom pieces based on your request.",
        "faq.q2": "How long does production take?",
        "faq.a2": "Production time depends on the type and size of the order.",
        "faq.q3": "Can I choose different colors?",
        "faq.a3": "Yes, many products can be customized in your preferred colors.",
        "faq.q4": "Do you offer shipping?",
        "faq.a4": "Yes, shipping is available depending on your location.",
        "cart.title": "Cart",
        "cart.total": "Total:",
        "cart.checkout": "Checkout via WhatsApp",
        "footer.experience": "We have 7+ years of experience in handmade crochet.",
        "footer.group": "Facebook group link",
        "footer.page": "Facebook page link",
    }
};

function initLanguage() {
    const saved = localStorage.getItem('doda_lang') || 'ar';
    applyLanguage(saved === 'en' ? 'en' : 'ar');
}

function applyLanguage(lang) {
    const dict = I18N[lang] || I18N.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
    if (langPill) langPill.textContent = lang === 'en' ? 'AR' : 'EN';
    if (langPillTop) langPillTop.textContent = lang === 'en' ? 'AR' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key && dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    localStorage.setItem('doda_lang', lang);
}

function getCategoryLabel(product) {
    return translateCategoryLabel(product.categoryLabelAr, document.documentElement.lang);
}

// ============================================================
// CATEGORY FILTERS
// ============================================================
const CATEGORY_ORDER = [
    "شنط",
    "ملابس / نساء",
    "ملابس / اطفال",
    "مفروشات",
    "ميداليلات",
    "ملابس / ايس كاب",
    "ملابس / سكارفات",
    "ملابس / جلافز"
];

function getSortedAllProducts() {
    return [...productsData].sort((a, b) => {
        const idxA = CATEGORY_ORDER.indexOf(a.categoryLabelAr);
        const idxB = CATEGORY_ORDER.indexOf(b.categoryLabelAr);
        const posA = idxA === -1 ? 999 : idxA;
        const posB = idxB === -1 ? 999 : idxB;
        return posA - posB;
    });
}

function renderCategoryFilters() {
    const filters = document.getElementById('category-filters');
    if (!filters) return;

    const categories = new Map();
    productsData.forEach(p => categories.set(p.categoryKey, p.categoryLabelAr));
    const ordered = Array.from(categories.entries()).sort((a, b) => {
        const idxA = CATEGORY_ORDER.indexOf(a[1]);
        const idxB = CATEGORY_ORDER.indexOf(b[1]);
        const posA = idxA === -1 ? 999 : idxA;
        const posB = idxB === -1 ? 999 : idxB;
        return posA - posB;
    });

    const reprImg = new Map();
    productsData.forEach(p => {
        if (!reprImg.has(p.categoryKey)) reprImg.set(p.categoryKey, p.image);
    });

    const lang = document.documentElement.lang;

    const allChipActive = activeCategory === 'all' ? 'active' : '';
    const allLabel = lang === 'en' ? 'All' : 'الكل';
    const allChipHtml = `
        <button class="cat-chip ${allChipActive}" data-filter="all" type="button">
            <span class="cat-avatar">
                <i class="fa-solid fa-shapes" style="font-size: 1.6rem; color: var(--primary-color);"></i>
            </span>
            <span class="cat-name">${allLabel}</span>
        </button>
    `;

    filters.innerHTML = allChipHtml + ordered.map(([key, label]) => {
        const img = reprImg.get(key);
        const labelShown = translateCategoryLabel(label, lang);
        const isActive = activeCategory === key ? 'active' : '';
        return `
            <button class="cat-chip ${isActive}" data-filter="${key}" type="button">
                <span class="cat-avatar">
                    <img src="${encodeURI(img)}" alt="${labelShown}" onerror="this.remove()">
                </span>
                <span class="cat-name">${labelShown}</span>
            </button>
        `;
    }).join('');
}

// ============================================================
// PRODUCT CARD RENDER (with slider support + no color picker)
// ============================================================
function renderProducts(products, page) {
    if (!productsGrid) return;
    if (page !== undefined) currentPage = page;

    const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
    if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const pageProducts = products.slice(start, start + PRODUCTS_PER_PAGE);

    productsGrid.innerHTML = '';

    pageProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const cat = getCategoryLabel(product);
        const hasSlider = product.images && product.images.length > 1;
        const lang = document.documentElement.lang;

        const imgSection = hasSlider
            ? renderSliderHtml(product)
            : `<div class="product-img-wrapper">
                    <img
                        src="${encodeURI(product.image)}"
                        alt="${product.id}"
                        class="product-img"
                        data-zoom-src="${encodeURI(product.image)}"
                        data-zoom-alt="${cat} | ${product.id}"
                        onerror="this.src='Photos/Hero/Cover.png'"
                    >
               </div>`;

        card.innerHTML = `
            ${imgSection}
            <div class="product-info">
                <p class="product-category">${cat} | Code: ${product.id}</p>
                <p class="product-price">${product.price ? product.price + (lang === 'en' ? ' EGP' : ' ج.م') : (lang === 'en' ? 'Price on request' : 'يحدد عند الطلب')}</p>
                <p class="product-colors-badge">
                    <i class="fa-solid fa-palette"></i>
                    ${lang === 'en' ? 'All colors available' : 'متاح بكل الألوان'}
                </p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                    Add to Cart <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    renderPagination(products, totalPages);
}

function renderSliderHtml(product) {
    const sliderId = `slider-${product.id}`;
    const imgs = product.images.map((src, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}" data-index="${i}">
            <img src="${encodeURI(src)}" alt="${product.id} - ${i + 1}"
                class="product-img"
                data-zoom-src="${encodeURI(src)}"
                data-zoom-alt="${product.id}"
                onerror="this.src='Photos/Hero/Cover.png'">
        </div>
    `).join('');

    const dots = product.images.map((_, i) => `
        <span class="slider-dot ${i === 0 ? 'active' : ''}" onclick="sliderGoTo('${sliderId}',${i})"></span>
    `).join('');

    return `
        <div class="product-img-wrapper product-slider" id="${sliderId}">
            <div class="slides-track">${imgs}</div>
            <button class="slider-btn slider-prev" onclick="sliderPrev('${sliderId}')" type="button">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="slider-btn slider-next" onclick="sliderNext('${sliderId}')" type="button">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="slider-dots">${dots}</div>
        </div>
    `;
}

// ============================================================
// SLIDER CONTROLS
// ============================================================
window.sliderGoTo = function (sliderId, idx) {
    const wrapper = document.getElementById(sliderId);
    if (!wrapper) return;
    const slides = wrapper.querySelectorAll('.slide');
    const dots = wrapper.querySelectorAll('.slider-dot');
    slides.forEach((s, i) => s.classList.toggle('active', i === idx));
    dots.forEach((d, i) => d.classList.toggle('active', i === idx));
};

window.sliderPrev = function (sliderId) {
    const wrapper = document.getElementById(sliderId);
    if (!wrapper) return;
    const slides = Array.from(wrapper.querySelectorAll('.slide'));
    const cur = slides.findIndex(s => s.classList.contains('active'));
    sliderGoTo(sliderId, (cur - 1 + slides.length) % slides.length);
};

window.sliderNext = function (sliderId) {
    const wrapper = document.getElementById(sliderId);
    if (!wrapper) return;
    const slides = Array.from(wrapper.querySelectorAll('.slide'));
    const cur = slides.findIndex(s => s.classList.contains('active'));
    sliderGoTo(sliderId, (cur + 1) % slides.length);
};

// ============================================================
// PAGINATION
// ============================================================
function renderPagination(products, totalPages) {
    let paginationEl = document.getElementById('products-pagination');
    if (!paginationEl) {
        paginationEl = document.createElement('div');
        paginationEl.id = 'products-pagination';
        paginationEl.className = 'pagination-container';
        productsGrid.parentNode.insertBefore(paginationEl, productsGrid.nextSibling);
    }

    if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }

    let html = `<div class="pagination">`;
    html += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fa-solid fa-chevron-left"></i></button>`;
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }
    html += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fa-solid fa-chevron-right"></i></button>`;
    html += `</div>`;
    paginationEl.innerHTML = html;
}

window.changePage = function (page) {
    const q = (productSearch?.value || '').trim().toLowerCase();
    const base = activeCategory === 'all'
        ? getSortedAllProducts()
        : productsData.filter(p => p.categoryKey === activeCategory);
    const filtered = q
        ? base.filter(p => (`${p.id} ${p.categoryLabelAr}`).toLowerCase().includes(q))
        : base;
    renderProducts(filtered, page);
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// ============================================================
// FILTER
// ============================================================
function filterProducts(category) {
    activeCategory = category;
    currentPage = 1;
    if (productsGrid) productsGrid.style.opacity = 0;
    setTimeout(() => {
        const q = (productSearch?.value || '').trim().toLowerCase();
        const base = category === 'all'
            ? getSortedAllProducts()
            : productsData.filter(p => p.categoryKey === category);
        const filtered = q
            ? base.filter(p => (`${p.id} ${p.categoryLabelAr}`).toLowerCase().includes(q))
            : base;
        renderProducts(filtered, 1);
        if (productsGrid) {
            productsGrid.style.opacity = 1;
            productsGrid.style.transition = 'opacity 0.4s ease';
        }
    }, 200);
}

// ============================================================
// INIT
// ============================================================
function init() {
    initLanguage();
    activeCategory = 'all';
    renderCategoryFilters();
    const base = activeCategory === 'all'
        ? getSortedAllProducts()
        : productsData.filter(p => p.categoryKey === activeCategory);
    renderProducts(base, 1);
    setupEventListeners();
    loadCart();

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
    categoryFilters.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;
        document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProducts(btn.getAttribute('data-filter'));
    });

    if (productSearch) {
        productSearch.addEventListener('input', () => filterProducts(activeCategory));
    }

    if (catPrev) catPrev.addEventListener('click', () => categoryFilters.scrollBy({ left: 280, behavior: 'smooth' }));
    if (catNext) catNext.addEventListener('click', () => categoryFilters.scrollBy({ left: -280, behavior: 'smooth' }));

    // Image zoom on single-image cards
    if (productsGrid) {
        productsGrid.addEventListener('click', (e) => {
            const img = e.target.closest('img[data-zoom-src]');
            if (!img) return;
            openImageModal(img.getAttribute('data-zoom-src'), img.getAttribute('data-zoom-alt') || '');
        });
    }

    if (imgModalOverlay) imgModalOverlay.addEventListener('click', closeImageModal);
    if (imgModalClose) imgModalClose.addEventListener('click', closeImageModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeImageModal(); });

    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (openCartBtn) openCartBtn.addEventListener('click', toggleCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', toggleCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', handleCheckout);

    const toggleLang = () => {
        const current = (localStorage.getItem('doda_lang') || 'ar');
        applyLanguage(current === 'en' ? 'ar' : 'en');
        renderCategoryFilters();
        filterProducts(activeCategory);
    };
    if (langToggle) langToggle.addEventListener('click', toggleLang);
    if (langToggleTop) langToggleTop.addEventListener('click', toggleLang);

    if (whatsappContact) {
        whatsappContact.addEventListener('click', () => {
            const phoneNumber = "201025329855";
            const msg = document.documentElement.lang === 'en'
                ? "Hi Doda Croshet, I want to ask about a custom order."
                : "مرحباً Doda Croshet، عايزة أسأل عن طلب تصميم خاص.";
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }

    // Feedbacks Events
    if (openFeedbacksBtn) openFeedbacksBtn.addEventListener('click', toggleFeedbacks);
    if (closeFeedbacksBtn) closeFeedbacksBtn.addEventListener('click', toggleFeedbacks);
    if (feedbacksOverlay) feedbacksOverlay.addEventListener('click', toggleFeedbacks);
}

function toggleFeedbacks() {
    if (!feedbacksPanel || !feedbacksOverlay) return;
    feedbacksPanel.classList.toggle('active');
    feedbacksOverlay.classList.toggle('active');
    document.body.style.overflow = feedbacksPanel.classList.contains('active') ? 'hidden' : '';
}

// ============================================================
// IMAGE MODAL
// ============================================================
function openImageModal(src, alt) {
    if (!imgModal || !imgModalImg) return;
    imgModalImg.src = src || '';
    imgModalImg.alt = alt || '';
    imgModal.classList.add('active');
    imgModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    if (!imgModal || !imgModalImg) return;
    imgModal.classList.remove('active');
    imgModal.setAttribute('aria-hidden', 'true');
    imgModalImg.src = '';
    document.body.style.overflow = '';
}

// ============================================================
// CART
// ============================================================
function toggleCart() {
    const isOpen = cartSidebar.classList.contains('active');
    if (isOpen) {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    } else {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.addToCart = function (productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartUI();
    showToast();
};

window.removeFromCart = function (productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
};

function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (cartCount) {
        cartCount.innerText = totalItems;
        cartCount.style.transform = 'scale(1.3)';
        setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
    }

    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; color: #EAD7D1; margin-bottom: 15px;"></i>
                <p style="color:var(--text-muted); font-size:1.1rem;">Your cart is empty.</p>
                <button class="btn btn-primary" style="margin-top:20px; width:100%" onclick="toggleCart()">Browse Products</button>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            const cat = translateCategoryLabel(item.categoryLabelAr, document.documentElement.lang);
            el.innerHTML = `
                <img src="${encodeURI(item.image)}" alt="${item.id}" class="cart-item-img"
                    onerror="this.src='Photos/Hero/Cover.png'">
                <div class="cart-item-info">
                    <div class="cart-item-sku">${cat} • Code: ${item.id}</div>
                    <p class="cart-item-price">${item.price ? item.price + (document.documentElement.lang === 'en' ? ' EGP' : ' ج.م') : (document.documentElement.lang === 'en' ? 'Price on request' : 'السعر عند الطلب')} × ${item.quantity}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.id}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            `;
            cartItemsContainer.appendChild(el);
        });
    }

    const total = cart.reduce((acc, item) => acc + ((item.price || 0) * item.quantity), 0);
    if (cartTotalPrice) {
        cartTotalPrice.innerText = total > 0 ? total + (document.documentElement.lang === 'en' ? ' EGP' : ' ج.م') : (document.documentElement.lang === 'en' ? 'Price on request' : 'يحدد عند الطلب');
    }
}

function saveCart() { localStorage.setItem('dodaCartStore_v3', JSON.stringify(cart)); }
function loadCart() {
    const saved = localStorage.getItem('dodaCartStore_v3');
    if (saved) { cart = JSON.parse(saved); updateCartUI(); }
}

// ============================================================
// TOAST
// ============================================================
function showToast() {
    toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> Added to cart!';
    toast.classList.add('show');
    if (window.toastTimer) clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// CHECKOUT
// ============================================================
function handleCheckout() {
    if (cart.length === 0) {
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Cart is empty.';
        toast.style.backgroundColor = '#ff4d4d';
        toast.classList.add('show');
        setTimeout(() => { toast.classList.remove('show'); toast.style.backgroundColor = ''; }, 3000);
        return;
    }

    let message = "Hello Doda Croshet 👋\nI'd like to order the following:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        const cat = translateCategoryLabel(item.categoryLabelAr, 'en');
        message += `${index + 1}) Category: ${cat}\n`;
        message += `   Code: ${item.id}\n`;
        message += `   Qty: ${item.quantity}\n`;
        if (item.price) {
            message += `   Price: ${item.price * item.quantity} EGP\n`;
            total += item.price * item.quantity;
        } else {
            message += `   Price: On request\n`;
        }
        message += `------------------------\n`;
    });

    message += total ? `\nTotal: ${total} EGP\n` : `\nTotal: To be confirmed\n`;
    message += "\nPlease let me know the payment and delivery details. Thank you!";

    const phoneNumber = "201025329855";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// ============================================================
// START
// ============================================================
document.addEventListener('DOMContentLoaded', init);
