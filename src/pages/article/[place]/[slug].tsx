import type { NextPage } from 'next'
import { fetchApi } from '../../../api'

import Seo from '../../../components/commons/seo/seo'
import Layout from '../../../components/commons/layout/layout'

const Slug: NextPage = ({ article }: any) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: article.attributes.title
        }}
      />

      <Layout>{article.attributes.title}</Layout>
    </>
  )
}

export default Slug

export async function getStaticPaths() {
  const articlesRes = await fetchApi('articles')

  return {
    paths: articlesRes.data.map((article: any) => ({
      params: {
        slug: article.attributes.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const { data } = await fetchApi('articles', {
    filters: {
      slug: params.slug
    }
  })

  return {
    props: {
      article: data[0]
    }
  }
}
