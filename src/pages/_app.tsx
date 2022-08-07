import '../styles/globals.css'
import App from 'next/app'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
import { fetchApi } from '../api'

export const GlobalContext = createContext({})

function MyApp({ Component, pageProps }: AppProps) {
  const { global } = pageProps

  return (
    <GlobalContext.Provider value={global.attributes}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  )
}

export default MyApp

MyApp.getInitialProps = async (context: any) => {
  const appProps = await App.getInitialProps(context)

  const { data } = await fetchApi('global', {
    populate: '*'
  })

  return { ...appProps, pageProps: { global: data } }
}
