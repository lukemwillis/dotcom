module.exports = {
  siteMetadata: {
    title: "Luke Willis"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 700
            }
          }
        ]
      }
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
