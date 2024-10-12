import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";

const Product = () => {

  const {productId} =  useParams()
  const {products} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchProductData =async () =>{

    products.map(item => {
      if(item._id === productId){
        setImage(item.image[0])
        setProductData(item)
        return null
    }


    // const product = products.find((product) => product.id === parseInt(productId))
    // setProductDta(product)
    // }
    // useEffect(() => {
    //   fetchProductData()
    //   }, [productId])



  })
}

  useEffect(()=>{
    fetchProductData()


  }, [productId, products])

  return productData ?  (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-grow">
        {/* product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {
              productData.image.map((image, index) => (
                <img key={index} src={image} alt="product image" className="w-[
                24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />)

              )
            }

          </div>

        </div>
      </div>
    </div>
  ): <div className="opacity-0"></div>
}

export default Product