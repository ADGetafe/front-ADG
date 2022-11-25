import React from 'react';
import "./ingresar.css";

function Ingresar() {
  return (
    <>
    <div className='headingIngresar'>
      <h1>INGRESAR</h1>
    </div>
    
    <div className="container_ingresar">
        <form className='formIngresar'>
          
          <div className="inputIngresar">
            
                             
            <label>Correo electrónico</label>
            <input type="email" name="correo_electronico" />
            
            
            <label for="nombre">Contraseña</label>
            <input type="text" contrasena="contrasena" id="contrasena" maxlength="30"/>
                
            <div className='buttonIngresar'>
              <input type="submit" value="Ingresar"/>
            </div>
            
          </div>
        </form>
    </div>
        </>
  )
}

export default Ingresar