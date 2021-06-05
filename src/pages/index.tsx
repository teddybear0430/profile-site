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

  const labels = [
    'HTML',
    'CSS・SCSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'PHP',
    'Laravel',
    'WordPress',
    'Docker',
  ];

  const urls = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/karukichi_yah',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Yota-K',
    },
    {
      name: 'カルキチのブログ',
      url: 'https://karukichi-blog.netlify.app/',
    },
  ];

  return (
    <Layout>
      <SEO title={title} description={description} author={author} />
      <h2 className="heading">About</h2>
      <Img className="w-32 rounded-full border border-gray-200 my-2" fluid={data.icon?.childImageSharp?.fluid!} />
      <div className="md:text-base text-sm">
        <p>東京23区のどこかに住んでるウェブエンジニアです。</p>
        <p>ウェブエンジニアになる前に、HTML・CSS・WordPress・jQueryを使ったサイトのコーディングと</p>
        <p>
          デザイン（フォトショ・イラレ）をやっていた時期があったので、ウェブに携わってる期間自体は3年くらいあります。
        </p>
        <br />
        <p>デザインが苦手だったことや、なんとなくコーディングよりもウェブ開発の方が性に合ってそうと考えたのを機に、</p>
        <p>2019年の5月頃からプログラミングの学習を開始。</p>
        <p>2020年頃からウェブエンジニアとしてのキャリアをスタートしました。</p>
        <br />
        <p>JamstackとVimが好きで、最近はCUIツール（tmux・Tig・rangerあたりがきてる）にも興味が出てきました。</p>
      </div>
      <h2 className="heading">Career</h2>
      <div className="md:text-base text-sm">
        <p>簡単なHTMLコーディング・サイトデザイン: 2018〜2020年3月頃まで</p>
        <p>ウェブ制作系の企業でエンジニア: 2020年4月頃〜</p>
      </div>
      <h2 className="heading">Skills</h2>
      <div className="flex flex-wrap max-w-screen-sm md:text-base text-sm">
        {labels.map((el, i) => (
          <span key={i} className="label">
            {el}
          </span>
        ))}
      </div>
      <h2 className="heading">Twitter・GitHub・Blog</h2>
      <ul className="ml-5 list-disc md:text-base text-sm">
        {urls.map((el, i) => (
          <li>
            <a key={i} className="hover:text-indigo-600" href={el.url}>
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
