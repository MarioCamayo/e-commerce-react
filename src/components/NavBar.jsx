import { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import {Link, NavLink} from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
  const [visible, setVisible] = useState(false)
  const {setShowSearch, getCartCount}=  useContext(ShopContext)

  return (
    <div className="flex items-center justify-between py-5 font-medium" >

      <Link to="/"><img src= {assets.logo2} className='w-37 h-12' alt="Logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

        <NavLink to={'/'} className="flex flex-col items-center gap-1">  

          <p>INICIO</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>

        <NavLink to='/collection' className="flex flex-col items-center gap-1">  
          <p>COLECCIÓN</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/about' className="flex flex-col items-center gap-1">  
          <p>SOBRE NOSOTROS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className="flex flex-col items-center gap-1">  
          <p>CONTACTO</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
          <img 
          className='w-5 cursor-pointer'
           src= {assets.search_icon} 
           alt="search_icon"
           onClick={() => setShowSearch(true)}
           
           />
          <div className='group relative'>
                <Link to='/login'><img className='w-5 cursor-pointer' src= {assets.profile_icon} alt="profile_icon" />
                </Link> 
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>Mi perfil</p>
                <p className='cursor-pointer hover:text-black'>Mis Pedidos</p>
                <p className='cursor-pointer hover:text-black'>Cerrar sesión</p>
              </div>
            </div>
          </div>

          <Link  to='/cart' className='relative' >
              <img className='w-6 min-w-5' src= {assets.cart_icon}  alt="cart_icon" />
              <p className='absolute right-[-5px] bottom-[-6px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[12px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=>setVisible(true)} className='w-5 cursor-pointer' src= {assets.menu_icon} alt="menu_icon" />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden w-full h-screen bg-white transition-all ${visible ? 'block' : 'hidden'} `}>
        <div className='flex flex-col text-gray-600' >
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer px-10 justify-end'>
              <img className='h-4 rotate-180' src={ assets.dropdown_icon} alt="dropdown_icon" />
              <p>Atrás</p>
          </div>
          <NavLink className='py-2 pl-6 border' to='/'>INICIO</NavLink>
          <NavLink className='py-2 pl-6 border' to='/collection'>COLECCIÓN</NavLink>
          <NavLink className='py-2 pl-6 border' to='/about'>SOBRE NOSOTROS</NavLink>
          <NavLink className='py-2 pl-6 border' to='/contact'>CONTACTO</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavBar
         
        
        
