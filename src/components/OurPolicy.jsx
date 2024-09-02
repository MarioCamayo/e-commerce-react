import { assets } from "../assets/assets"

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img className="w-12 m-auto mb-5" src= {assets.exchange_icon} alt="exchange_icon" />
        <p>Easy Exchange Policy</p>
      </div>
      
    </div>
  )
}

export default OurPolicy