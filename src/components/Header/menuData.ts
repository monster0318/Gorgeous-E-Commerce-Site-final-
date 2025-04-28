import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Shop",
    newTab: false,
    path: "/shop",
  },
  {
    id: 4,
    title: "Bank/Crypto",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 40,
        title: "Bank Accounts",
        newTab: false,
        path: "/category/0",
        items:[
          {
            id: 401,
            title: "Buy Verified Bluebird Accounts",
            newTab: false,
            path: "/shop-details/1",
          },
          {
            id: 402,
            title: "Buy Verified Cash App Accounts",
            newTab: false,
            path: "/shop-details/2",
          },
          {
            id: 403,
            title: "Buy Verified Neteller Accounts",
            newTab: false,
            path: "/shop-details/3",
          },
          {
            id: 404,
            title: "Buy Verified Payoneer Accounts",
            newTab: false,
            path: "/shop-details/4",
          },
          {
            id: 405,
            title: "Buy Verified PayPal Accounts",
            newTab: false,
            path: "/shop-details/5",
          },
          {
            id: 406,
            title: "Buy Verified Paytm Accounts",
            newTab: false,
            path: "/shop-details/6",
          },
          {
            id: 407,
            title: "Buy Verified Perfect Money Accounts",
            newTab: false,
            path: "/shop-details/7",
          },
          {
            id: 408,
            title: "Buy Verified Skrill Accounts",
            newTab: false,
            path: "/shop-details/8",
          },
          {
            id: 409,
            title: "Buy Verified TransferWise Accounts",
            newTab: false,
            path: "/shop-details/9",
          },
        ]
      },
      {
        id: 41,
        title: "Crypto Accounts",
        newTab: false,
        path: "/category/1",
        items:[
          {
            id: 411,
            title: "Buy Verified Advcash Accounts",
            newTab: false,
            path: "/shop-details/10",
          },
          {
            id: 412,
            title: "Buy Verified Binance Accounts",
            newTab: false,
            path: "/shop-details/11",
          },
          {
            id: 413,
            title: "Buy Verified Blockchain Accounts",
            newTab: false,
            path: "/shop-details/12",
          },
          {
            id: 414,
            title: "Buy Verified CoinBase Accounts",
            newTab: false,
            path: "/shop-details/13",
          },
          {
            id: 416,
            title: "Buy Verified Paxful Accounts",
            newTab: false,
            path: "/shop-details/15",
          },
        ]
      },
    ],
  },
  {
    id: 3,
    title: "Social Reaction",
    newTab: false,
    path: "/category/8",
  },
  {
    id: 5,
    title: "Others",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 51,
        title: "Social Media",
        newTab: false,
        path: "/category/2",
        items:[
          {
            id: 511,
            title: "Buy Facebook Accounts",
            newTab: false,
            path: "/shop-details/19",
          },
          {
            id: 512,
            title: "Buy Instagram Accounts",
            newTab: false,
            path: "/shop-details/20",
          },
          {
            id: 513,
            title: "Buy Pinterest Accounts",
            newTab: false,
            path: "/shop-details/22",
          },
          {
            id: 514,
            title: "Buy Skype Accounts",
            newTab: false,
            path: "/shop-details/24",
          },
          {
            id: 515,
            title: "Buy Snapchat Accounts",
            newTab: false,
            path: "/shop-details/25",
          },
          {
            id: 517,
            title: "Buy Tiktok Accounts",
            newTab: false,
            path: "/shop-details/23",
          },
          {
            id: 518,
            title: "Buy Twitter Accounts",
            newTab: false,
            path: "/shop-details/21",
          },
          {
            id: 519,
            title: "Buy Wechat Accounts",
            newTab: false,
            path: "/shop-details/27",
          },
        ]
      },
      {
        id: 52,
        title: "Ads Accounts",
        newTab: false,
        path: "/category/3",
        items:[
          {
            id: 521,
            title: "Buy Bing Ads Accounts",
            newTab: false,
            path: "/shop-details/30",
          },
          {
            id: 523,
            title: "Buy Google Adsense Accounts",
            newTab: false,
            path: "/shop-details/28",
          },
          {
            id: 524,
            title: "Buy Tiktok Ads Accounts",
            newTab: false,
            path: "/shop-details/31",
          },
          {
            id: 525,
            title: "Buy Twitter Ads Accounts",
            newTab: false,
            path: "/shop-details/32",
          },
        ]
      },
      {
        id: 53,
        title: "Email Service",
        newTab: false,
        path: "/category/4",
        items:[
          {
            id: 531,
            title: "Buy Hotmail Accounts",
            newTab: false,
            path: "/shop-details/34",
          },
          {
            id: 532,
            title: "Buy Old Gmail Accounts",
            newTab: false,
            path: "/shop-details/33",
          },
          {
            id: 533,
            title: "Buy Zoho Mail Accounts",
            newTab: false,
            path: "/shop-details/35",
          },
        ]
      },
    ],
  },
  {
    id: 6,
    title: "Reviews",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Positive Reviews",
        newTab: false,
        path: "/category/5",
        items:[
          {
            id: 611,
            title: "Buy Facebook Reviews",
            newTab: false,
            path: "/shop-details/36",
          },
          {
            id: 612,
            title: "Buy Google Reviews",
            newTab: false,
            path: "/shop-details/37",
          },
          {
            id: 614,
            title: "Buy TrustPilot Reviews",
            newTab: false,
            path: "/shop-details/39",
          },
          {
            id: 615,
            title: "Buy Chrome Extension Reviews",
            newTab: false,
            path: "/shop-details/40",
          },
          {
            id: 616,
            title: "Buy Android App Reviews",
            newTab: false,
            path: "/shop-details/41",
          },
          {
            id: 617,
            title: "Buy Elite Yelp Reviews",
            newTab: false,
            path: "/shop-details/42",
          },
          {
            id: 618,
            title: "Buy Glassdoor Reviews",
            newTab: false,
            path: "/shop-details/43",
          },
          {
            id: 619,
            title: "Buy Goodreads Reviews",
            newTab: false,
            path: "/shop-details/44",
          },
          {
            id: 6111,
            title: "Buy Yelp Reviews",
            newTab: false,
            path: "/shop-details/45",
          },
          {
            id: 6112,
            title: "Buy Zillow Reviews",
            newTab: false,
            path: "/shop-details/46",
          },
          {
            id: 6113,
            title: "Buy TripAdvisor Reviews",
            newTab: false,
            path: "/shop-details/47",
          },
        ]
      },
      {
        id: 62,
        title: "Negative Reviews",
        newTab: false,
        path: "/category/6",
        items:[
          {
            id: 621,
            title: "Buy Negative Facebook Reviews",
            newTab: false,
            path: "/shop-details/48",
          },
          {
            id: 622,
            title: "Buy Negative Google Reviews",
            newTab: false,
            path: "/shop-details/49",
          },
          {
            id: 623,
            title: "Buy Negative Yelp Reviews",
            newTab: false,
            path: "/shop-details/50",
          },
        ]
      },
      {
        id: 63,
        title: "Review Removal",
        newTab: false,
        path: "/category/7",
        items: [
          {
            id: 631,
            title: "Google Bad Review Remove",
            newTab: false,
            path: "/shop-details/51",
          },
          {
            id: 632,
            title: "Trustpilot Bad Review Remove",
            newTab: false,
            path: "/shop-details/52",
          },
        ]
      },
      {
        id: 64,
        title: "More",
        newTab: false,
        path: "/category/9",
        items:[
          {
            id: 641,
            title: "Buy Clutch Reviews",
            newTab: false,
            path: "/shop-details/53",
          },
          {
            id: 642,
            title: "Buy Zomato Reviews",
            newTab: false,
            path: "/shop-details/54",
          },
          {
            id: 643,
            title: "Buy BBB Reviews",
            newTab: false,
            path: "/shop-details/55",
          },
          {
            id: 644,
            title: "Buy Checkatrade Reviews",
            newTab: false,
            path: "/shop-details/56",
          },
          {
            id: 646,
            title: "Buy Houzz Reviews",
            newTab: false,
            path: "/shop-details/57",
          },
          {
            id: 647,
            title: "Buy ClickAbility Reviews",
            newTab: false,
            path: "/shop-details/58",
          },
          {
            id: 648,
            title: "Buy Mouthshut Reviews",
            newTab: false,
            path: "/shop-details/59",
          },
          {
            id: 649,
            title: "Buy Yellow Page Reviews",
            newTab: false,
            path: "/shop-details/60",
          },
          {
            id: 6411,
            title: "Buy IMDb Ratings",
            newTab: false,
            path: "/shop-details/61",
          },
          {
            id: 6412,
            title: "Buy TrustRadius Reviews",
            newTab: false,
            path: "/shop-details/62",
          },
          {
            id: 6413,
            title: "Buy Realtor Reviews",
            newTab: false,
            path: "/shop-details/63",
          },
        ]
      },
    ],
  },
  {
    id: 7,
    title: "Blog",
    newTab: false,
    path: "/blogs/blog-grid",
  },
  {
    id: 8,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];
