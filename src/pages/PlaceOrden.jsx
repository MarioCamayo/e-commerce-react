import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import { CartTotal } from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/ShopContext"

const PlaceOrden = () => {

  const [method, setMethod] = useState('cod')
  const {navigate} = useContext(ShopContext)

  return (
    <div className="flex flex-col sm:flex-row
     gap-4 justify-between pt-5 sm:pt-14 min-h-[80vh]
     border"> 
     {/* -------------------lado izquierdo------------------ */}
          <div className="flex flex-col gap-4 sm:max-w-[480px]">

                <div className="text-xl sm:text-2xl my-3"> 
                  <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                </div>

                <div className="flex gap-3">
                    <input 
                        type="text" 
                        placeholder="Primer Nombre"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                    />
                    <input 
                        type="text" 
                        placeholder="Segundo Nombre"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                    />
                </div>
                <input 
                      className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                      type="email" 
                      placeholder="Correo Electrónico"
                />
                <input
                className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                type="text"
                placeholder="Dirección"
                />

               <div className="flex gap-3">
                    <input 
                        type="text" 
                        placeholder="Ciudad"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                    />
                    <input 
                        type="text" 
                        placeholder="Estado"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                    />
                </div>

                <div className="flex gap-3">
                    <input 
                        type="number" 
                        placeholder="Zip Code"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                    />
                    <input 
                        type="text" 
                        placeholder="País"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                    />
                </div>
                <input 
                        type="number" 
                        placeholder="Teléfono"
                        className="border border-gray-300 rounded px-3.5 py-1.5 w-full"
                />


          </div>

          {/* -------------------lado derecho------------------ */}

          <div className="mt-8">
                <div className="mt-8 min-w-80">
                    <CartTotal/>
                </div>

                <div className="mt-12">
                  <Title text1={'MÉTODO DE '} text2={' PAGO'} />
                   {/*--------------------- médoto de pago ---------------- */}
                  <div className="flex gap-3 flex-col lg:flex-row">
                         <div onClick={()=>setMethod('stripe')}
                              className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                             <p className= {`min-w-3 h-3.5 border rounded-full ${method === 'stripe' 
                              ? 'bg-green-400' 
                              : ''}`}></p>
                             <img 
                             className="h-5 mx-4"
                             src= {assets.stripe_logo} alt="stripe_logo" />
                         </div>

                         <div onClick={()=>setMethod('razorpay')}
                              className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                             <p className= {`min-w-3 h-3.5 border rounded-full ${method === 'razorpay' 
                              ? 'bg-green-400' 
                              : ''}`}></p>
                             <img 
                             className="h-5 mx-4"
                             src= {assets.razorpay_logo} alt="razorpay_logo" />
                         </div>

                         <div onClick={()=>setMethod('cod')}
                              className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                             <p className= {`min-w-3 h-3.5 border rounded-full ${method === 'cod' 
                              ? 'bg-green-400' 
                              : ''}`}></p>
                             <p className="text-gray-500 text-sm font-medium mx-4">CONTRA ENTREGA</p>
                         </div>
                    </div>

                    <div className="w-full text-end mt-8">
                      <button 
                      onClick={()=>navigate('/orders')}
                      className="bg-black text-white px-16 py-3 text-sm">
                            REALIZAR PEDIDO
                      </button>
                    </div>

                </div>
          </div>
                         
    </div>
  )
}
export default PlaceOrden



