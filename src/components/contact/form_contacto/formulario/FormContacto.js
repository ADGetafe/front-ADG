import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './form_contacto.css';

const FormContacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47sboqa', 'template_brarces', form.current, 'cxtPGXAkvflQvcS-L')
      .then((result) => {
          alert("Tu consulta ha sido enviada")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className="container_fcontact">
        <form className="formContact" ref={form} onSubmit={sendEmail}>
            <div className="inputContact">
                <label>Nombre</label>
                <input type="text" name="user_name" placeholder='¿Cuál es tu nombre? (Mínimo 3 caracteres)'pattern="[a-zA-Z]{4,15}" required />

                <label>Teléfono</label>
                <input type="tel" name="user_telephone" placeholder='Mínimo 9 dígitos' pattern="[0-9]{9}" required />
                
                <label for="reply_to">Correo electrónico</label>
                <input type="email" name="reply_to" placeholder='¿Cuál es tu correo electrónico?' required />

                <label>Consulta</label>
                <textarea name="message" placeholder='Puedes dejarnos tu consulta. Ejemplo: Me gustaría saber que actividades tienen planificadas para este mes.' rows="4" cols="50" required />

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