import React, { useState } from 'react'

export const Cocina = () => {

const botones: {[clave: number]: string} = {
  0 : 'hornalla 0 encendida',
  1 : 'hornalla 1 encendida',
  2 : 'hornalla 2 encendida',
  3: 'hornalla 3 encendida',
  4: 'horno encendido',
  5 : 'se apaga la hornalla'
}
//variable, funcion que cambia el valor .valor dentro del useState es nuestro valor inicial
//empiezo el useState en 5  es el numero que indica que esta apagado

//boton=> vriable=> un valor que puede cambiaR y ouede ser de tipo que le inquimos a nuestro useState
//setBoton=> funcion=> actualiza el valor de la variable en este caso boton
//lo que esta entre parentesis en el useState es el valor inicial => es decir cual es el valor por default 
const [boton,setBoton]=useState<number>(5)

const btn=(activar:number)=>{
    setBoton(activar)
}
console.log(botones[5])

  return (
    <>
  <div className='btn'  onClick={ () => btn(4)}>
      play
  </div>
  <div className='contenedor_principal'>
    <div className='tapa'>
      <div>
        <button className='circulo' onClick={()=> btn(0)}>
          0
        </button>
        <button className='circulo' onClick={()=> btn(1)}>
          1
        </button>
      </div>
      <div>
        <button className='circulo' onClick={()=> btn(2)}>
          2
        </button>
        <button className='circulo' onClick={()=> btn(3)}>
          3
        </button>
      </div>
    </div>
  </div>
        {/* valor que mostramos al usuario*/}
  <h1>{botones[boton]}</h1>
  <button className='btn_apagar' onClick={()=> btn(5)}>
    Apagar Hornalla 
  </button>
</>
  )
}





