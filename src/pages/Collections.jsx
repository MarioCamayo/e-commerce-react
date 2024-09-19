import { useContext, useState } from "react"
import { ShopContext } from "../context/ShopContext"

const Collections = () => {
  const {products} = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 ">
      {/* filter */}
      <p className="my-2 text-xl flex items-center cursor-pointer gap-2 ">FILTERS</p>
      {/* Category Filter */}
      <div className= {`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`} >

      </div>
    </div>
  )
}

export default Collections