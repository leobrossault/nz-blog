import { getServerUrl } from './index'
import { Media } from '../types'

export function getMedia(media: Media, format: string = 'medium') {
  if (format === 'default') {
    return getServerUrl(media.data.attributes.url)
  }

  return getServerUrl(media.data.attributes.formats[format].url)
}
