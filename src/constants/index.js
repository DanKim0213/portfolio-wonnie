import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  days1,
  days2,
  days3,
  auctopus1,
  auctopus2,
  auctopus3,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  toonbti1,
  toonbti2,
  toonbti3,
  portfolio1,
  portfolio2,
  portfolio3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about-me", label: "About Me" },
  { href: "#reviews", label: "Reviews" },
];

export const days = [
  {
    id: "days1",
    thumbnail: days1,
  },
  {
    id: "days2",
    thumbnail: days2,
  },
  {
    id: "days3",
    thumbnail: days3,
  },
];

export const portfolio = [
  {
    id: "portfolio1",
    thumbnail: portfolio1,
  },
  {
    id: "portfolio2",
    thumbnail: portfolio2,
  },
  {
    id: "portfolio3",
    thumbnail: portfolio3,
  },
];

export const toonbti = [
  {
    id: "toonbti1",
    thumbnail: toonbti1,
  },
  {
    id: "toonbti2",
    thumbnail: toonbti2,
  },
  {
    id: "toonbti3",
    thumbnail: toonbti3,
  },
];

export const auctopus = [
  {
    id: "auctopus1",
    thumbnail: auctopus1,
  },
  {
    id: "auctopus2",
    thumbnail: auctopus2,
  },
  {
    id: "auctopus3",
    thumbnail: auctopus3,
  },
];

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
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const projects = [
  {
    imgURL: portfolio1,
    name: "Wonnie",
    price: "포트폴리오",
    product: portfolio,
    stars: 4,
    desc: [
      "나의 역할:\n",
      "- 나이키 랜딩 페이지를 바탕으로 나만의 포트폴리오 웹사이트를 만듦\n",
      "- 스티키 헤더 추가\n",
      "- 불필요한 css 줄이기\n",
      "- 프로젝트 보여주기용 모달 추가\n",
      "- 햄버거 메뉴 추가\n",
      "- 서비스 섹션 오류 수정\n",
      "- 반응형 디자인을 모바일까지 포함하여 개선\n",
    ],
    url: "https://github.com/DanKim0213/portfolio-wonnie",
  },
  {
    imgURL: toonbti1,
    name: "TooNBTI",
    price: "웹툰 취향 MBTI",
    product: toonbti,
    stars: 4,
    desc: [
      "나의 역할:\n",
      "- graphql을 백엔드와 프론트엔드에 도입 및 graphql-codegen을 활용하여 설정\n",
      "- Intersection Observer를 활용하여 무한 스크롤 기능을 웹툰 목록 페이지에 적용\n",
      "- 취향 테스트 페이지에서 연관 웹툰 아이템을 불러올때, 중복된 웹툰을 Map 자료형을 사용하여 거르기\n",
      "- TypeScript를 프론트엔드에 적용하여 컴포넌트별 propstype 및 graphql API에서 빠른 디버깅과 협업에 안정성을 추구\n",
      "- Github flow를 도입하여 팀 프로젝트 코드관리를 도맡아 진행\n",
    ],
    url: "https://github.com/DanKim0213/TooNBTI",
  },
  {
    imgURL: auctopus1,
    name: "Auctopus",
    price: "중고거래 플랫폼",
    product: auctopus,
    stars: 3.5,
    desc: [
      "나의 역할:",
      "- Web Socket을 활용하여 채팅 구현",
      "- 카카오 계정을 활용하여 소셜 로그인 구현",
      "- TypeScript를 프로젝트에 적극 도입하길 추천했고 팀원들과 스터디 주도",
      "- Git으로 프로젝트 관리 담당",
    ],
    url: "https://github.com/DanKim0213/Auctopus",
  },
  {
    imgURL: days1,
    name: "66 Days",
    price: "습관 형성 리마인더",
    product: days,
    stars: 3.5,
    desc: [
      " 나의 역할:",
      " - Intersection Observer를 활용하여 무한 스크롤 기능을 그룹 검색 페이지에 적용",
      " - Github flow를 도입하여 팀 프로젝트 코드관리",
      " - 프로젝트에 대한 흐름도 & 팀 간 소통을 위한 Notion 문서화",
      " - 그룹 소개 페이지를 퍼블리싱",
      " - 카카오 소셜 로그인 담당",
      " - 프론트엔드 개발자들의 코드 리뷰를 진행",
    ],
    url: "https://github.com/DanKim0213/66days/tree/main",
  },
];

export const services = [
  {
    imgURL: shieldTick,
    label: "책임감",
    subtext:
      "맡은 일을 더 잘하기 위해 책임감을 가지고 임하며 자기계발을 게을리 하지 않습니다.",
  },
  {
    imgURL: truckFast,
    label: "솔선수범",
    subtext: "말보다 행동으로 모범이 되는 사람이 되기 위해 솔선수범합니다.",
  },
  {
    imgURL: support,
    label: "긍정적인 생각",
    subtext:
      "어려움을 마주했을때 할 수 있다는 긍정적인 생각으로 문제 해결에 집중합니다.",
  },
];

export const reviews = [
  {
    imgURL: "https://avatars.githubusercontent.com/u/89833631?v=4",
    customerName: "노현정, SSAFY 2학기 특화 프로젝트",
    rating: 4.5,
    feedback:
      "프론트 팀장으로서 팀원들이 도움이 필요할 때 도와주려고 함께 고민한다. 긍정적 마인드로 항상 팀원들을 응원하며, 소수의 팀원들의 의견일지라도 경청하고 팀원들 간의 논쟁을 조율하려고 노력한다",
  },
  {
    imgURL: "https://avatars.githubusercontent.com/u/55757379?v=4",
    customerName: "성다연, SSAFY 2학기 자율 프로젝트",
    rating: 4.5,
    feedback:
      "제 상황을 모두 고려해주시고 꼼꼼하게 코드 리뷰를 해주시며 기술적인 어려움이 있으면 적극적으로 가르쳐주셔서 같은 프론트엔드 개발 팀원으로서 많이 의지가 되고 든든했습니다.",
  },
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
