import { useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { RelatedProducts } from './RelatedProducts';

export const RelatedProducts = ( {category, subCategory} ) => {

  const { products } = useContext(ShopContext)
  const [RelatedProducts, setRelatedProducts] = useState([])

  useEffect(()=>{
    const filteredProducts = products.filter(product => product.category === category && product.subCategory === subCategory
  },[])
  return (
    <div>RelatedProducts</div>
  )
}
