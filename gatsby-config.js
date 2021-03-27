module.exports = {
  siteMetadata: {
    title: `My Profile Site`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `カルキチ副島`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // GraphQLリクエストのレスポンスの型を生成するプラグイン
    `gatsby-plugin-typegen`,
    // Gatsbyでpostcssを使うために必要
    `gatsby-plugin-postcss`,
      {
      // ビルド時に、tailwindcssの実際に使われているクラスをチェックし、
      // そのクラスのスタイルだけをCSSファイルに含めるようにする
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // 削除されたCSSの容量を表示 
        regected: true,
        // 削除したCSSを最大100個まで一覧表示
        printRejected: false,
        // TailwindCSS使用時はTrue default: false
        tailwind: true,
        // 開発環境でbuildした時もCSSを削除
        develop: false,
      },
    }
  ],
}
