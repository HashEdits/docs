import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/docs/',

  title: "Hash Face Tracking",
  description: "Face Tracking by Hash",

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [
          { text: "Setup", link: "/setup/" },
          { text: "Common issues", link: "/common-issues/" },
        ],

        sidebar: [
          { text: "Setup", link: "/setup/" },
          {
            text: "Customisation",
            items: [
              {
                text: "Apply to custom avatar",
                link: "/customisation/apply-to-custom-avatar",
              },
              {
                text: "Upgrade FT version",
                link: "/customisation/upgrade-ft-version",
              },
            ],
          },
          { text: "Common issues", link: "/common-issues/" },
        ],
      },
    },
    fr: {
      label: "French",
      lang: "fr",
      themeConfig: {
        nav: [
          { text: "Installation", link: "/fr/setup/" },
          { text: "Problème courants", link: "/fr/common-issues/" },
        ],

        sidebar: [
          { text: "Installation", link: "/fr/setup/" },
          {
            text: "Personnalisation",
            items: [
              {
                text: "Apply to custom avatar",
                link: "/fr/customisation/apply-to-custom-avatar",
              },
              {
                text: "Mettre à jour la version du FT",
                link: "/fr/customisation/upgrade-ft-version",
              },
            ],
          },
          { text: "Problème courants", link: "/fr/common-issues/" },
        ],
      },
    },
  },

  rewrites: {
    "_i18n/fr/:slug*": "fr/:slug*",
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    socialLinks: [
      { icon: "github", link: "https://github.com/HashEdits" },
      { icon: "youtube", link: "https://www.youtube.com/@HashEdits" },
      { icon: "twitter", link: "https://twitter.com/Hash2305" },
      { icon: "bluesky", link: "https://bsky.app/profile/hashe.bsky.social" },
      { icon: "kofi", link: "https://ko-fi.com/hashedits" }
    ],
  },
});
