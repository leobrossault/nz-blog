import type { NextPage } from 'next'

import Seo from '../components/commons/seo/seo'
import Layout from '../components/commons/layout/layout'

const Articles: NextPage = () => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: 'Les articles'
        }}
      />

      <Layout>Les articles</Layout>
    </>
  )
}

export default Articles
