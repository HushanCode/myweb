export const CLASSIFY = [
  {
    title: "全部",
    type: "all",
  },
  {
    title: "最新",
    type: "latest",
  },
  {
    title: "推荐",
    type: "recommended",
  },
];

export const API_CLASSIFY = [
  {
    title: "全部",
    type: "all",
  },
  {
    title: "算法",
    type: "algorithm",
  },
  {
    title: "数组",
    type: "array",
  },
  {
    title: "对象",
    type: "object",
  },
  {
    title: "字符串",
    type: "string",
  },
  {
    title: "其他",
    type: "other",
  },
];

export type SubType =
  | "all"
  | "latest"
  | "recommended"
  | "algorithm"
  | "array"
  | "object"
  | "string"
  | "other";
