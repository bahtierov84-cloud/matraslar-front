// ==========================================================================
// 1. ИМПОРТЫ ИЗОБРАЖЕНИЙ / RASMLAR IMPORTI
// ==========================================================================
import LogoImg from "./img/logo.png";
import MatrasImg from "./img/matras.png";
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
import addImg2 from "./img/add_img2.jpeg";
import addImg3 from "./img/add_img3.jpeg";
import group3660Img from "./img/Group 3660.png";
import modal1 from "../img/modal1.png";
import modal2 from "../img/modal2.png";
import slide1Img from "../img/intro__img.png";
import slide2Img from "./img/bed2.png";
import slide3Img from "./img/bed3.png";

// Галерея изображений для модального окна
export const modalGalleryImages = [
    modal1,
    modal2,
    tech1Img,
    tech2Img,
    tech3Img,
];

// ==========================================================================
// 2. ИНТЕРФЕЙСЫ И ТИПЫ ДАННЫХ / INTERFEYSLAR VA MA'LUMOT TURLARI
// ==========================================================================
export interface MenuItem {
    id: number;
    title: string;
    link: string;
}

export const Logo = LogoImg;
export { LogoImg };
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
    categoryId?: number;
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
    videoUrl?: string;
}

export interface AboutRowOneItem {
    title: string;
    description: string;
    image: string;
    video?: string;
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

export interface SingleAddressItem {
    id: number;
    title: string;
    address: string;
    landmark: string;
    buttonText: string;
    image: string;
    locationUrl: string;
}

export interface InfoData {
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

export interface FooterData {
    links: FooterLinkItem[];
    socials: FooterSocialItem[];
    copyright: string;
}

export interface OrderModalData {
    title: string;
    namePlaceholder: string;
    phonePrefix: string;
    phonePlaceholder: string;
    categoryLabel: string;
    quantityLabel: string;
    submitButtonText: string;
}

export interface SuccessModalData {
    title: string;
    image: string;
    description: string;
    closeButtonText: string;
}

export interface Slide {
    id: number;
    title: string;
    image: string;
    alt: string;
    buttonUrl: string;
}

// ==========================================================================
// 3. ЭКСПОРТ ТИПИЗИРОВАННЫХ ДАННЫХ / MA'LUMOTLAR EKSPORTI
// ==========================================================================

export const menuItems: MenuItem[] = [
    { id: 1, title: "Katalog", link: "#products" },
    { id: 2, title: "Aksiya", link: "#discount" },
    { id: 3, title: "Biz haqimizda", link: "#about" },
    { id: 4, title: "Manzilimiz", link: "#location" },
    { id: 5, title: "Aloqa", link: "#contact" },
];

export const TelNumber: TelItem[] = [{ id: 1, number: "+998 90 123 45 67" }];

export const slidesData: Slide[] = [
    {
        id: 1,
        title: "Kechalari sokin <br />dam oling",
        image: slide1Img,
        alt: "Kechalari sokin dam oling",
        buttonUrl: "#categories",
    },
    {
        id: 2,
        title: "Maksimal darajada <br />qulaylik",
        image: slide2Img,
        alt: "Maksimal darajada qulaylik",
        buttonUrl: "#categories",
    },
    {
        id: 3,
        title: "Sifatli mebel <br />sizning uyingizga",
        image: slide3Img,
        alt: "Sifatli mebel sizning uyingizga",
        buttonUrl: "#categories",
    },
];

export const statsData: StatItem[] = [
    { id: 1, value: "7", label: "yillik tajriba" },
    { id: 2, value: "10k+", label: "mamnun mijozlar" },
    { id: 3, value: "10", label: "yillik kafolat" },
    { id: 4, value: "3", label: "kunda yetkazish" },
];

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

export const productsData: ProductItem[] = [
    {
        id: 1,
        categoryId: 2,
        title: "Ortopedik Eko matras (Model A+)",
        image: MatrasImg,
        badges: [{ text: "YANGI MAHSULOT", type: "new" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est.",
        price: "1 699 999 so'm",
    },
    {
        id: 2,
        categoryId: 3,
        title: "Ortopedik Eko matras (Model B+)",
        image: MatrasImg,
        badges: [{ text: "YANGI MAHSULOT", type: "new" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est.",
        price: "1 699 999 so'm",
    },
    {
        id: 3,
        categoryId: 8,
        title: "Ortopedik Eko matras (Yangi)",
        image: MatrasImg,
        badges: [{ text: "YANGI MAHSULOT", type: "new" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est.",
        price: "1 699 999 so'm",
    },
];

export const discountProductsData: ProductItem[] = [
    {
        id: 4,
        categoryId: 4,
        title: "Ortopedik Eko matras (Aksiya)",
        image: disMatrasImg,
        badges: [{ text: "AKSIYA", type: "sale" }],
        characteristics: [
            { label: "Yuklama", value: "150 kg" },
            { label: "Kafolat", value: "3 yil" },
            { label: "O'lchami", value: "200X120X40" },
            { label: "Sig'imi", value: "2 kishilik" },
        ],
        description:
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est.",
        price: "1 299 999 so'm",
        oldPrice: "1 599 999 so'm",
        isDiscount: true,
    },
    {
        id: 5,
        categoryId: 9,
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
            "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est.",
        price: "1 199 999 so'm",
        oldPrice: "3 000 000 so'm",
        isDiscount: true,
    },
];

export const techData: TechItem[] = [
    {
        id: 1,
        title: "Memoriform",
        image: tech1Img,
        description:
            "Lectus pellentesque senectus elit donec massa ipsum ultricies dui.",
        videoUrl: "https://www.youtube.com/embed/J-_KSiyfWY4",
    },
    {
        id: 2,
        title: "Tabiiy lateks",
        image: tech2Img,
        description:
            "Aliquam euismod ornare justo, sed faucibus eu. Sed amet tellus netus.",
        videoUrl: "https://www.youtube.com/embed/MM_VYM_qqTU",
    },
    {
        id: 3,
        title: "Mustaqil prujina",
        image: tech3Img,
        description:
            "Enim urna consequat, justo, cras tincidunt imperdiet orci sodales.",
        videoUrl: "https://www.youtube.com/embed/tLIABBsDMWI",
    },
];

export const aboutRowOne: AboutRowOneItem = {
    title: "Dream Cloud kompaniyasi haqida",
    description:
        "Penatibvs viverra gravida rhoncvs in. At tvrpis morbi ante tortor a est.",
    image: aboutVideoImg,
    video: "https://www.youtube.com/watch?v=ZmbBOiwj5_A",
    features: [
        "Penatibvs viverra gravida rhoncvs in.",
        "Dolor integer in interdum viverra risvs dolor enim.",
        "Tvrpis senectvs ev, eget aenean nvlla pellentesque sed vt tempor.",
    ],
};

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
        "Ac tortor volutpat pellentesque mauris nisi, praesent. Et tempus accumsan est elementum feugiat.",
};

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
        desc: "Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi",
        phone: "+998 97 144-24-42",
        isVideo: false,
    },
    {
        image: advImg3,
        title: "Kafolat",
        desc: "Biz matraslarimiz uchun 8 yilgacha kafolat beramiz.",
        isVideo: false,
    },
];

export const addressesData: SingleAddressItem[] = [
    {
        id: 1,
        title: "Manzilimiz",
        address: "Toshkent, Parkent ko'chasi, 176-uy",
        landmark:
            "Mo'ljal: Qoraqamish 2/1, Tursunxodjayeva ro'parasi, Milliy bog' metro bekati.",
        buttonText: "Geolokatsiya",
        image: addImg,
        locationUrl: "https://maps.google.com",
    },
    {
        id: 2,
        title: "Chilonzor filiali",
        address: "Toshkent, Chilonzor ko'chasi, 24-uy",
        landmark: "Mo'ljal: Chilonzor metro bekati, Qatortol bozori yaqinida.",
        buttonText: "Geolokatsiya",
        image: addImg2,
        locationUrl: "http://googleusercontent.com/maps.google.com/2",
    },
    {
        id: 3,
        title: "Yunusobod filiali",
        address: "Toshkent, Amir Temur ko'chasi, 95-uy",
        landmark:
            "Mo'ljal: Shahriston metro bekati, Megaplanet savdo markazi ro'parasi.",
        buttonText: "Geolokatsiya",
        image: addImg3,
        locationUrl: "http://googleusercontent.com/maps.google.com/3",
    },
];

export const infoData: InfoData = {
    title: "Sizni qiziqtirdimi?",
    subtitle: "Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz",
    countryCode: "+998",
    placeholder: "Raqamingizni yozing",
    buttonText: "Yuborish",
};

export const footerData: FooterData = {
    links: [
        { text: "Biz haqimizda", url: "#about" },
        { text: "Katalog", url: "#products" },
        { text: "Aksiya", url: "#discount" },
        { text: "Manzilimiz", url: "#location" },
    ],
    socials: [
        { name: "facebook", url: "https://facebook.com" },
        { name: "twitter", url: "https://twitter.com" },
        { name: "vimeo", url: "https://vimeo.com" },
        { name: "youtube", url: "https://youtube.com" },
    ],
    copyright: "© 2026 Dream Cloud. Barcha huquqlar himoyalangan.",
};

export const orderModalContent: OrderModalData = {
    title: "Buyurtma qilish",
    namePlaceholder: "Ismingizni yozing",
    phonePrefix: "+998",
    phonePlaceholder: "Raqamingizni yozing",
    categoryLabel: "Mahsulotlarni toifasini tanlang",
    quantityLabel: "Miqdorni tanlang",
    submitButtonText: "Yuborish",
};

export const successModalContent: SuccessModalData = {
    title: "Arizangiz muvaffaqiyatli yuborildi",
    image: group3660Img,
    description: "Tez orada operatorlarimiz siz bilan bog'lanishadi",
    closeButtonText: "Ok",
};
