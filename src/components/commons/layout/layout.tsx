import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout({ useHeader, children }: any) {
  return (
    <>
      {useHeader && <Header />}

      {children}

      <Footer />
    </>
  )
}
