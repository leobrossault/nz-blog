type TitleProps = {
  tag: string
  className?: string
  children: any
}

export const Title = ({ tag, className, children }: TitleProps) => {
  const CustomTag = tag as keyof JSX.IntrinsicElements

  return <CustomTag className={className}>{children}</CustomTag>
}
