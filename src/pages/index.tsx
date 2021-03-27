import * as React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

type DataProps = {
  site: {
    buildTime: string
  }
}

const Home: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Layout>
      <SEO 
        description="カルキチ副島の自己紹介サイト"
        title='My Propfile Site'
      />
      <h2 className="heading">カルキチ副島</h2>
      <p>どちらかというとフロントの方が好きですが、5月からはバックエンドメインでやることになりそうです。</p>
      <p>JamstackとVimが好きです。</p>
      <h2 className="heading">Career</h2>
      <p>簡単なHTMLコーディング・サイトデザイン: 2018〜2019</p>
      <p>ウェブ制作・ウェブ開発: 2020〜</p>
      <h2 className="heading">Skills</h2>
      <div className="flex flex-wrap max-w-screen-sm">
        <span className="label">HTML</span>
        <span className="label">CSS・SCSS</span>
        <span className="label">JavaScript</span>
        <span className="label">TypeScript</span>
        <span className="label">React</span>
        <span className="label">PHP</span>
        <span className="label">Laravel</span>
        <span className="label">WordPress</span>
        <span className="label">Docker</span>
      </div>
      <h2 className="heading">Twitter・GitHub・Blog</h2>
      <ul className="ml-5 list-disc">
        <li>
          <a href="https://twitter.com/karukichi_yah">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/Yota-K">GitHub</a>
        </li>
        <li>
          <a href="https://karukichi-blog.netlify.app/">カルキチのブログ</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Home

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
