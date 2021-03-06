module.exports = {
  siteMetadata: {
    title: 'clouWay Doc Site'  
  },
  plugins: [
    'gatsby-plugin-react-helmet',  
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `MenuItems`, // a fixed string
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `menuItems`,
        path: `${__dirname}/src/menuItems`,
      },
    },  
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'docs.clouway.com',
        short_name: 'clouway docs',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/clouway-icon.png'
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-component',
          `gatsby-remark-katex`,          
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: 'post-toc-anchor',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-remove-trailing-slashes`    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  pathPrefix: '/',
}
