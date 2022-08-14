import qs from 'qs'

const ORIGIN = 'http://localhost:1337'

export const getServerUrl = (path: string) => `${ORIGIN}${path}`

export async function fetchApi(url: string, params?: object): Promise<any> {
  const headers = {
    'Content-Type': 'application/json'
  }

  const res = await fetch(`${ORIGIN}/api/${url}?${qs.stringify(params)}`, {
    headers
  })

  return await res.json()
}
