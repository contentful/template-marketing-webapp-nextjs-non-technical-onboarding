import dynamic from 'next/dynamic';

export const componentGqlMap = {
  ComponentDuplex: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-duplex/ctf-duplex-gql').then(
      module => module.CtfDuplexGql,
    ),
  ),
  ComponentHeroBanner: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-hero-banner/ctf-hero-banner-gql').then(
      module => module.CtfHeroGql,
    ),
  ),
  ComponentQuote: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-quote/ctf-quote-gql').then(
      module => module.CtfQuoteGql,
    ),
  ),
  ComponentFooter: dynamic(() =>
    import('@src/components/features/ctf-components/ctf-footer/ctf-footer-gql').then(
      module => module.CtfFooterGql,
    ),
  ),
};
