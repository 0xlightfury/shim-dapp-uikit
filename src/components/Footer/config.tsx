import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.shim.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://medium.com/#",
      },
      {
        label: "Community",
        href: "https://docs.shim.finance",
      },
      {
        label: "Shim Token",
        href: "https://docs.shim.finance",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://shop.shim.finance/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://docs.shim.finance",
      },
      {
        label: "Troubleshooting",
        href: "hhttps://docs.shim.finance",
      },
      {
        label: "Guides",
        href: "https://docs.shim.finance/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      {
        label: "Documentation",
        href: "https://docs.shim.finance/",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.shim.finance/",
      },
      {
        label: "Audits",
        href: "https://docs.shim.finance/",
      },
      {
        label: "Careers",
        href: "https://docs.shim.finance/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/ShimFinance01",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/EUNJ4hkqWE",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/ShimFinanceDiscussion",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/ShimFinance",
  },
  // {
  //   label: "Reddit",
  //   icon: "Reddit",
  //   href: "https://www.reddit.com/#",
  // },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/Shimfinance/",
  },
  {
    label: "Youtube",
    icon: "Youtube",
    href: "https://www.youtube.com/#",
  },
  // {
  //   label: "Github",
  //   icon: "Github",
  //   href: "https://github.com/#",
  // },
  
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
