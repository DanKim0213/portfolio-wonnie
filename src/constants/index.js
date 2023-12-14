import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { days1, days2, days3, auctopus1, auctopus2, auctopus3, bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, toonbti1, toonbti2, toonbti3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about-me", label: "About Me" },
    { href: "#reviews", label: "Reviews" },
];

export const days = [
    {
        id: 'days1',
        thumbnail: days1
    },
    {
        id: 'days2',
        thumbnail: days2
    },
    {
        id: 'days3',
        thumbnail: days3
    }
    
];

export const toonbti = [
    {
        id: "toonbti1",
        thumbnail: toonbti1 
    },
    {
        id: "toonbti2",
        thumbnail: toonbti2 
    },
    {
        id: "toonbti3",
        thumbnail: toonbti3 
    },
]

export const auctopus = [
    {
        id: 'auctopus1',
        thumbnail: auctopus1
    },
    {
        id: 'auctopus2',
        thumbnail: auctopus2
    },
    {
        id: 'auctopus3',
        thumbnail: auctopus3
    }
]

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products2 = [
    {
        imgURL: toonbti1,
        name: "TooNBTI",
        price: "웹툰 취향 MBTI",
        product: toonbti,
        stars: 4
    },
    {
        imgURL: auctopus1,
        name: "Auctopus",
        price: "중고거래 플랫폼",
        product: auctopus,
        stars: 3.5 
    },
    {
        imgURL: days1,
        name: "66 Days",
        price: "습관 형성 리마인더",
        product: days,
        stars: 3.5
    },
    {
        imgURL: auctopus1,
        name: "Auctopus2",
        price: "중고거래 플랫폼",
        product: auctopus,
        stars: 3.5
    },
];
export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
