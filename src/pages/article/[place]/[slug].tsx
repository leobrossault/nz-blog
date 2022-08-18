import type { NextPage } from 'next'
import { fetchApi } from '../../../api'
import { Place, Article } from '../../../types'
import { routes } from '../../../constants'

import Seo from '../../../components/commons/seo/seo'
import Layout from '../../../components/commons/layout/layout'
import { getMedia } from '../../../api/media'
import { Title, Text, Link } from '../../../components/library'

const Slug: NextPage = ({ article }: { article: Article }) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: article.attributes.title
        }}
      />

      <Layout useHeader={true}>
        <div className="relative z-0 top-[-90px] mb-[-90px] grid items-end h-[600px]">
          <img
            className="absolute inset-0 z-0 w-full h-full object-cover"
            src={getMedia(article.attributes.main, 'default')}
            alt={article.attributes.title}
          />

          <div className="relative z-10">
            <div className="container pb-[200px] prose">
              <Title className="text-white">{article.attributes.title}</Title>

              <div>
                <Text className="font-secondHead text-white uppercase text-xl font-light">
                  À{' '}
                  <Link
                    href={{
                      pathname: routes.articles,
                      query: {
                        place: article.attributes.place.data.attributes.slug
                      }
                    }}
                  >
                    <a className="underline">
                      {article.attributes.place.data.attributes.title}
                    </a>
                  </Link>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Slug

export async function getStaticPaths() {
  const placesRes = await fetchApi('places')
  const allArticlesPaths = placesRes.data.map(async (place: Place) => {
    const articlesRes = await fetchApi('articles', {
      filters: {
        place: place.id
      }
    })

    return articlesRes.data.map((article: Article) => ({
      params: {
        place: place.attributes.slug,
        slug: article.attributes.slug
      }
    }))
  })

  const articlesPaths = await Promise.all(allArticlesPaths)

  return {
    paths: articlesPaths.flat(),
    fallback: false
  }
}

export async function getStaticProps({ params }: any) {
  const { data } = await fetchApi('articles', {
    populate: ['main', 'images', 'place'],
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
