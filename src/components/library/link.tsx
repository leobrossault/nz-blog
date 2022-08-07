import NextLink from 'next/link'

type LinkProps = {
  href: object
  className?: string
  children: any
}

export const Link = ({ href, className, children }: LinkProps) => {
  return (
    <NextLink href={href} className={className}>
      {children}
    </NextLink>
  )
}
