import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout({ useHeader, back, children }: any) {
  return (
    <>
      {useHeader && <Header back={back} />}

      {children}

      <Footer />
    </>
  )
}
