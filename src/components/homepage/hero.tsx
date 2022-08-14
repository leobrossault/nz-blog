import { Title } from '../library'
import { ArrowDownCircle } from 'react-feather'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center h-screen">
      <div className="relative flex flex-col items-center gap-xxl">
        <div className="w-[100px] h-[100px] flex items-center justify-center bg-white">
          Logo tmp
        </div>

        <div className="prose text-center">
          <Title className="text-white">Découvrez notre aventure</Title>

          <Title className="text-white" tag="h2">
            Sur les routes de Nouvelle-Zélande
          </Title>
        </div>
      </div>

      <div className="absolute bottom-xl left-1/2 -translate-x-1/2 text-white">
        <ArrowDownCircle size={30} className="animate-bounce" />
      </div>
    </section>
  )
}
