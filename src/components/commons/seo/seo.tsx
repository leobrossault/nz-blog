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
    metaTitle: `${seoWithDefaults.metatitle} | ${seoWithDefaults.sitetitle}`
  }

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
    </Head>
  )
}

export default Seo
