import { useState } from "react";

export const Ejercicio = ()=>{
  const [task, setTask] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault()
    setTask(e.target.value)
    console.log("Formulario enviado");
  }

  return(
      <>
       <form onSubmit={handleSubmit}>
         <input 
         type="text"
         required
         placeholder="Ingrese su nombre"
         onChange={(e)=>e.target.value}
         
         />
         <button type="submit">enviar</button> 
         <span> {task} </span>
       </form>
      
      </>
  )
}