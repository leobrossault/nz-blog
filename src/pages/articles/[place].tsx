import type { NextPage } from 'next'
import { fetchApi } from '../../api'
import { Article, Place } from '../../types'
import { getMedia } from '../../api/media'
import { routes } from '../../constants'

import Seo from '../../components/commons/seo/seo'
import Layout from '../../components/commons/layout/layout'
import { Title, Text } from '../../components/library'
import MinimalArticle from '../../components/articles/minimal-article'

const PlacePage: NextPage<{
  place: Place
  articles: Array<Article>
}> = ({ place, articles }) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: `${place.attributes.title} | Articles`
        }}
      />

      <Layout
        useHeader={true}
        back={{ href: { pathname: routes.home }, label: "Retour à l'accueil" }}
      >
        <div className="relative z-0 top-[-90px] mb-[-90px] grid items-end h-[450px]">
          <img
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={getMedia(place.attributes.image, 'default')}
            alt={place.attributes.title}
          />

          <div className="relative z-10">
            <div className="container pb-xl prose">
              <Title className="text-white">{place.attributes.title}</Title>
            </div>
          </div>
        </div>

        <div className="container mt-xxl">
          <div className="grid grid-cols-3 gap-m">
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
