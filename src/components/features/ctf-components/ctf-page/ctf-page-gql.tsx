import Head from 'next/head';

import CtfPage from './ctf-page';

import { useCtfPageQuery } from '@src/components/features/ctf-components/ctf-page/__generated/ctf-page.generated';
import { PageError } from '@src/components/features/errors/page-error';
import { useContentfulContext } from '@src/contentful-context';
import { tryget } from '@src/utils';
import contentfulConfig from 'contentful.config';

interface Props {
  topic?: string;
  slug: string;
}

const CtfPageGgl = ({ slug: slugFromProps }: Props) => {
  const { locale } = useContentfulContext();

  const slug = !slugFromProps || slugFromProps === '/' ? 'home' : slugFromProps;

  const { previewActive } = useContentfulContext();

  const { isLoading, data } = useCtfPageQuery({
    slug,
    locale,
    preview: previewActive,
  });

  const page = tryget(() => data?.pageCollection!.items[0]);

  if (isLoading) return <></>;
  if (!page) {
    const error = {
      code: 404,
      message:
        'We were not able to locate the content you were looking for, please check the url for possible typos',
    };
    return <PageError error={error} />;
  }

  return (
    <>
      <Head>
        {page.slug && (
          <meta
            key="og:url"
            property="og:url"
            content={`${contentfulConfig.meta.url}/${page.slug === 'home' ? '' : `/${page.slug}`}`}
          />
        )}
        <meta key="og:locale" property="og:locale" content={locale} />
      </Head>
      <CtfPage {...page} />
    </>
  );
};

export default CtfPageGgl;
