import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img className="w-12 m-auto mb-5" src= {assets.exchange_icon} alt="exchange_icon" />
        <p>Política de cambio fácil</p>
        <p>Ofrecemos cambio sin complicaciones</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src= {assets.quality_icon} alt="exchange_icon" />
        <p>Política de devolución de 7 días</p>
        <p>Ofrecemos devolución gratuita de 7 días</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src= {assets.support_img} alt="exchange_icon" />
        <p>La mejor atención al cliente</p>
        <p>Ofrecemos atención al cliente 24/7 </p>
      </div>
      
    </div>
  )
}

export default OurPolicy