import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { days1, days2, days3, auctopus1, auctopus2, auctopus3, bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, toonbti1, toonbti2, toonbti3 } from "../assets/images";

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

export const projects = [
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
        imgURL: "https://avatars.githubusercontent.com/u/89833631?v=4",
        customerName: '노현정, SSAFY 2학기 특화 프로젝트',
        rating: 4.5,
        feedback: "프론트 팀장으로서 팀원들이 도움이 필요할 때 도와주려고 함께 고민한다. 긍정적 마인드로 항상 팀원들을 응원하며, 소수의 팀원들의 의견일지라도 경청하고 팀원들 간의 논쟁을 조율하려고 노력한다"
    },
    {
        imgURL: "https://avatars.githubusercontent.com/u/55757379?v=4",
        customerName: '성다연, SSAFY 2학기 자율 프로젝트',
        rating: 4.5,
        feedback: "제 상황을 모두 고려해주시고 꼼꼼하게 코드 리뷰를 해주시며 기술적인 어려움이 있으면 적극적으로 가르쳐주셔서 같은 프론트엔드 개발 팀원으로서 많이 의지가 되고 든든했습니다."
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
