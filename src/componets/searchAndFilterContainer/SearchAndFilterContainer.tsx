import { FC } from 'react'
import { SearchAndFilterContainerProps } from '../../interfaces/props'

const SearchAndFilterContainer:FC<SearchAndFilterContainerProps> = ({children, className=''}) => {
  return (
    <div className={`flex flex-row m-5 w-[98%] justify-center ${className} `}>{children}</div>
  )
}

export default SearchAndFilterContainer