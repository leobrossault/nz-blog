import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import { fetchApi } from '../api'
import { Article, ArticleMap } from '../types'
import { getMedia } from '../api/media'
import { routes } from '../constants'

import Seo from '../components/commons/seo/seo'
import Layout from '../components/commons/layout/layout'
import { Title, Link } from '../components/library'
import { ArrowRight } from 'react-feather'

import Hero from '../components/homepage/hero'
import Description from '../components/homepage/description'
import CurrentPlaceInfos from '../components/homepage/current-place-infos'
import CurrentPlaceLink from '../components/homepage/current-place-link'
import MinimalArticle from '../components/articles/minimal-article'
import Image from 'next/image'

const Map = dynamic(() => import('../components/map/map'), {
  ssr: false
})

const Home: NextPage = ({ articles, homepage, places, global }: any) => {
  const [currentPlace, setCurrentPlace] = useState<ArticleMap | undefined>()

  function onMarkerClick(place: ArticleMap) {
    setCurrentPlace(place)
  }

  return (
    <>
      <Seo
        specificSeo={{
          metatitle: 'Bienvenue'
        }}
      />

      <Layout>
        <div className="relative">
          <Image
            layout="fill"
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={getMedia(homepage.attributes.main_photo, 'default')}
            alt=""
            blurDataURL={
              homepage.attributes.main_photo.data.attributes.placeholder
            }
            placeholder="blur"
            priority
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
          {currentPlace && (
            <CurrentPlaceLink
              place={currentPlace}
              setCurrentPlace={setCurrentPlace}
            />
          )}

          <Map places={places} onMarkerClick={onMarkerClick} />
        </div>

        <div className="container px-[5%] mt-xxl xl:px-0">
          <div className="text-center prose mb-l">
            <Title tag="h2" className="font-head text-4xl">
              On vous en dit plus
            </Title>

            <Title tag="h3" className="uppercase">
              Sur nos trajets, nos rencontres, nos découvertes ...
            </Title>
          </div>

          <div className="grid grid-cols-1 gap-m md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article: Article) => (
              <MinimalArticle
                key={article.id}
                title={article.attributes.title}
                place={article.attributes.place?.data}
                image={article.attributes.main}
                introduction={article.attributes.introduction}
                slug={article.attributes.slug}
                date={article.attributes.createdAt}
                showPlace={true}
              />
            ))}
          </div>

          <div className="flex justify-end mt-l">
            <Link href={{ pathname: routes.allArticles }}>
              <a className="flex items-center gap-s text-slate-500 hover:underline">
                Voir tous les articles
                <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const articlesData = await fetchApi('articles', {
    sort: 'createdAt:desc',
    populate: ['main', 'place'],
    pagination: {
      limit: 6
    }
  })
  const placesData = await fetchApi('articles', {
    populate: ['map_image', 'place'],
    filters: {
      enable_on_map: true
    },
    pagination: {
      limit: 40
    }
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
