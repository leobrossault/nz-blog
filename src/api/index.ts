import qs from 'qs'

const ORIGIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:1337'
    : 'https://agile-anchorage-24857.herokuapp.com'

export const getServerUrl = (path: string) => {
  if (path.includes('http')) return path

  return `${ORIGIN}${path}`
}

export async function fetchApi(url: string, params?: object): Promise<any> {
  const headers = {
    'Content-Type': 'application/json'
  }

  const res = await fetch(`${ORIGIN}/api/${url}?${qs.stringify(params)}`, {
    headers
  })

  return await res.json()
}
