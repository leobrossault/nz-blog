import { fetchApi } from '../api'
import { routes } from '../constants'

import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import Seo from '../components/commons/seo/seo'
import Layout from '../components/commons/layout/layout'
import { Link } from '../components/library'

import Hero from '../components/homepage/hero'

const Home: NextPage = ({ articles, homepage, places }: any) => {
  const Map = dynamic(() => import('../components/map/map'), {
    ssr: false
  })

  return (
    <>
      <Seo
        specificSeo={{
          metatitle: 'Bienvenue'
        }}
      />

      <Layout>
        <Hero mainPhoto={homepage.attributes.main_photo} />

        <Map places={places} />

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
  const articlesData = await fetchApi('articles')
  const placesData = await fetchApi('places')
  const homepageData = await fetchApi('homepage', {
    populate: 'main_photo'
  })

  return {
    props: {
      homepage: homepageData.data,
      places: placesData.data,
      articles: articlesData.data
    }
  }
}
