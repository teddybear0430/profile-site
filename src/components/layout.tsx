import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../utils/global.css';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const data = useStaticQuery<GatsbyTypes.SiteTitleQueryQuery>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site?.siteMetadata?.title || `Title`} />
      <div className="m-auto max-w-screen-lg p-4">
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
