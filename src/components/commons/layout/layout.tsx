import Footer from '../footer/footer'

export default function Layout({ children }: any) {
  return (
    <>
      {children}

      <Footer />
    </>
  )
}
