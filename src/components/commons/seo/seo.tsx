import Head from 'next/head'
import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import { SeoData } from '../../../types'

const Seo = ({ specificSeo }: { specificSeo: SeoData }) => {
  const { seo }: any = useContext(GlobalContext)

  const seoWithDefaults = {
    ...seo,
    ...specificSeo
  }

  const fullSeo = {
    ...seoWithDefaults,
    metaTitle: `${seoWithDefaults.metatitle} | ${seoWithDefaults.sitetitle}`,
    metaDescription:
      seoWithDefaults.metadescription || seoWithDefaults.sitedescription
  }

  console.log(fullSeo)

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#356174" />
      <meta name="msapplication-TileColor" content="#356174" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default Seo
