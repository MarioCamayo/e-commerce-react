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
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
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
                        className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" />)

                      )
                    }

                  </div>

                  <div className="w-full sm:w-[80%]">
                    <img 
                    className="w-full h-auto"
                    src= {image} alt="" />
                  </div>
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
            
              <p>Producto 100 % original.</p>
              <p>El pago contra reembolso está disponible para este producto..</p>
              <p>Política de devolución y cambio sencilla en un plazo de 7 días.</p>

            </div>
          </div>
      </div>



      {/* ----------------- Description & Review Section -------------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Descripción</b>
          <p className="border px-5 py-3 text-sm">Reseñas {122} </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Un sitio web de comercio electrónico es una plataforma en línea que facilita la compra y venta de productos o servicios a través de Internet. Funciona como un mercado virtual donde las empresas y las personas pueden exhibir sus productos, interactuar con los clientes y realizar transacciones sin la necesidad de una presencia física. Los sitios web de comercio electrónico han ganado una inmensa popularidad debido a su conveniencia, accesibilidad y el alcance global que buscan.</p>
          <p>Los sitios web de comercio electrónico suelen mostrar productos o servicios junto con descripciones detalladas, imágenes, precios y cualquier variación disponible (por ejemplo, tamaños, colores). Cada producto suele tener su propia página dedicada con información relevante.</p>
        </div>
      </div>
           

      {/* ------------------------- mostrar productos relacionados -------------------------- */}
       
    </div>
  ): <div className="opacity-0"></div>
}

export default Product