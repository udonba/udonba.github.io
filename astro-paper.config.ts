import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://udonba.github.io/",
    title: "坂東 光樹",
    description: "XR / Unity Engineer. C# and Unity client-side developer for AR, VR, MR, and Windows applications.",
    author: "坂東 光樹",
    profile: "https://github.com/udonba",
    ogImage: "default-og.jpg",
    lang: "ja",
    timezone: "Asia/Tokyo",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: false,
  },
  socials: [
    { name: "github",   url: "https://github.com/udonba", linkTitle: "GitHub" },
    { name: "x",        url: "https://x.com/_udonba", linkTitle: "X" },
    { name: "linkedin", url: "https://www.linkedin.com/in/mitsuki-bando", linkTitle: "LinkedIn" },
  ],
  shareLinks: [],
});
