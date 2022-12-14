import { useContext } from 'react'
import { GlobalContext } from '../../../pages/_app'
import { getMedia } from '../../../api/media'

import { ArrowLeft } from 'react-feather'
import Image from 'next/image'
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
    <header className="relative z-10 py-m bg-black bg-opacity-5">
      <div className="container px-[5%] xl:px-0">
        <div className="flex items-center justify-between">
          <Link
            href={{
              pathname: routes.home
            }}
          >
            <a>
              <Image
                layout="fixed"
                width={100}
                height={57}
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
