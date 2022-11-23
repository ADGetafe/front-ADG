import React from 'react';
import "./form_contacto.css";

function FormContacto() {
  return ( 
    
    <div className="container_fcontact">

        
        <form action="" className="formContact">
            <div className="inputContact">

                <label for="email">Correo electrónico</label>
                <input type="text" id="email"/>  

                <label for="email">Teléfono</label>
                <input type="num" id="phone"/>          
            
                <label for="mensaje">Mensaje</label>
                <textarea name="mensaje" id="mensaje"></textarea>
            </div>
                <div className='pv'>
                    <input type="checkbox" id="termsAndConditions"/>
                    <label for="termsAndConditions">Acepto política de privacidad de ADG</label>
                </div>
                
            

            <div className="buttonContact">
                <button>Enviar</button>
            </div>
        </form>
</div>
  )
}

export default FormContacto