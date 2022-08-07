import React from 'react'
import { Instagram } from 'react-feather'

type Props = {
  link: string
  label: string
}

const Social: React.FC<Props> = ({ link, label }) => {
  return (
    <a
      href={link}
      className="flex item-center gap-s text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram />
      {label}
    </a>
  )
}

export default Social
