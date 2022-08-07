import { fetchApi } from '../api'
import { routes } from '../constants'

import type { NextPage } from 'next'

import Seo from '../components/commons/seo/seo'
import Layout from '../components/commons/layout/layout'
import { Link } from '../components/library'

const Home: NextPage = ({ articles }: any) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: 'Bienvenue'
        }}
      />

      <Layout>
        <div className="text-xl text-red-400 p-10">Test</div>

        {articles.map((article: any) => (
          <Link
            href={{
              pathname: routes.article,
              query: {
                slug: article.attributes.slug
              }
            }}
            key={article.id}
          >
            {article.attributes.title}
          </Link>
        ))}
      </Layout>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const { data } = await fetchApi('articles')

  return {
    props: {
      articles: data
    }
  }
}
