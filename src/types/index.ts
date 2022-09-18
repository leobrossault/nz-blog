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

export interface Place {
  id: number
  attributes: {
    title: string
    slug: string
    latitude: string
    longitude: string
    map_image: Media
    banner_image: Media
    start: string
    end?: string
    timezone: string | undefined
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
