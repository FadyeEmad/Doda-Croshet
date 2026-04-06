// --- Data ---
// All product images are sourced from the Photos folder structure.
// Categories are derived from folder names: Photos/<category>/<optional subcategory>/<image>
const PHOTO_PATHS = ["Photos\\شنط\\657923646_4446274342273277_2894811840307528743_n.jpg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.02.43 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.00 PM (1).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.00 PM (2).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.00 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (1).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (2).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (3).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (4).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (5).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (6).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (7).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM (8).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.03 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM (1).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM (2).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM (3).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM (4).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM (5).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM (6).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.04 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.05 PM (1).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.05 PM (2).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.05 PM (3).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.05 PM (4).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.05 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.06 PM (1).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.06 PM (2).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.06 PM (3).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.06 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.07 PM (1).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.07 PM (2).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.07 PM (3).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.07 PM (4).jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.07 PM.jpeg","Photos\\شنط\\WhatsApp Image 2026-04-05 at 8.03.08 PM.jpeg","Photos\\مفروشات\\607145879_4272278619755313_657723788804382897_n.jpg","Photos\\مفروشات\\608185653_4272278576421984_2803294720450556526_n.jpg","Photos\\مفروشات\\611597014_4369262803307765_8525826294154310769_n.jpg","Photos\\مفروشات\\612571463_4369262663307779_6712935724751507555_n.jpg","Photos\\مفروشات\\613047590_4369264059974306_8303630648955258244_n.jpg","Photos\\مفروشات\\613067243_4369262623307783_7529371532338632460_n.jpg","Photos\\مفروشات\\613124003_4369285133305532_3308533973188708142_n.jpg","Photos\\مفروشات\\624250907_4390816521152393_4670101314192745522_n.jpg","Photos\\ملابس\\اطفال\\597236040_4342411575992888_6613532168573745855_n.jpg","Photos\\ملابس\\اطفال\\597813873_4342411689326210_4547782334594546128_n.jpg","Photos\\ملابس\\اطفال\\598550497_4342411735992872_492026655751231690_n.jpg","Photos\\ملابس\\اطفال\\598552588_4342411979326181_5877538828963694644_n.jpg","Photos\\ملابس\\اطفال\\598557229_4342411942659518_7179024994719382332_n.jpg","Photos\\ملابس\\اطفال\\639992144_4415594278674617_5430451025136341347_n.jpg","Photos\\ملابس\\اطفال\\645039855_4422383011329077_1859189747735063248_n.jpg","Photos\\ملابس\\اطفال\\645279738_4422386147995430_4832794282129247732_n.jpg","Photos\\ملابس\\اطفال\\645429254_4422385824662129_1533925771125368483_n.jpg","Photos\\ملابس\\اطفال\\645453354_4422385734662138_8730044688151601488_n.jpg","Photos\\ملابس\\اطفال\\646367707_4422385887995456_788750832623234303_n.jpg","Photos\\ملابس\\اطفال\\646441779_4422383117995733_1372995802596519648_n.jpg","Photos\\ملابس\\ايس كاب\\600420596_4264401423876366_8344115729506206592_n.jpg","Photos\\ملابس\\ايس كاب\\603844045_4264401337209708_1113388525797322341_n.jpg","Photos\\ملابس\\ايس كاب\\603850251_4264402607209581_2387541462213500301_n.jpg","Photos\\ملابس\\جلافز\\594962283_4247385708911271_112147413282998044_n.jpg","Photos\\ملابس\\جلافز\\594963592_4247385722244603_2715356041595500212_n.jpg","Photos\\ملابس\\جلافز\\595014424_4247385608911281_2968926337948698212_n.jpg","Photos\\ملابس\\جلافز\\595275710_4247385705577938_7210122358742761741_n.jpg","Photos\\ملابس\\جلافز\\595443548_4247385648911277_4888582169971593451_n.jpg","Photos\\ملابس\\جلافز\\595814514_4247385628911279_7050966825584441893_n.jpg","Photos\\ملابس\\جلافز\\608217935_4363736693860376_1453360730923070993_n.jpg","Photos\\ملابس\\جلافز\\608867738_4363736637193715_3936782478749778277_n.jpg","Photos\\ملابس\\سكارفات\\603883111_4264402653876243_6983799708591966902_n.jpg","Photos\\ملابس\\سكارفات\\605293225_4264402650542910_4512008778514734584_n.jpg","Photos\\ملابس\\سكارفات\\607948466_4363736803860365_7433566649590257390_n.jpg","Photos\\ملابس\\سكارفات\\608908368_4363736763860369_1437029328683578588_n.jpg","Photos\\ملابس\\نساء\\609147546_4363736927193686_134097657268709679_n.jpg","Photos\\ملابس\\نساء\\627984157_4394673327433379_1019734270232463827_n.jpg","Photos\\ملابس\\نساء\\642872187_4415590715341640_5099423793103380996_n.jpg","Photos\\ملابس\\نساء\\645923366_4422397094661002_8345093310533351968_n.jpg","Photos\\ملابس\\نساء\\646340083_4422397031327675_6692166827814110205_n.jpg","Photos\\ملابس\\نساء\\656846187_4446578978909480_3561492387892370082_n.jpg","Photos\\ميداليلات\\652356270_4438173689750009_1385258586360355651_n.jpg","Photos\\ميداليلات\\652506758_4438173646416680_6373690896076637194_n.jpg","Photos\\ميداليلات\\652557811_4438173489750029_1770083689310507587_n.jpg","Photos\\ميداليلات\\653207027_4438173259750052_8877029077248299643_n.jpg","Photos\\ميداليلات\\653398075_4438173453083366_9142753815196616935_n.jpg","Photos\\ميداليلات\\653711390_4438173726416672_6028037831131307525_n.jpg","Photos\\ميداليلات\\653758100_4438173129750065_2487507858521464778_n.jpg","Photos\\ميداليلات\\653788519_4438173536416691_5633716620294379073_n.jpg","Photos\\ميداليلات\\653931324_4438173383083373_6168346555039859274_n.jpg","Photos\\ميداليلات\\654263345_4438173346416710_2711433435098752808_n.jpg","Photos\\ميداليلات\\654422197_4438173303083381_4223857001442634723_n.jpg","Photos\\ميداليلات\\654730564_4438173576416687_3637063504088445396_n.jpg","Photos\\ميداليلات\\654816428_4438173819749996_1631622333812606649_n.jpg","Photos\\ميداليلات\\654822211_4438173613083350_826444075144846873_n.jpg","Photos\\ميداليلات\\654998256_4438173759750002_2456779306107906606_n.jpg"];

const COLOR_PALETTE = [
    { name: "أسود", hex: "#111111" },
    { name: "أبيض", hex: "#ffffff" },
    { name: "أوف وايت", hex: "#f5f1e8" },
    { name: "بيج", hex: "#d7c4a7" },
    { name: "سكري", hex: "#f3ead7" },
    { name: "كافيه", hex: "#8b6b4a" },
    { name: "بني شوكولاتة", hex: "#4e342e" },
    { name: "رمادي", hex: "#9e9e9e" },
    { name: "رمادي غامق", hex: "#4f4f4f" },
    { name: "أزرق", hex: "#1e88e5" },
    { name: "أزرق كحلي", hex: "#1a237e" },
    { name: "سماوي", hex: "#81d4fa" },
    { name: "أخضر", hex: "#2e7d32" },
    { name: "أخضر مينت", hex: "#7bdcb5" },
    { name: "أحمر", hex: "#e53935" },
    { name: "نبيتي", hex: "#7b1f2a" },
    { name: "وردي", hex: "#ec407a" },
    { name: "وردي فاتح", hex: "#f8bbd0" },
    { name: "بنفسجي", hex: "#7e57c2" },
    { name: "أصفر", hex: "#fdd835" },
    { name: "ذهبي", hex: "#c9a227" }
];

function normalizeWebPath(p) {
    return p.replaceAll('\\', '/');
}

function stripExtension(filename) {
    return filename.replace(/\.[^/.]+$/, '');
}

function safeTitleFromFilename(filename, fallback) {
    const base = stripExtension(filename).trim();
    if (!base) return fallback;
    if (base.toLowerCase().startsWith('whatsapp image')) return fallback;
    if (/^\d{6,}_/.test(base)) return fallback;
    return base;
}

function translateCategoryTokenArToEn(token) {
    const map = new Map([
        ['شنط', 'Bags'],
        ['مفروشات', 'Home Decor'],
        ['ملابس', 'Clothing'],
        ['اطفال', 'Kids'],
        ['نساء', 'Women'],
        ['ايس كاب', 'Winter Cap'],
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

function buildProductsFromPhotos() {
    const items = PHOTO_PATHS
        .map(normalizeWebPath)
        .filter(p => p.toLowerCase().match(/\.(jpg|jpeg|png|webp|gif)$/))
        .map(p => {
            const parts = p.split('/'); // Photos / category / maybe subcategory / filename
            const photosIdx = parts.findIndex(x => x.toLowerCase() === 'photos');
            const rel = photosIdx >= 0 ? parts.slice(photosIdx) : parts;
            const categoryAr = rel[1] || "منتجات";
            const subcategoryAr = rel.length >= 4 ? rel[2] : "";
            const filename = rel[rel.length - 1] || "";

            const categoryPathAr = subcategoryAr ? `${categoryAr} / ${subcategoryAr}` : categoryAr;
            return { path: p, categoryAr, subcategoryAr, categoryPathAr, filename };
        });

    const categoryOrder = Array.from(new Set(items.map(x => x.categoryPathAr)));
    const categoryIndex = new Map(categoryOrder.map((c, i) => [c, i + 1]));

    const perCategoryCounters = new Map();

    return items.map((x) => {
        const catNo = categoryIndex.get(x.categoryPathAr) || 0;
        const current = (perCategoryCounters.get(x.categoryPathAr) || 0) + 1;
        perCategoryCounters.set(x.categoryPathAr, current);

        const id = `DC-${String(catNo).padStart(2, '0')}-${String(current).padStart(3, '0')}`;
        const fallbackTitle = subcategoryLabel(x.categoryAr, x.subcategoryAr, current);
        const titleAr = safeTitleFromFilename(x.filename, fallbackTitle);
        const titleEn = safeTitleFromFilename(x.filename, `${translateCategoryLabel(x.categoryPathAr, 'en')} (${current})`);
        const price = priceForCategory(x.categoryAr, x.subcategoryAr, `${x.categoryPathAr}/${x.filename}`);

        return {
            id,
            titleAr,
            titleEn,
            categoryKey: categoryKeyFromAr(x.categoryAr, x.subcategoryAr),
            categoryLabelAr: x.categoryPathAr,
            price,
            image: x.path,
        };
    });
}

function priceForCategory(categoryAr, subcategoryAr, seedStr) {
    // Rules from you:
    // - شنط: 400..700 (random in range)
    // - مفروشات: around 400
    // - ملابس/اطفال: 100..400
    const seed = parseInt(hashString(seedStr), 16) >>> 0;
    const rand01 = (seed % 10000) / 10000; // 0..1
    const between = (min, max) => Math.round(min + (max - min) * rand01);

    if (categoryAr === 'شنط') return between(400, 700);
    if (categoryAr === 'مفروشات') return between(350, 450); // قريب من 400
    if (categoryAr === 'ملابس' && subcategoryAr === 'اطفال') return between(100, 400);
    return 0; // باقي الأقسام عند الطلب
}

function subcategoryLabel(categoryAr, subcategoryAr, index) {
    const base = subcategoryAr ? `${categoryAr} - ${subcategoryAr}` : categoryAr;
    return `${base} (${index})`;
}

function categoryKeyFromAr(categoryAr, subcategoryAr) {
    // stable key for filtering (ASCII-ish)
    const raw = (subcategoryAr ? `${categoryAr}-${subcategoryAr}` : categoryAr).trim();
    return `cat_${hashString(raw)}`;
}

function hashString(str) {
    // small stable hash (djb2)
    let h = 5381;
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) + h) ^ str.charCodeAt(i);
    }
    return (h >>> 0).toString(16);
}

const productsData = buildProductsFromPhotos();

// --- State ---
let cart = [];
let activeCategory = 'all';
const PRODUCTS_PER_PAGE = 9;
let currentPage = 1;

// --- DOM Elements ---
const productsGrid = document.getElementById('products-grid');
const categoryFilters = document.getElementById('category-filters');
const dashboardEl = document.getElementById('dashboard');
const productSearch = document.getElementById('product-search');
const catPrev = document.getElementById('cat-prev');
const catNext = document.getElementById('cat-next');
const openCartBtn = document.getElementById('open-cart-btn');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.querySelector('.dash-cart');
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

// --- Initialization ---
function init() {
    initLanguage();
    renderCategoryFilters();
    renderProducts(productsData);
    setupEventListeners();
    loadCart();

    window.addEventListener('resize', () => {
        if (!window.matchMedia('(max-width: 1200px)').matches) {
            document.body.style.overflow = '';
            if (cartSidebar) cartSidebar.classList.remove('active');
            if (cartOverlay) cartOverlay.classList.remove('active');
        }
    });

    // Smooth Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

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
        "why.title": "لماذا نحن؟",
        "why.c1.t": "خبرة حقيقية",
        "why.c1.d": "أكثر من 7 سنوات من العمل والخبرة في تنفيذ قطع كروشيه هاند ميد باحترافية.",
        "why.c2.t": "تفاصيل متقنة",
        "why.c2.d": "نهتم بكل غرزة وكل تفصيلة لنقدّم لك منتجًا أنيقًا ومتقنًا.",
        "why.c3.t": "تصميمات مميزة",
        "why.c3.d": "كل قطعة عندنا لها طابع خاص يميزها عن المنتجات الجاهزة التقليدية.",
        "why.c4.t": "طلبات مخصصة",
        "why.c4.d": "يمكننا تنفيذ منتجات خاصة تناسب ذوقك أو مناسبتك.",
        "story.title": "حكاية البراند",
        "story.desc": "بدأت رحلتنا مع الكروشيه من شغف حقيقي بالتفاصيل والشغل اليدوي، ومع الوقت تحولت هذه الهواية إلى خبرة وعمل حقيقي استمر لأكثر من 7 سنوات. كل قطعة نقدمها مصنوعة يدويًا بحب، بعناية واضحة في كل تفصيلة.",
        "featured.title": "مختارات مميزة",
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
        "why.title": "Why Choose Us?",
        "why.c1.t": "Real Experience",
        "why.c1.d": "Over 7 years of hands-on crochet craftsmanship and creative work.",
        "why.c2.t": "Fine Details",
        "why.c2.d": "Every stitch matters, and every piece is finished with care.",
        "why.c3.t": "Unique Designs",
        "why.c3.d": "Our products are made to stand out with a special handmade identity.",
        "why.c4.t": "Custom Orders",
        "why.c4.d": "We can create personalized pieces tailored to your taste or occasion.",
        "story.title": "Our Story",
        "story.desc": "Our journey with crochet began from a genuine passion for handmade details and meaningful craftsmanship. Over time, that passion grew into a real creative brand with over 7 years of experience. Every piece we create is carefully handmade with love.",
        "featured.title": "Featured Collection",
        "custom.title": "Request Your Custom Piece",
        "custom.desc": "Have a special idea, preferred color, or a unique gift in mind? We can create a custom handmade crochet piece tailored just for you.",
        "custom.cta": "Request Now",
        "reviews.title": "What Our Customers Say",
        "reviews.r1": "\"The piece looked even better in real life, and the finishing was beautiful.\"",
        "reviews.r2": "\"One of the best handmade crochet products I’ve ever ordered.\"",
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

function renderCategoryFilters() {
    const filters = document.getElementById('category-filters');
    if (!filters) return;

    const categories = new Map(); // key -> label
    productsData.forEach(p => categories.set(p.categoryKey, p.categoryLabelAr));

    const ordered = Array.from(categories.entries()).sort((a, b) => a[1].localeCompare(b[1], 'ar'));

    const reprImg = new Map(); // key -> image
    productsData.forEach(p => {
        if (!reprImg.has(p.categoryKey)) reprImg.set(p.categoryKey, p.image);
    });

    const lang = document.documentElement.lang;
    filters.innerHTML = `
        <button class="cat-chip active" data-filter="all" type="button">
            <span class="cat-avatar"><i class="fa-solid fa-border-all"></i></span>
            <span class="cat-name">All</span>
        </button>
        ${ordered.map(([key, label]) => {
            const img = reprImg.get(key);
            const labelShown = translateCategoryLabel(label, lang);
            return `
                <button class="cat-chip" data-filter="${key}" type="button">
                    <span class="cat-avatar">
                        <img src="${encodeURI(img)}" alt="${labelShown}" onerror="this.remove()">
                    </span>
                    <span class="cat-name">${labelShown}</span>
                </button>
            `;
        }).join('')}
    `;
}

function getProductTitle(product) {
    return document.documentElement.lang === 'en' ? (product.titleEn || product.titleAr) : product.titleAr;
}

function getCategoryLabel(product) {
    const lang = document.documentElement.lang;
    return translateCategoryLabel(product.categoryLabelAr, lang);
}

// --- Render Products (Grid) with Pagination ---
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

        card.innerHTML = `
            <div class="product-img-wrapper">
                <img
                    src="${encodeURI(product.image)}"
                    alt="${product.id}"
                    class="product-img"
                    data-zoom-src="${encodeURI(product.image)}"
                    data-zoom-alt="${cat} | ${product.id}"
                    onerror="this.src='https://via.placeholder.com/300x400?text=${encodeURIComponent(product.id)}'"
                >
            </div>
            <div class="product-info">
                <p class="product-category">${cat} | Code: ${product.id}</p>
                <p class="product-price">${product.price ? `${product.price} EGP` : "Price on request"}</p>
                
                <div class="product-options">
                    <div class="color-swatches" role="radiogroup" aria-label="Choose color">
                        ${renderColorSwatchesHtml(product.id)}
                    </div>
                </div>

                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                    Add to Cart <i class="fa-solid fa-cart-plus"></i>
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Render pagination
    renderPagination(products, totalPages);
}

function renderPagination(products, totalPages) {
    let paginationEl = document.getElementById('products-pagination');
    if (!paginationEl) {
        paginationEl = document.createElement('div');
        paginationEl.id = 'products-pagination';
        paginationEl.className = 'pagination-container';
        productsGrid.parentNode.insertBefore(paginationEl, productsGrid.nextSibling);
    }

    if (totalPages <= 1) {
        paginationEl.innerHTML = '';
        return;
    }

    let html = `<div class="pagination">`;

    // Prev button
    html += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>
        <i class="fa-solid fa-chevron-left"></i>
    </button>`;

    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
    }

    // Next button
    html += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>
        <i class="fa-solid fa-chevron-right"></i>
    </button>`;

    html += `</div>`;
    paginationEl.innerHTML = html;
}

window.changePage = function(page) {
    const q = (productSearch?.value || '').trim().toLowerCase();
    const base = activeCategory === 'all'
        ? productsData
        : productsData.filter(p => p.categoryKey === activeCategory);
    const filtered = q
        ? base.filter(p => (`${p.id} ${p.categoryLabelAr} ${p.titleAr} ${p.titleEn || ''}`).toLowerCase().includes(q))
        : base;
    renderProducts(filtered, page);
    document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderColorSwatchesHtml(productId) {
    const first = COLOR_PALETTE[0];
    const title = document.documentElement.lang === 'en' ? 'Choose color' : 'اختيار اللون';
    const list = COLOR_PALETTE.map((c, idx) => {
        const inputId = `color-${productId}-${idx}`;
        const checked = idx === 0 ? 'checked' : '';
        return `
            <label class="color-option" title="${c.name}">
                <input type="radio" name="color-${productId}" id="${inputId}" value="${c.name}" data-hex="${c.hex}" ${checked} />
                <span class="color-dot" style="--swatch:${c.hex}; background-color:${c.hex};"></span>
                <span class="sr-only">${c.name}</span>
            </label>
        `;
    }).join('');

    return `
        <div class="color-picker" data-color-picker="${productId}">
            <button class="color-trigger" type="button" aria-label="${title}">
                <span class="color-dot" style="--swatch:${first.hex}; background-color:${first.hex};" data-selected-dot></span>
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="color-pop" role="listbox" aria-label="${title}">
                ${list}
            </div>
        </div>
    `;
}

// --- Filter Logic ---
function filterProducts(category) {
    activeCategory = category;
    currentPage = 1;
    if (productsGrid) productsGrid.style.opacity = 0;

    setTimeout(() => {
        const q = (productSearch?.value || '').trim().toLowerCase();
        const base = category === 'all'
            ? productsData
            : productsData.filter(p => p.categoryKey === category);

        const filteredByQuery = q
            ? base.filter(p => (`${p.id} ${p.categoryLabelAr} ${p.titleAr} ${p.titleEn || ''}`).toLowerCase().includes(q))
            : base;

        renderProducts(filteredByQuery, 1);
        if (productsGrid) {
            productsGrid.style.opacity = 1;
            productsGrid.style.transition = 'opacity 0.4s ease';
        }
    }, 200);
}


// --- Event Listeners ---
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

    if (catPrev && categoryFilters) {
        catPrev.addEventListener('click', () => categoryFilters.scrollBy({ left: 280, behavior: 'smooth' }));
    }
    if (catNext && categoryFilters) {
        catNext.addEventListener('click', () => categoryFilters.scrollBy({ left: -280, behavior: 'smooth' }));
    }

    if (productsGrid) {
        productsGrid.addEventListener('click', (e) => {
            const img = e.target.closest('img[data-zoom-src]');
            if (!img) return;
            openImageModal(img.getAttribute('data-zoom-src'), img.getAttribute('data-zoom-alt') || '');
        });
    }

    if (imgModalOverlay) imgModalOverlay.addEventListener('click', closeImageModal);
    if (imgModalClose) imgModalClose.addEventListener('click', closeImageModal);
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (imgModal && imgModal.classList.contains('active')) {
            closeImageModal();
            return;
        }
        closeAllColorPickers();
        if (
            window.matchMedia('(max-width: 1200px)').matches &&
            cartSidebar &&
            cartOverlay &&
            cartSidebar.classList.contains('active')
        ) {
            cartSidebar.classList.remove('active');
            cartOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Color picker open/close + select
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('.color-trigger');
        const pickerEl = e.target.closest('.color-picker');

        if (trigger && pickerEl) {
            const isOpen = pickerEl.classList.contains('open');
            closeAllColorPickers();
            if (!isOpen) pickerEl.classList.add('open');
            return;
        }

        // selecting a color
        const option = e.target.closest('.color-option');
        if (option) {
            const input = option.querySelector('input[type="radio"]');
            if (input) {
                input.checked = true;
                const picker = option.closest('.color-picker');
                const selectedDot = picker?.querySelector('[data-selected-dot]');
                const hex = input.getAttribute('data-hex') || '#e0e0e0';
                if (selectedDot) {
                    selectedDot.style.setProperty('--swatch', hex);
                    selectedDot.style.backgroundColor = hex;
                }
                picker?.classList.remove('open');
            }
            return;
        }

        // click outside
        if (!pickerEl) closeAllColorPickers();
    });

    cartBtn.addEventListener('click', toggleCart);
    if (openCartBtn) openCartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    checkoutBtn.addEventListener('click', handleCheckout);

    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const current = (localStorage.getItem('doda_lang') || 'ar') === 'en' ? 'en' : 'ar';
            applyLanguage(current === 'en' ? 'ar' : 'en');
            // Re-render category chips to update "All" label
            renderCategoryFilters();
            filterProducts(activeCategory);
                });
    }
    if (langToggleTop) {
        langToggleTop.addEventListener('click', () => {
            const current = (localStorage.getItem('doda_lang') || 'ar') === 'en' ? 'en' : 'ar';
            applyLanguage(current === 'en' ? 'ar' : 'en');
            renderCategoryFilters();
            filterProducts(activeCategory);
                });
    }

    if (whatsappContact) {
        whatsappContact.addEventListener('click', () => {
            const phoneNumber = "201000000000";
            const msg = document.documentElement.lang === 'en'
                ? "Hi Doda Croshet, I want to ask about a custom order."
                : "مرحباً Doda Croshet، عايزة أسأل عن طلب تصميم خاص.";
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    }
}

function closeAllColorPickers() {
    document.querySelectorAll('.color-picker.open').forEach(el => el.classList.remove('open'));
}

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

// --- Cart Logic ---
function toggleCart() {
    const isNarrow = window.matchMedia && window.matchMedia('(max-width: 1200px)').matches;
    if (isNarrow) {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
        const open = cartSidebar.classList.contains('active');
        document.body.style.overflow = open ? 'hidden' : '';
        return;
    }
    // Desktop: collapse the cart column to match dashboard UI
    if (!dashboardEl) return;
    dashboardEl.classList.toggle('cart-collapsed');
}

window.addToCart = function (productId) {
    const product = productsData.find(p => p.id === productId);
    const selected = document.querySelector(`input[name="color-${productId}"]:checked`);
    const selectedColor = selected ? selected.value : '';
    const selectedHex = selected ? selected.getAttribute('data-hex') : '';

    // Create unique ID for cart item including selected color
    const cartItemId = `${productId}-${selectedColor}`;

    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, cartItemId, selectedColor, selectedHex, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast();
}

window.removeFromCart = function (cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.innerText = totalItems;

    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align:center; padding: 40px 20px;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; color: #EAD7D1; margin-bottom: 15px;"></i>
                <p style="color:var(--text-muted); font-size:1.1rem;">سلة التسوق فارغة.</p>
                <button class="btn btn-primary" style="margin-top:20px; width:100%" onclick="toggleCart()">تصفح المنتجات</button>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            const cat = translateCategoryLabel(item.categoryLabelAr, document.documentElement.lang);
            const title = getProductTitle(item);
            const displayTitle = `${title}`;
            el.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img" onerror="this.src='https://via.placeholder.com/80?text=IMG'">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${displayTitle}</h4>
                    <div class="cart-item-sku">${cat} • ${document.documentElement.lang === 'en' ? 'Code' : 'كود'}: ${item.id}</div>
                    <span class="cart-item-color">
                        <span class="mini-swatch" style="--swatch:${item.selectedHex || '#e0e0e0'}"></span>
                        اللون: ${item.selectedColor || "غير محدد"}
                    </span>
                    <p class="cart-item-price">${item.price ? `${item.price} ج.م` : "السعر عند الطلب"} x ${item.quantity}</p>
                </div>
                <button class="remove-item" onclick="removeFromCart('${item.cartItemId}')"><i class="fa-solid fa-trash-can"></i></button>
            `;
            cartItemsContainer.appendChild(el);
        });
    }

    const total = cart.reduce((acc, item) => acc + ((item.price || 0) * item.quantity), 0);
    cartTotalPrice.innerText = total ? `${total} ج.م` : `يتم تحديده في الواتساب`;
}

// --- Local Storage ---
function saveCart() {
    localStorage.setItem('dodaCartStore_v2', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('dodaCartStore_v2');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// --- Utilities ---
function showToast() {
    toast.innerHTML = '<i class="fa-solid fa-circle-check"></i> تمت الإضافة للسلة بنجاح!';
    toast.classList.add('show');

    if (window.toastTimer) clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// --- Checkout ---
function handleCheckout() {
    if (cart.length === 0) {
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> السلة فارغة. الرجاء إضافة منتجات أولاً.';
        toast.style.backgroundColor = '#ff4d4d';
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            toast.style.backgroundColor = 'var(--secondary-color)';
        }, 3000);
        return;
    }

    let message = "مرحباً Doda Croshet\nأريد طلب المنتجات الآتية:\n\n";
    let total = 0;
    let hasAnyPrice = false;

    cart.forEach((item, index) => {
        const cat = translateCategoryLabel(item.categoryLabelAr, document.documentElement.lang);
        const title = getProductTitle(item);
        message += `${index + 1}) ${title}\n`;
        message += `- ${document.documentElement.lang === 'en' ? 'Category' : 'القسم'}: ${cat}\n`;
        message += `- ${document.documentElement.lang === 'en' ? 'Code' : 'كود المنتج'}: ${item.id}\n`;
        message += `- الكمية: ${item.quantity}\n`;
        if (item.price) {
            message += `- السعر: ${item.price * item.quantity} ج.م\n`;
            hasAnyPrice = true;
        } else {
            message += `- السعر: عند الطلب\n`;
        }
        message += `------------------------\n`;
        total += (item.price || 0) * item.quantity;
    });

    message += hasAnyPrice ? `\nالإجمالي: ${total} ج.م\n\n` : `\nالإجمالي: يتم تحديده بعد تأكيد الأسعار\n\n`;
    message += "الرجاء إخباري بخطوات الدفع والتوصيل. شكراً لك.";

    // Replace YOUR_PHONE_NUMBER_HERE with the actual WhatsApp number including country code e.g. 201xxxxxxxxx
    const phoneNumber = "201000000000";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Start app
document.addEventListener('DOMContentLoaded', init);
