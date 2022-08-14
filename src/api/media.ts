import { getServerUrl } from './index'

export function getMedia(media: object, format: string = 'medium') {
  if (format === 'default') {
    return getServerUrl(media.data.attributes.url)
  }

  return getServerUrl(media.data.attributes.formats[format])
}
