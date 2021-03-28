import * as React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
  author?: string;
};

function SEO({ title, description, author }: Props) {
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    />
  );
}

export default SEO;
