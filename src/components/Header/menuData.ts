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
    path: "/shop-with-sidebar",
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
        path: "/shop-with-sidebar",
        items:[
          {
            id: 401,
            title: "Buy Verified Bluebird Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 402,
            title: "Buy Verified Cash App Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 403,
            title: "Buy Verified Neteller Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 404,
            title: "Buy Verified Payoneer Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 405,
            title: "Buy Verified PayPal Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 406,
            title: "Buy Verified Paytm Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 407,
            title: "Buy Verified Perfect Money Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 408,
            title: "Buy Verified Skrill Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 409,
            title: "Buy Verified TransferWise Accounts",
            newTab: false,
            path: "/",
          },
        ]
      },
      {
        id: 41,
        title: "Crypto Accounts",
        newTab: false,
        path: "/shop-without-sidebar",
        items:[
          {
            id: 411,
            title: "Buy Verified Advcash Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 412,
            title: "Buy Verified Binance Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 413,
            title: "Buy Verified Blockchain Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 414,
            title: "Buy Verified CoinBase Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 415,
            title: "Buy Verified FTX Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 416,
            title: "Buy Verified Paxful Accounts",
            newTab: false,
            path: "/",
          },
        ]
      },
    ],
  },
  {
    id: 3,
    title: "Social Reaction",
    newTab: false,
    path: "/contact",
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
        path: "/blogs/blog-grid-with-sidebar",
        items:[
          {
            id: 511,
            title: "Buy Facebook Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 512,
            title: "Buy Instagram Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 513,
            title: "Buy Pinterest Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 514,
            title: "Buy Skype Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 515,
            title: "Buy Snapchat Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 516,
            title: "Buy Soundcloud Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 517,
            title: "Buy Tiktok Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 518,
            title: "Buy Twitter Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 519,
            title: "Buy Wechat Accounts",
            newTab: false,
            path: "/",
          },
        ]
      },
      {
        id: 52,
        title: "Ads Accounts",
        newTab: false,
        path: "/blogs/blog-grid",
        items:[
          {
            id: 521,
            title: "Buy Bing Ads Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 522,
            title: "Buy Facebook Ads Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 523,
            title: "Buy Google Adsense Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 524,
            title: "Buy Tiktok Ads Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 525,
            title: "Buy Twitter Ads Accounts",
            newTab: false,
            path: "/",
          },
        ]
      },
      {
        id: 53,
        title: "Email Service",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
        items:[
          {
            id: 531,
            title: "Buy Hotmail Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 532,
            title: "Buy Old Gmail Accounts",
            newTab: false,
            path: "/",
          },
          {
            id: 533,
            title: "Buy Zoho Mail Accounts",
            newTab: false,
            path: "/",
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
        path: "/blogs/blog-grid-with-sidebar",
        items:[
          {
            id: 611,
            title: "Buy Facebook Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 612,
            title: "Buy Google Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 613,
            title: "Buy Google Local Guide Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 614,
            title: "Buy TrustPilot Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 615,
            title: "Buy Chrome Extension Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 616,
            title: "Buy Android App Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 617,
            title: "Buy Elite Yelp Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 618,
            title: "Buy Glassdoor Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 619,
            title: "Buy Googlereads Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 6111,
            title: "Buy Yelp Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 6112,
            title: "Buy Zillow Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 6113,
            title: "Buy TripAdvisor Reviews",
            newTab: false,
            path: "/",
          },
        ]
      },
      {
        id: 62,
        title: "Negative Reviews",
        newTab: false,
        path: "/blogs/blog-grid",
        items:[
          {
            id: 621,
            title: "Buy Negative Facebook Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 622,
            title: "Buy Negative Google Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 623,
            title: "Buy Negative Yelp Reviews",
            newTab: false,
            path: "/",
          },
        ]
      },
      {
        id: 63,
        title: "Review Removal",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
        items: [
          {
            id: 631,
            title: "Google Bad Review Remove",
            newTab: false,
            path: "/",
          },
          {
            id: 632,
            title: "Trustpilot Bad Review Remove",
            newTab: false,
            path: "/",
          },
        ]
      },
      {
        id: 64,
        title: "More",
        newTab: false,
        path: "/blogs/blog-details",
        items:[
          {
            id: 641,
            title: "Buy Clutch Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 642,
            title: "Buy Zomato Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 643,
            title: "Buy BBB Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 644,
            title: "Buy Checkatrade Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 645,
            title: "Buy Product Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 646,
            title: "Buy Houzz Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 647,
            title: "Buy ClickAbility Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 648,
            title: "Buy Mouthshut Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 649,
            title: "Buy Yellow Page Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 6411,
            title: "Buy IMDb Ratings",
            newTab: false,
            path: "/",
          },
          {
            id: 6412,
            title: "Buy TrustRadius Reviews",
            newTab: false,
            path: "/",
          },
          {
            id: 6413,
            title: "Buy Realtor Reviews",
            newTab: false,
            path: "/",
          },
        ]
      },
    ],
  },
  {
    id: 7,
    title: "Blog",
    newTab: false,
    path: "/contact",
  },
  {
    id: 8,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];
