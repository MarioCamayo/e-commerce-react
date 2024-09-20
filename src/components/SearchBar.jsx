 import {useContext} from 'react'
 import {shopContext} from '../context/ShopContext'
 
 const SearchBar = ()=>{
   const {search, setSearch, showSearch, setShowSearch}=  useContext(shopContext)
  return(
      <h1>hola</h1>
  )

}
 export default SearchBar