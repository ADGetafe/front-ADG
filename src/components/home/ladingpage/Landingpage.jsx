import React from 'react'
import imagenlanding from '../../../assets/landing.png'
import './ladingpage.css'
import { Link } from "react-router-dom"

function Landingpage() {
  return (
    <>
        <section className='landingpage'>
        <div className='container-landing flex-landing'>
            <div className='left-landing'>
                <h1>ASOCIACIÓN <br/> DIABETES <br/> GETAFE</h1>
                <Link to='/contact'>
                    <button className='btn-landing'>Contáctanos</button>
                </Link>

            </div>

            <div className='right-landing topMarign'>
                <div className='img-landing'>
                    <img src={imagenlanding} alt=''/>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Landingpage