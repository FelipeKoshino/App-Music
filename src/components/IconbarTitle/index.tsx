import { Title } from "./styles"
import { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
}

export function IconbarTitle({children}: TitleProps) {
  return <Title>{children}</Title>
}
