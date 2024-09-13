
import {assets} from '../assets/assets/logo.png'
export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr-1fr] gap-14 my-10 mt-40 text-center">
        <div className="text-2xl font-bold text-gray-900">
          <img src={assets.logo} className=" " alt="logo"/>
        </div>

      </div>
    </div>
  )
}
