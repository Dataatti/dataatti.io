module.exports = {
  siteMetadata: {
    title: `Coffecream`,
    description: `Landpager is a great and fast landing page template built on Gatsby and React. It’s suitable for marketing, startups and all kind of professionals. It includes pixel perfect designs crafted in Figma.`,
    author: `@coffecream`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pagerland - Coffecream`,
        short_name: `Pagerland`,
        start_url: `/`,
        background_color: `#189AB4`,
        theme_color: `#189AB4`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Work Sans:400,400i,600`, `Inter:400,600`],
        display: 'swap',
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
