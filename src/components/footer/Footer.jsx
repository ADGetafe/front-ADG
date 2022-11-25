import React from 'react'
import './footer.css'
import logo from '../../assets/Logo1.png';
import mapa from '../../assets/mapa.png';
import { FaEnvelope, FaMobile, FaPhone } from 'react-icons/fa';
import admin from '../../assets/engranaje.png'
function Footer() {
  return (
    <>
       <footer>
        <div className='container-footer grid1-footer'>
          <div className='box-footer'>
          <a href="http://localhost:3000">
            <img src={logo} href="/" alt='Logotipo con zetas verde, roja y azul indicando que es la Asociación de Diabetes de Getafe' />      
          </a>     
          </div>

          <div className='box-footer'>
            <h2>Contacto</h2>            
            
            <div className='icon-footer'>
              <FaPhone />
              <a href="tel:+34916651410">Teléfono: +34 916 651 410</a>
            </div>

            <div className='icon-footer'>
              <FaMobile />
              <a href="tel:+34654778879">Móvil: +34 654 778 879</a>
            </div>

            <div className='icon-footer'>
            <FaEnvelope  className='envelope'/>
              <a href="mailto:adgetafe@gmail.com">E-mail: adgetafe@gmail.com</a>
            </div>
          </div>

          <div className='box-footer'>
            <h2>Ubicación</h2>
            <div className='text-footer'>
              <a target="_blank" rel="noreferrer noopener" href="https://goo.gl/maps/yCxcr7nTaJQgBuvo6">
              <img src={mapa} alt='Mapa callejero de la Asociación de Diabetes de Getafe, Calle Álvaro de Bazán 12 bajos, Local 7 28902 Getafe, Madrid '/>
              </a>  
              <p>Calle Álvaro de Bazán 12 bajos, Local 7</p>
              <span> 28902 Getafe, Madrid</span>
            </div>
          </div>
        </div>
        <div className='legal-footer container-footer'>
          <p>Copyright © 2022 ADGetafe. Todos los derechos reservados</p>
          <a target="_blank" rel="noreferrer noopener" href='https://127.0.0.1:8000/login'> 
          <img src={admin} alt='' />
          </a>
        </div>
      </footer>
      </>
  )
}

export default Footer