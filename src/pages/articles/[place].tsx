import type { NextPage } from 'next'
import { fetchApi } from '../../api'
import { Article, Place } from '../../types'
import { getMedia } from '../../api/media'
import { routes } from '../../constants'

import Seo from '../../components/commons/seo/seo'
import Layout from '../../components/commons/layout/layout'
import { Title, Text } from '../../components/library'
import MinimalArticle from '../../components/articles/minimal-article'
import Image from 'next/image'

const PlacePage: NextPage<{
  place: Place
  articles: Array<Article>
}> = ({ place, articles }) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: `${place.attributes.title} | Articles`,
          metadescription: `Tous les articles à ${place.attributes.title} en Nouvelle Zélande`,
          metaimage: place.attributes.image
        }}
      />

      <Layout
        useHeader={true}
        back={{ href: { pathname: routes.home }, label: "Retour à l'accueil" }}
      >
        <div className="relative z-0 top-[-95px] mb-[-95px] grid items-end h-[450px]">
          <Image
            layout="fill"
            className="absolute inset-0 z-0 object-cover"
            src={getMedia(place.attributes.image, 'default')}
            alt={place.attributes.title}
            blurDataURL={place.attributes.image.data.attributes.placeholder}
            placeholder="blur"
          />

          <div className="relative z-10">
            <div className="container pb-xl prose px-[5%] xl:px-0">
              <Title className="text-white">{place.attributes.title}</Title>
            </div>
          </div>
        </div>

        <div className="container mt-xxl px-[5%] xl:px-0">
          <div className="grid grid-cols-1 gap-m md:grid-cols-2 xl:grid-cols-3">
            {articles.length ? (
              articles.map((article: Article) => (
                <MinimalArticle
                  key={article.id}
                  slugPlace={article.attributes.place?.data.attributes.slug}
                  title={article.attributes.title}
                  image={article.attributes.main}
                  introduction={article.attributes.introduction}
                  slug={article.attributes.slug}
                  date={article.attributes.createdAt}
                />
              ))
            ) : (
              <Text>Aucun article publié pour le moment ...</Text>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default PlacePage

export async function getStaticPaths() {
  const placesRes = await fetchApi('places')

  return {
    paths: placesRes.data.map((place: any) => ({
      params: {
        place: place.attributes.slug
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const { data } = await fetchApi('places', {
    populate: ['image'],
    filters: {
      slug: params.place
    }
  })

  const { data: articles } = await fetchApi('articles', {
    populate: ['main', 'place'],
    filters: {
      place: data[0].id
    }
  })

  return {
    props: {
      place: data[0],
      articles
    }
  }
}
