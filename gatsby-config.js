module.exports = {
  siteMetadata: {
    title: `Booklet`,
    name: `Booklet`,
    siteUrl: `https://blog.kv47.in/`,
    description: `Technical articles and blog posts from kv47.in`,
    hero: {
      heading: `Hello World, Welcome to the booklet. Whats here? articles, video links and all interesting information I gathered from internet.`,
      maxWidth: 1200,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/Kailash_Vetal`,
      },
      {
        name: `github`,
        url: `https://github.com/kailashvetal47`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/vitalk47`,
      },
      {
        name: `linkedin`,
        url: `www.linkedin.com/in/kv47`,
      },
      
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        authorsPath: "about-me",
        mailchimp: false,
        articlePermalinkFormat: ":year/:month/:day/:slug"
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Booklet by KV`,
        short_name: `Booklet`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon_512x512.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118232427-3",
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'dddd D MMMM YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
      },
    },
  ],
};
