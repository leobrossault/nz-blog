export interface Article {
  title: string
  introduction: string
  body: string
  images: Image[]
  place: Place
  tags: Tag[]
}

export interface Place {
  title: string
  latitude: string
  longitude: string
  images: Image[]
}

export interface Tag {
  title: string
  color: string
}

export interface Image {
  src: string
}
