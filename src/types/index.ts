export interface Article {
  id: number
  attributes: {
    title: string
    introduction: string
    body: string
    slug: string
    images?: Image[]
    place?: Place
    tags?: Tag[]
  }
}

export interface Place {
  id: number
  attributes: {
    title: string
    slug: string
    latitude: string
    longitude: string
    image: Image
    start: string
    end?: string
  }
}

export interface Tag {
  title: string
  color: string
}

export interface Image {
  src: string
}

export interface Media {
  data: {
    id: number
    attributes: {
      url: string
      formats: {
        [key: string]: any
      }
    }
  }
}

export interface SeoData {
  metatitle: string
}
