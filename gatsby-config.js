module.exports = {
  siteMetadata: {
    title: `My Profile Site`,
    description: `カルキチ副島の自己紹介サイト`,
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
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        // Maybeの型定義をオーバーライドする
        // https://qiita.com/dozensofdars/items/a5d5a68104cb6fea30cf
        codegenConfig: { maybeValue: 'T | undefined' }, // これを追加！
      },
    },
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
