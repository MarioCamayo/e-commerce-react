import {assets} from '../assets/assets'
export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
            <img src={assets.logo2} className="mb-5 w-50 h-12" alt="logo"/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui provident error nobis, voluptatibus nisi aspernatur maiores. Suscipit.
            </p>
       </div>

        <div>
            <p className='text-xl font-medium mb-5'>EMPRESA</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='hover:text-red-500 cursor-pointer'>Inicio</li>
                <li className='hover:text-red-500 cursor-pointer'>Sobre nosotros</li>
                <li className='hover:text-red-500 cursor-pointer'>Entrega</li>
                <li className='hover:text-red-500 cursor-pointer'>Política de privacidad</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>CONTÁCTENOS</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>+1-212-456-7890</li>
              <li>contact@turopaestaaqui.com</li>
            </ul>
        </div>
      </div>


      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ turopaestaaqui.com - Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
