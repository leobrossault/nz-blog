export interface Article {
  id: number
  attributes: {
    title: string
    introduction: string
    body: string
    slug: string
    createdAt: string
    main: Media
    images?: {
      data?: Media[] | undefined
    }
    place?: {
      data: Place
    }
    tags?: Tag[] | undefined
  }
}

export interface ArticleMap {
  id: number
  attributes: {
    title: string
    createdAt: string
    latitude: string
    longitude: string
    enable_on_map: boolean
    map_image: Media
    slug: string
    timezone: string
    place?: {
      data: Place
    }
  }
}

export interface Place {
  id: number
  attributes: {
    title: string
    slug: string
    banner_image: Media
  }
}

export interface Tag {
  title: string
  color: string
}

export interface Media {
  data: {
    id: number
    attributes: {
      url: string
      formats: {
        [key: string]: any
      }
      placeholder: string
      caption: string
    }
  }
}

export interface SeoData {
  metatitle: string
  metadescription?: string
  metaimage?: Media
}

export interface AllArticlePage {
  id: number
  attributes: {
    title: string
    image: Media
  }
}
