import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'

import { Text } from '../../library'
import Social from './social'

const Footer = () => {
  const data: any = useContext(GlobalContext)

  return (
    <footer className="bg-primary p-xxl mt-xxl">
      <div className="container">
        <Text className="text-white">Suivez nous sur instagram</Text>

        <div className="mt-m grid gap-s">
          <Social link={data.instagram_mathilde} label="Mathilde" />

          <Social link={data.instagram_leo} label="Léo" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
