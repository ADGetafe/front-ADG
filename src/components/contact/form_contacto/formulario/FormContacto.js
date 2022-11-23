import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form_contacto.css';

const FormContacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47sboqa', 'template_brarces', form.current, 'cxtPGXAkvflQvcS-L')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className="container_fcontact">
        <form className="formContact" ref={form} onSubmit={sendEmail}>
            <div className="inputContact">
                <label>Correo electrónico</label>
                <input type="email" name="correo_electronico" />

                <label>Teléfono</label>
                <input type="number" name="telefono" />

                <label>Mensaje</label>
                <textarea name="mensaje" />

                <div className="buttonContact">
                    <input type="submit" value="Enviar" />
                </div>
            </div>                
        </form>
    </div>
    

        
        /*<form className="formContact" ref={form} onSubmit={sendEmail}>
            <div className="inputContact">

                <label>Correo electrónico</label>
                <input type="email" name="correo_electronico"/>  

                <label>Teléfono</label>
                <input type="text" name="telefono"/>          
            
                <label></label>
                <textarea name="mensaje"/>
            </div>
                <div className='pv'>
                    <input type="checkbox" id="termsAndConditions"/>
                    <label for="termsAndConditions">Acepto política de privacidad de ADG</label>
                </div>
                
            

            <div className="buttonContact">
                <input type="submit" value="Enviar"/>
            </div>
        </form>*/

  );
};

export default FormContacto