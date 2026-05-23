// ==========================================================================
// 1. ИМПОРТЫ ИЗОБРАЖЕНИЙ / RASMLAR IMPORTI
// ==========================================================================
import disMatrasImg from "./img/dismatras.png";
import redMatrasImg from "./img/redmatras.png";
import tech1Img from "./img/ing_1.png";
import tech2Img from "./img/ing_2.png";
import tech3Img from "./img/ing_3.png";
import aboutVideoImg from "./img/rect.png";
import aboutShowroomImg from "./img/rext_2.png";
import advImg1 from "./img/adv.png";
import advImg2 from "./img/adv2.png";
import advImg3 from "./img/adv3.png";
import addImg from "./img/add.png";

// ==========================================================================
// 2. ИНТЕРФЕЙСЫ И ТИПЫ ДАННЫХ / INTERFEYSLAR VA MA'LUMOT TURLARI
// ==========================================================================
export interface MenuItem {
    id: number;
    title: string;
    link: string;
}

export interface TelItem {
    id: number;
    number: string;
}

export interface StatItem {
    id: number;
    value: string;
    label: string;
}

export interface CategoryItem {
    id: number;
    name: string;
}

export interface ProductCharacteristic {
    label: string;
    value: string;
}

export interface ProductItem {
    id: number;
    title: string;
    image: string;
    badges: { text: string; type: "new" | "sale" }[];
    characteristics: ProductCharacteristic[];
    description: string;
    price: string;
    oldPrice?: string;
    isDiscount?: boolean;
}

export interface TechItem {
    id: number;
    title: string;
    image: string;
    description: string;
}

export interface AboutRowOneItem {
    title: string;
    description: string;
    image: string;
    features: string[];
}

export interface AboutRowTwoItem {
    descriptionTop: string;
    image: string;
    points: string[];
    descriptionBottom: string;
}

export interface AdvCardItem {
    image: string;
    title: string;
    desc: string;
    isVideo?: boolean;
    phone?: string;
}

export interface AddDataItem {
    title: string;
    address: string;
    landmark: string;
    buttonText: string;
    image: string;
    locationUrl: string;
    progressSteps: number[];
    activeStep: number;
}

export interface InfoDataItem {
    title: string;
    subtitle: string;
    countryCode: string;
    placeholder: string;
    buttonText: string;
}

export interface FooterLinkItem {
    text: string;
    url: string;
}

export interface FooterSocialItem {
    name: string;
    url: string;
}

export interface FooterDataItem {
    links: FooterLinkItem[];
    socials: FooterSocialItem[];
    copyright: string;
}

// ==========================================================================
// 3. ЭКСПОРТ ТИПИЗИРОВАННЫХ ДАННЫХ / TIPLASHGAN MA'LUMOTLAR EKSPORTI
// ==========================================================================

// --- Навигация и Контакты (Header) / Navigatsiya va Kontaktlar (Header) ---
export const menuItems: MenuItem[] = [
    { id: 1, title: "Katalog", link: "/katalog" },
    { id: 2, title: "Aksiya", link: "/aksiya" },
    { id: 3, title: "Biz haqimizda", link: "/about" },
    { id: 4, title: "Manzilimiz", link: "/location" },
    { id: 5, title: "Aloqa", link: "/contact" },
];

export const TelNumber: TelItem[] = [{ id: 1, number: "+998 90 123 45 67" }];

// --- Блок статистики / Statistika bloki ---
export const statsData: StatItem[] = [
    { id: 1, value: "7", label: "yillik tajriba" },
    { id: 2, value: "10k+", label: "mamnun mijozlar" },
    { id: 3, value: "10", label: "yillik kafolat" },
    { id: 4, value: "3", label: "kunda yetkazish" },
];

// --- Категории каталога / Katalog kategoriyalari ---
export const categoriesData: CategoryItem[] = [
    { id: 1, name: "Barchasi" },
    { id: 2, name: "Model A+" },
    { id: 3, name: "Model B+" },
    { id: 4, name: "Model C" },
    { id: 5, name: "Model C+" },
    { id: 6, name: "Model D" },
    { id: 7, name: "Model Yevro" },
    { id: 8, name: "Yangi tovarlar" },
    { id: 9, name: "Model A" },
];

// --- Товары каталога / Katalog mahsulotlari ---
export const productsData: ProductItem[] = [
    {
        id: 1,
        title: "Ortopedik Eko matras",
        image: disMatrasImg,
        badges: [{ text: "YANGI MAHSULOT", type: "new" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est. Habitant adipiscing vt sed pvlvinvar tellvs, vt vrna, fermentvm. Porttitor senectvs lorem rhoncvs facilisi ac dictvm varivs egestas.",
        price: "1 699 999 so'm",
    },
    {
        id: 2,
        title: "Ortopedik Eko matras",
        image: disMatrasImg,
        badges: [{ text: "YANGI MAHSULOT", type: "new" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est. Habitant adipiscing vt sed pvlvinvar tellvs, vt vrna, fermentvm. Porttitor senectvs lorem rhoncvs facilisi ac dictvm varivs egestas.",
        price: "1 699 999 so'm",
    },
    {
        id: 3,
        title: "Ortopedik Eko matras",
        image: disMatrasImg,
        badges: [{ text: "YANGI MAHSULOT", type: "new" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est. Habitant adipiscing vt sed pvlvinvar tellvs, vt vrna, fermentvm. Porttitor senectvs lorem rhoncvs facilisi ac dictvm varivs egestas.",
        price: "1 699 999 so'm",
    },
];

// --- Акционные товары / Aksiyadagi mahsulotlar ---
export const discountProductsData: ProductItem[] = [
    {
        id: 4,
        title: "Ortopedik Eko matras",
        image: disMatrasImg,
        badges: [{ text: "AKSIYA", type: "sale" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est. Habitant adipiscing vt sed pvlvinvar tellvs, vt vrna, fermentvm. Porttitor senectvs lorem rhoncvs facilisi ac dictvm varivs egestas.",
        price: "1 299 999 so'm",
        oldPrice: "1 599 999 so'm",
        isDiscount: true,
    },
    {
        id: 5,
        title: "Lux Soft Memory",
        image: redMatrasImg,
        badges: [{ text: "AKSIYA", type: "sale" }],
        characteristics: [
            { label: "Yuklama", value: "120 kg" },
            { label: "Kafolat", value: "5 yil" },
            { label: "Balandligi", value: "38 sm" },
            { label: "Sig'imi", value: "3 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est. Habitant adipiscing vt sed pvlvinvar tellvs, vt vrna, fermentvm. Porttitor senectvs lorem rhoncvs facilisi ac dictvm varivs egestas.",
        price: "1 199 999 so'm",
        oldPrice: "3 000 000 so'm",
        isDiscount: true,
    },
];

// --- Блок Технологий / Texnologiyalar bloki ---
export const techData: TechItem[] = [
    {
        id: 1,
        title: "Memoriform",
        image: tech1Img,
        description:
            "Lectus pellentesque senectus elit donec massa ipsum ultricies dui. Bibendum et enim fringilla tincidunt ligula non, condimentum nunc.",
    },
    {
        id: 2,
        title: "Tabiiy lateks",
        image: tech2Img,
        description:
            "Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus quis bibendum. Euismod diam eu sem tristique aenean rhoncus.",
    },
    {
        id: 3,
        title: "Mustaqil prujina",
        image: tech3Img,
        description:
            "Enim urna consequat, justo, cras tincidunt imperdiet orci sodales. Dui purus feugiat morbi quam orci, vel. Elementum tincidunt blandit ultricies venenatis rhoncus.",
    },
];

// --- О компании: Ряд 1 (Текст + Видео) / Biz haqimizda: 1-qator (Matn + Video) ---
export const aboutRowOne: AboutRowOneItem = {
    title: "Dream Cloud kompaniyasi haqida",
    description:
        "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est. Habitant adipiscing vt sed pvlvinvar tellvs, vt vrna, fermentvm:",
    image: aboutVideoImg,
    features: [
        "Penatibvs viverra gravida rhoncvs in.",
        "Dolor integer in interdum viverra risvs dolor enim.",
        "Tvrpis senectvs ev, eget aenean nvlla pellentesque sed vt tempor.",
    ],
};

// --- О компании: Ряд 2 (Фото шоурума + Текст) / Biz haqimizda: 2-qator (Showroom rasmi + Matn) ---
export const aboutRowTwo: AboutRowTwoItem = {
    descriptionTop:
        "Libero erat praesent ullamcorper eget tortor sed et. Nec id lobortis gravida vitae. Scelerisque id fusce vitae ut. Integer sed vulputate sed nec. Arcu id mattis erat et id.",
    image: aboutShowroomImg,
    points: [
        "Id risus phasellus laoreet eget. A nec pulvinar.",
        "Eu justo, tincidunt fringilla diam nulla.",
        "Amet, nullam cras lacus, fermentum leo tellus sagittis.",
        "Facilisi mauris condimentum sagittis odio rhoncus semper.",
    ],
    descriptionBottom:
        "Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat arcu mauris tincidunt. Eget faucibus pharetra et luctus eget ut fames. A cursus elementum egestas eu scelerisque id.",
};

// --- Блок преимуществ / Afzalliklar bloki ---
export const advCards: AdvCardItem[] = [
    {
        image: advImg1,
        title: "Yetkazib berish",
        desc: "Toshkent bo'ylab bepul o'lchov va etkazib berish",
        isVideo: true,
    },
    {
        image: advImg2,
        title: "Qo'llab-quvvatlash",
        desc: "Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning",
        phone: "+998 97 144-24-42",
        isVideo: false,
    },
    {
        image: advImg3,
        title: "Kafolat",
        desc: "Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.",
        isVideo: false,
    },
];

// --- Блок локации (Адрес) / Manzilimiz bloki (Lokatsiya) ---
export const addData: AddDataItem = {
    title: "Manzilimiz",
    address: "Toshkent, Parkent ko'chasi, 176-uy",
    landmark:
        "Mo'ljal: Qoraqamish 2/1, Tursunxodjayeva ro'parasi, Milliy bog' metro bekati.",
    buttonText: "Geolokatsiya",
    image: addImg,
    locationUrl: "https://maps.google.com",
    progressSteps: [1, 2, 3, 4], // Декоративная линия под фото / Rasm ostidagi dekorativ chiziq segmentlari
    activeStep: 0, // Индекс активного сегмента / Aktiv segment indeksi
};

// --- Форма обратной связи / Qayta aloqa formasi ---
export const infoData: InfoDataItem = {
    title: "Sizni qiziqtirdimi?",
    subtitle: "Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz",
    countryCode: "+998",
    placeholder: "Raqamingizni yozing",
    buttonText: "Yuborish",
};

// --- Подвал сайта / Sayt futili (Footer) ---
export const footerData: FooterDataItem = {
    links: [
        { text: "Biz haqimizda", url: "#about" },
        { text: "Katalog", url: "#catalog" },
        { text: "Aksiya", url: "#promo" },
        { text: "Manzilimiz", url: "#add" },
    ],
    socials: [
        { name: "facebook", url: "https://facebook.com" },
        { name: "twitter", url: "https://twitter.com" },
        { name: "vimeo", url: "https://vimeo.com" },
        { name: "youtube", url: "https://youtube.com" },
    ],
    copyright: "© 2021 Dream Cloud. Barcha huquqlar himoyalangan.",
};
