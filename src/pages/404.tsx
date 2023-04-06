import { dehydrate, QueryClient } from '@tanstack/react-query';
import { GetStaticProps } from 'next';

import { PageError } from '@src/components/features/errors/page-error';
import { getServerSideTranslations } from '@src/lib/get-serverside-translations';

const ErrorPage404 = () => {
  return <PageError error={{ code: 404 }} />;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  return {
    props: {
      ...(await getServerSideTranslations(locale)),
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default ErrorPage404;
