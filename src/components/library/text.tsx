type TextProps = {
  className?: string
  children: any
}

export const Text = ({ className, children }: TextProps) => {
  return <p className={className}>{children}</p>
}
