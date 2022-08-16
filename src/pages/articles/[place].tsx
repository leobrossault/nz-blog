import type { NextPage } from 'next'
import { fetchApi } from '../../api'
import { Place } from '../../types'

import Seo from '../../components/commons/seo/seo'
import Layout from '../../components/commons/layout/layout'

const PlacePage: NextPage = ({ place }: Place) => {
  return (
    <>
      <Seo
        specificSeo={{
          metatitle: `${place.attributes.title} | Articles`
        }}
      />

      <Layout>{place.attributes.title}</Layout>
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
    filters: {
      slug: params.place
    }
  })

  return {
    props: {
      place: data[0]
    }
  }
}
