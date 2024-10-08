import React from 'react';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import { useCtfFooterQuery } from './__generated/ctf-footer.generated';
import { CtfFooter } from './ctf-footer';

import { useContentfulContext } from '@src/contentful-context';

export const CtfFooterGql = () => {
  const { locale, previewActive } = useContentfulContext();

  const { data, isLoading } = useCtfFooterQuery({
    locale,
    preview: previewActive,
  });

  const footerMenuCollection = useContentfulLiveUpdates(data?.footerMenuCollection, locale);

  if (!footerMenuCollection || isLoading) return null;

  return <CtfFooter {...footerMenuCollection} />;
};
