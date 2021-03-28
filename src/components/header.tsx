import * as React from 'react';
import { Link } from 'gatsby';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header className="mb-4 p-4 bg-indigo-600">
    <div className="container">
      <h1 className="inline-block md:text-3xl text-2xl font-semibold tracking-wide text-white">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

export default Header;
