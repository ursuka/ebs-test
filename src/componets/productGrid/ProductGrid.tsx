import { FC } from "react"
import { ContainerProps } from "../../interfaces/props"

const ProductGrid:FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={`grid grid-cols-auto-fit-250 gap-[1rem] m-5 ${className}`}>
        {children}
    </div>
  )
}

export default ProductGrid