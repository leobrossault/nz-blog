import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import { getMedia } from '../../../api/media'

import { ArrowLeft } from 'react-feather'
import { Link } from '../../../components/library'
import { routes } from '../../../constants'

type HeaderProps = {
  back: {
    href: object
    label: string
  }
}

const Header = ({ back }: HeaderProps) => {
  const data: any = useContext(GlobalContext)

  return (
    <header className="relative z-10 py-m">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link
            href={{
              pathname: routes.home
            }}
          >
            <a>
              <img
                className="max-w-[100px]"
                src={getMedia(data.seo.logo, 'default')}
                alt="Léo & Mathilde - Nouvelle Zélande"
              />
            </a>
          </Link>

          <Link href={back.href}>
            <a className="flex items-center gap-s text-white hover:underline">
              <ArrowLeft size={20} />
              {back.label}
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
