import { FC } from "react"
import { ContainerProps } from "../../interfaces/props"

const ProductGrid:FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={`flex flex-col sm:items-center md:grid md:grid-cols-auto-fit-250 gap-[1rem] md:m-5 ${className}`}>
        {children}
    </div>
  )
}

export default ProductGrid