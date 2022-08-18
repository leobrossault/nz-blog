import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { fetchApi } from '../api'
import { Article } from '../types'
import { routes } from '../constants'
import { getMedia } from '../api/media'

import Seo from '../components/commons/seo/seo'
import Layout from '../components/commons/layout/layout'
import { Link } from '../components/library'

import Hero from '../components/homepage/hero'
import Description from '../components/homepage/description'
import CurrentPlaceInfos from '../components/homepage/current-place-infos'
import CurrentPlaceLink from '../components/homepage/current-place-link'

const Home: NextPage = ({ articles, homepage, places, global }: any) => {
  const Map = dynamic(() => import('../components/map/map'), {
    ssr: false
  })
  const [currentPlace, setCurrentPlace] = useState()

  return (
    <>
      <Seo
        specificSeo={{
          metatitle: 'Bienvenue'
        }}
      />

      <Layout>
        <div className="relative">
          <img
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={getMedia(homepage.attributes.main_photo, 'default')}
          />

          <div className="relative z-1">
            <Hero logo={global.attributes.seo.logo} />

            <Description
              description={homepage.attributes.description}
              photo={homepage.attributes.photo_us}
            />
          </div>
        </div>

        <div className="relative">
          {currentPlace && <CurrentPlaceInfos place={currentPlace} />}
          {currentPlace && <CurrentPlaceLink place={currentPlace} />}

          <Map places={places} setCurrentPlace={setCurrentPlace} />
        </div>

        {articles.map((article: Article) => (
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
  const placesData = await fetchApi('places', {
    populate: ['image']
  })
  const homepageData = await fetchApi('homepage', {
    populate: ['main_photo', 'photo_us']
  })

  return {
    props: {
      homepage: homepageData.data,
      places: placesData.data,
      articles: articlesData.data
    }
  }
}
