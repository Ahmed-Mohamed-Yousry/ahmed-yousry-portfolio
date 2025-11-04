import user_image from './user-image.png';
import my_image from './my-image.png';
import my_img_green from './my_img_green.jpg';
import logo_usry_green from './logo_usry_green.png';
import logo_usry_white from './logo_usry_white.png'
import last_web from "./last-web.webp"
import marketing_icon_dark from './goal-dark.png'
import meta from "./meta.png";
import seo from "./seo.jpg"
import back_end from "./backend-logo.webp";
import digital_marketing from "./digital-marketing.png";
import ashref from "./ahrefs-logo.webp"
import linkedIn from "./linkedIn-logo.png"
import google from "./google-ads.jpg"
import logo_usry from './logo-Usry.png';
import marketing_icon from './goal.png';
import profile_image from './ahmed-pic.png';
import my_logo from './my-logo.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    my_image,
    meta,
    google,
    my_img_green,
    digital_marketing,
    marketing_icon_dark,
    logo_usry_white,
    back_end,
    profile_image,
    logo_usry_green,
    marketing_icon,
    logo_usry,
    last_web,
    ashref,
    seo,
    linkedIn,
    my_logo,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'Frontend project',
    description: 'Web Design',
    bgImage: '/work-1.webp',
    link: '/projects', // 🔗 يفتح صفحة المشاريع
  },
  {
    title: 'MERN stack project',
    description: 'Web Design',
    bgImage: '/work-2.webp',
    link: 'https://github.com/Ahmed-Mohamed-Yousry', // 🔗 رابط GitHub
  },
  {
    title: 'MEDIA BUYING',
    description: 'Digital Advertising',
    bgImage: '/work-3.webp',
    link: '/marketing', // 🔗 صفحة التسويق
  },
  {
    title: 'Video Editing',
    description: 'Learning Video Editing',
    bgImage: '/work-4.webp',
    link: '', // 🔗 مفيش لينك حاليًا
  },
];


export const serviceData = [
    { icon: assets.last_web, title: 'Web design', description: 'Develop responsive websites using React, Next.js, Tailwind CSS, and modern front-end practices.', link: '' },
    { icon: assets.back_end, title: 'Backend & APIs', description: 'Build secure RESTful APIs and manage databases using Node.js, Express, MongoDB, and MySQL....', link: '' },
    { icon: assets.digital_marketing, title: 'Digital Marketing', description: 'Manage high-performing Meta, Google, and LinkedIn ad campaigns, create content strategies, and optimize conversions.', link: '' },
    { icon: assets.seo, title: 'SEO & Social Media', description: 'Boost online visibility through SEO tools like Ahrefs, SE Ranking and manage social media campaigns effectively.', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];

export const allProjects = [
    {
      title: 'Morgan',
      description: 'portfolio website famliar with bootstrap ',
      bgImage: '/Morgan.png',
      link: 'https://bootstrab-project-coral.vercel.app/'
    },
    {
      title: 'E-commerce Platform',
      description: 'Front-End Development',
      bgImage: '/EcommercNEW.png',
      link: 'https://freshcart-eta-one.vercel.app/'
    },
    {
      title: 'DEVELCO',
      description: 'Your hub for movies and series',
      bgImage: '/develekko.png',
      link : "https://ahmed-mohamed-yousry.github.io/develekko/"
    },
    {
      title: 'GAME OVER',
      description: 'Browse, play, and download games',
      bgImage: '/GAME_OVER.png',
      link:"https://game-over-woad.vercel.app/"
    },
  ];

    export const testimonialsData = [
    {
      name: "Frontend Expert",
      company: "Route academy",
      description: "Exceptional proficiency in crafting responsive, high-performance web interfaces using React and Next.js, transforming design concepts into seamless user experiences.",
      bgImage: '/ahmed mohamed frontend.jpg',
    },
    {
      name: "Backend Expert",
      company: "Route academy",
      description: "Highly skilled in building robust and scalable APIs with a strong focus on database architecture, performance optimization, and security best practices.",
      bgImage: '/ahmed mohamed backend.jpg'
    }
  ];

  export const digitalMarketingTestimonials = [
        {
      name: "Digital Marketing and E-commerce ",
      company: "COURSERA",
      description: "Proven expertise in managing high-impact digital marketing campaigns across platforms like Meta and Google Ads, driving significant ROI and enhancing brand visibility in competitive markets.",
      bgImage: '/digital marketing and E-commerce.png',
      rating: 5
    }
    ,
    {
      name:"Digital Marketing ",
      company:"Udemy",
      description:"Demonstrated ability to strategize and execute comprehensive digital marketing plans, leveraging SEO, content marketing, and social media to boost online presence and engagement.",
      bgImage:'/udemy digital marketing course ahmed.png',
      rating: 5
    },
        {
      name:"Digital Marketing ",
      company:"Udemy",
      description:"Demonstrated ability to strategize and execute comprehensive digital marketing plans, leveraging SEO, content marketing, and social media to boost online presence and engagement.",
      bgImage:'/udemy digital marketing course ahmed.png',
      rating: 5
    }
  ]
// أضف هذا الكود في ملف assets/assets.js
export const marketingResults = [
  {
    id: 1,
    title: "حملة فيسبوك إعلانية - زيادة المبيعات",
    client: "شركة تجارية",
    description: "زيادة المبيعات بنسبة 300% خلال 3 أشهر من خلال استراتيجية تسويق متكاملة على منصات التواصل الاجتماعي",
    beforeImage: '/marketing-before-1.jpg',
    afterImage: '/marketing-after-1.jpg',
    metrics: {
      revenue: "+300%",
      engagement: "+450%",
      conversion: "+5.2%",
      period: "3 أشهر"
    },
    platforms: ['Facebook', 'Instagram', 'Google Ads'],
    category: "التجارة الإلكترونية"
  },
  {
    id: 2,
    title: "استراتيجية SEO متكاملة",
    client: "موقع خدمي",
    description: "تحسين ترتيب الموقع في محركات البحث وزيادة الزوار العضويين بنسبة 200% خلال 6 أشهر",
    beforeImage: '/marketing-before-2.jpg',
    afterImage: '/marketing-after-2.jpg',
    metrics: {
      traffic: "+200%",
      ranking: "الصفحة الأولى",
      leads: "+150%",
      period: "6 أشهر"
    },
    platforms: ['SEO', 'Content Marketing', 'Google Analytics'],
    category: "التحسين لمحركات البحث"
  },
  {
    id: 3,
    title: "حملة تسويق بالمحتوى",
    client: "علامة تجارية",
    description: "بناء استراتيجية محتوى متكاملة ساهمت في زيادة الوعي بالعلامة التجارية والمشاركة",
    beforeImage: '/marketing-before-3.jpg',
    afterImage: '/marketing-after-3.jpg',
    metrics: {
      engagement: "+300%",
      followers: "+25K",
      reach: "+500%",
      period: "4 أشهر"
    },
    platforms: ['Content', 'Social Media', 'Email Marketing'],
    category: "تسويق المحتوى"
  }
];

export const marketingStats = [
  { number: "150%", label: "متوسط زيادة المبيعات", icon: "📈" },
  { number: "3M+", label: "وصول للحملات", icon: "👥" },
  { number: "95%", label: "رضا العملاء", icon: "⭐" },
  { number: "50+", label: "مشروع ناجح", icon: "🚀" }
];