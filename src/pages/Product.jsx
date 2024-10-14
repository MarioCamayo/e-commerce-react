import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = () => {

  const {productId} =  useParams()
  const {products, currency} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

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
                <img
                onClick={()=>setImage(image)}
                 key={index}
                 src={image} 
                 alt="product image"
                 className="w-[
                24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />)

              )
            }

          </div>


          <div className="w-full sm:w-[80%]">
             <img 
             className="w-full h-auto"
             src= {image} alt="" />
          </div>

          {/* products info */}

          <div className="flex-1">
            <h1 className="font-medium text-2 mt-2"> {productData.name} </h1>
            <div className="flex items-center gap-1 mt-2">
                <img src= {assets.star_icon } alt="star_icon" className="w-3 5" />
                <img src= {assets.star_icon } alt="star_icon" className="w-3 5" />
                <img src= {assets.star_icon } alt="star_icon" className="w-3 5" />
                <img src= {assets.star_icon } alt="star_icon" className="w-3 5" />
                <img src= {assets.star_dull_icon } alt="star_dull_icon" className="w-3 5" />
                <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium"> {currency} {productData.price} </p>
            <p className="mt-5 text-gray-500 md:w-4/5"> {productData.description} </p>
            <div className="flex flex-col gap-4 my-8">
                <p>Select Size</p>
                <div className="flex gap-2">
                  {productData.sizes.map((item, index)=>(
                    <button 
                    key={index} 
                    className={` border bg-gray-200 py-1 px-3 rounded 
                      ${item === size ? 'border-orange-700 ':''}`}
                    onClick={()=>setSize(item)}>{item}
                    </button>
                    
                  ))}
                </div>
            </div>

            <button className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">ADD TO CART</button>
            <hr className="mt-8 sm:w-4/5"/>
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>Price: {currency} {productData.price}</p>
              <p>100% Original product.</p>
              <p>Cash on delivery</p>

            </div>
          </div>

        </div>
      </div>
    </div>
  ): <div className="opacity-0"></div>
}

export default Product