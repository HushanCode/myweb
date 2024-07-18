import { MenuType } from "../pages/Works/components/LeftTabMenu";

export interface WORKITEM {
  type: MenuType;
  subType: string;
  tags: string[];
  title: string;
  desc: string;
  coverImg: string;
  link: string;
  avatarImg: string;
  likes: number;
  visitors: number;
}

export const WORK_LIST: WORKITEM[] = [
  {
    type: "write",
    subType: "测试",
    tags: ["手写", "笔记"],
    title: "标题1",
    desc: "221321321",
    coverImg: "../../assets/icon.png",
    link: "https://juejin.cn/?utm_source=infinitynewtab.com",
    avatarImg: "../../assets/icon.png",
    likes: 100,
    visitors: 100,
  },
  {
    type: "write",
    subType: "测试",
    tags: ["手写", "笔记"],
    title: "标题2",
    desc: "221321321",
    coverImg: "../../assets/icon.png",
    link: "https://juejin.cn/?utm_source=infinitynewtab.com",
    avatarImg: "../../assets/icon.png",
    likes: 100,
    visitors: 100,
  },
];

export interface SOCIAL {
  title: string;
  link: string;
  info?: string;
}

export interface WEBINFO {
  author?: string;
  roles?: string[];
  motto?: string;
  avatarImg?: string;
  social?: SOCIAL[];
  likes?: number;
  visitors: number;
}

export const WEBINFODETAIL: WEBINFO = {
  author: "ObjectX",
  roles: ["前端工程师", "图形编辑器开发", "前端工程化"],
  motto: "21321321321",
  avatarImg: "../assets/icon.png",
  social: [
    {
      title: "Juejin",
      link: "https://juejin.cn/?utm_source=infinitynewtab.com",
    },
    {
      title: "Github",
      link: "https://github.com/ObjectX-9",
    },
    {
      title: "Email",
      link: "514034541@qq.com",
      info: "514034541@qq.com",
    },
    {
      title: "KnowledgeBase",
      link: "https://nextjs-notion-starter-kit-phi-gray.vercel.app/?vercelToolbarCode=q7e6XSyBgBIeMSk",
    },
    {
      title: "WeChat",
      link: "WeChat",
      info: "WeChat",
    },
  ],
  likes: 1000,
  visitors: 100,
};

interface experience {
  title: string;
  time: string;
  function: string;
}

interface lifeImgList {
  title: string;
  desc: string;
  time: string;
  url: string;
}

export interface ABOUT {
  author: string;
  introduce: string;
  skills: string[];
  experience: experience[];
  future: string;
  lifeImgList: lifeImgList[];
}

export const ABOUTINFO: ABOUT = {
  author: "ObjectX",
  introduce: "21321321321",
  skills: ["react", "js", "section"],
  experience: [
    {
      title: "132132",
      time: "2132132",
      function: "2132132",
    },
  ],
  future: "321321",
  lifeImgList: [
    {
      title: "23213",
      desc: "2321321",
      time: "2321321",
      url: "../assets/icon.png",
    },
  ],
};
