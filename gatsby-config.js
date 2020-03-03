module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    hero: {
      heading: `Hello World, Its me KV`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
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
        mailchimp: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
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
        locale: 'fr', // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
      },
    },
  ],
};
