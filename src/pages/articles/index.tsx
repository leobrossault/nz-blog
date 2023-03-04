import type { NextPage } from 'next'
import { fetchApi } from '../../api'
import { Article, AllArticlePage } from '../../types'
import { getMedia } from '../../api/media'
import { routes } from '../../constants'

import Seo from '../../components/commons/seo/seo'
import Layout from '../../components/commons/layout/layout'
import Image from 'next/image'
import { Text, Title } from '../../components/library'
import MinimalArticle from '../../components/articles/minimal-article'

const AllArticlesPage: NextPage<{
  page: AllArticlePage
  articles: any
}> = ({ page, articles }) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: 'Tous les articles',
          metadescription: `Tous les articles`
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
            src={getMedia(page.attributes.image, 'default')}
            alt={page.attributes.title}
            blurDataURL={page.attributes.image.data.attributes.placeholder}
            placeholder="blur"
          />

          <div className="relative z-10">
            <div className="container pb-xl prose px-[5%] xl:px-0">
              <Title className="text-white">{page.attributes.title}</Title>
            </div>
          </div>
        </div>

        <div className="container mt-xxl px-[5%] xl:px-0">
          <div className="grid grid-cols-1 gap-m md:grid-cols-2 xl:grid-cols-3">
            {articles.length ? (
              articles.map((article: Article) => (
                <MinimalArticle
                  key={article.id}
                  place={article.attributes.place?.data}
                  title={article.attributes.title}
                  image={article.attributes.main}
                  introduction={article.attributes.introduction}
                  slug={article.attributes.slug}
                  date={article.attributes.createdAt}
                  showPlace={true}
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

export default AllArticlesPage

export async function getStaticProps() {
  const { data: page } = await fetchApi('all-article', {
    populate: ['image']
  })

  const { data } = await fetchApi('articles', {
    sort: 'createdAt:desc',
    populate: ['main', 'place'],
    /* pagination: {
      pageSize: 1
    } */ pagination: {
      limit: 100
    }
  })

  return {
    props: {
      page,
      articles: data
    }
  }
}
