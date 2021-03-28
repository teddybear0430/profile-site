import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

export const query = graphql`
  query Home {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    icon: file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Home = ({ data }: PageProps<GatsbyTypes.HomeQuery>) => {
  const title = data.site?.siteMetadata?.title;
  const description = data.site?.siteMetadata?.description;
  const author = data.site?.siteMetadata?.author;

  return (
    <Layout>
      <SEO title={title} description={description} author={author} />
      <h2 className="heading">{author}</h2>
      <Img className="w-32 rounded-full border border-gray-200 my-2" fluid={data.icon?.childImageSharp?.fluid!} />
      <div className="md:text-base text-sm">
        <p>東京23区のどこかに住んでるウェブエンジニアです。</p>
        <p>ウェブエンジニアになる前に、HTML・CSS・WordPress・jQueryを使ったサイトのコーディングと</p>
        <p>デザイン（フォトショ・イラレ）をやっていた時期があったので、ウェブに携わってる期間自体は3年くらいあります。</p>
        <br />
        <p>デザインが苦手だったことや、なんとなくコーディングよりもウェブ開発の方が性に合ってそうと考えたのを機に、</p>
        <p>2020年頃からウェブエンジニアとしてのキャリアをスタートしました。</p>
        <br />
        <p>どちらかというとフロントの方が好きですが、転職を機に2021年の5月からはバックエンドメインでやることになりそうです。</p>
        <p>JamstackとVimが特に好きで、最近はCLIツール（tmux・Tig・rangerあたりがきてる）にも興味が出てきました。</p>
      </div>
      <h2 className="heading">Career</h2>
      <div className="md:text-base text-sm">
        <p>簡単なHTMLコーディング・サイトデザイン: 2018〜2020年3月頃まで</p>
        <p>ウェブエンジニア: 2020年4月頃〜</p>
      </div>
      <h2 className="heading">Skills</h2>
      <div className="flex flex-wrap max-w-screen-sm md:text-base text-sm">
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
      <ul className="ml-5 list-disc md:text-base text-sm">
        <li>
          <a className="hover:text-indigo-600" href="https://twitter.com/karukichi_yah">
            Twitter
          </a>
        </li>
        <li>
          <a className="hover:text-indigo-600" href="https://github.com/Yota-K">
            GitHub
          </a>
        </li>
        <li>
          <a className="hover:text-indigo-600" href="https://karukichi-blog.netlify.app/">
            カルキチのブログ
          </a>
        </li>
      </ul>
    </Layout>
  );
};

export default Home;
