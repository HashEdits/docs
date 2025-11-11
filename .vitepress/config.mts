import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: '/docs/',

  title: "Hash Face Tracking",
  description: "Face Tracking by Hash",

  appearance: 'force-dark',

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
      { icon: "kofi", link: "https://ko-fi.com/hashedits" },
      { 
        icon: { 
          svg: '<svg viewBox="0 0 166.06673 166.15482"><defs id="defs1" /><g id="layer1" transform="translate(-26.19677,-48.072035)"><path style="fill:currentColor" d="m 60.58154,213.87339 c -0.217089,-0.26158 -0.316845,-8.9404 -0.365738,-31.8193 l -0.06723,-31.45961 -6.085416,-0.13229 c -5.779333,-0.12564 -6.145303,-0.16416 -7.276042,-0.76578 -1.854255,-0.98658 -2.788498,-1.79464 -3.796276,-3.2835 -1.848878,-2.73149 -1.759975,-1.04244 -1.759975,-33.43729 V 83.787183 h -7.243645 c -5.803536,0 -7.303335,-0.07192 -7.54388,-0.361762 -0.214925,-0.258968 -0.280516,-3.172215 -0.230835,-10.252604 l 0.0694,-9.890843 7.46557,-0.07025 7.46557,-0.07025 0.07506,-2.840166 0.07505,-2.840166 9.525,-0.07376 c 5.238751,-0.04057 9.792408,-0.0087 10.119238,0.07092 l 0.594238,0.144678 0.06722,31.492468 0.06722,31.492472 8.313447,-19.65713 C 86.38196,62.312736 89.689346,54.557073 89.969373,54.219661 c 0.217187,-0.261694 1.409374,-0.325133 5.075283,-0.270069 l 4.791415,0.07197 0.983899,1.984375 c 0.54114,1.091406 3.75284,7.808617 7.13711,14.927135 3.38426,7.118517 6.75151,14.175097 7.48277,15.681287 l 1.32956,2.738528 8.3053,-20.046913 c 4.56791,-11.025802 8.46996,-20.314803 8.6712,-20.642225 0.36013,-0.58591 0.45043,-0.595248 5.71762,-0.591261 2.94344,0.0022 5.48419,0.09153 5.6461,0.198438 0.378,0.249599 0.0658,-0.244055 17.38475,27.493595 l 14.73232,23.595043 v 6.324626 6.3246 l 7.19082,6.32827 c 3.95496,3.48054 7.34917,6.48652 7.5427,6.67996 0.28647,0.28632 0.3392,3.28631 0.28366,16.13957 l -0.0682,15.78789 -7.47448,0.0703 -7.47448,0.0703 v 28.41028 c 0,25.66239 -0.0405,28.42582 -0.41851,28.57088 -0.23019,0.0883 -3.49467,0.1606 -7.25441,0.1606 -3.75973,0 -7.02421,-0.0723 -7.2544,-0.1606 -0.36638,-0.14059 -0.41916,-1.0057 -0.42368,-6.94531 -0.003,-4.28692 -0.14163,-7.80963 -0.37584,-9.56867 -2.7896,-20.95116 -19.8544,-37.32822 -42.30821,-40.60311 -3.77594,-0.55072 -10.19676,-0.55251 -13.13787,-0.004 -12.667197,2.36385 -21.911416,11.03803 -24.530493,23.01781 -0.326985,1.49564 -0.436887,4.95818 -0.571064,17.99167 l -0.166153,16.13958 -9.953012,0.0693 c -8.130588,0.0566 -10.00767,0.003 -10.251521,-0.29038 z" id="path1" /></g></svg>'
        }, 
        link: "https://hashedits.booth.pm" 
      }
    ],
  },
});
