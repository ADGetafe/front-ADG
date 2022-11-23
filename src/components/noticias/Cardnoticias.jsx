import React from 'react';
//import { useEffect, useState } from 'react';
import image1 from "../../assets/image01.jpg";
import { Button } from '@material-ui/core';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import './cardnoticias.css';

function Cardnoticias({title,imageUrl,body}) {
/*const [noticias, setNoticias] = useState([]);

useEffect(() => {
fetch('https://127.0.0.1:8000/not', {
    method: 'GET',
    headers: new Headers({ 'Content-Type' : 'application/json'}),})
.then((res) => res.json())
.then((data)=>setNoticias(data))
}, []);*/

return (

<section className="noticias">
    {/*{noticias.map((int) => {
        return( */}
   {/*<div key={int.id} className="card-container">*/} 
    <div className="containerNoticias">
        <div className="imageNoticias">
            {/*<img src={int.imagen_noticia} alt="img"/>*/}
            <img src={image1} alt="img"/>
        </div>


        <div className="textNoticias">
            <div className="contentNoticias">
                <div className="titleNoticias">
                    {/*<h3>{int.titulo_noticia}</h3>*/}
                    <h2>Titulo</h2>
                </div>

                <div className="bodyNoticias">
                {/*<p>{int.fragmento_noticia}</p>*/}
                    <p>Esto será un texto pequeño</p>
                </div>

                <div className="btnNoticias">
                    <Button> Leer más <KeyboardDoubleArrowRightIcon className='icon-diabete' /></Button>
                   
                </div>
            </div>


            
        </div>
    </div>

    <div className="containerNoticias">
        <div className="imageNoticias">
            {/*<img src={int.imagen_noticia} alt="img"/>*/}
            <img src={image1} alt="img"/>
        </div>


        <div className="textNoticias">
            <div className="contentNoticias">
                <div className="titleNoticias">
                    {/*<h3>{int.titulo_noticia}</h3>*/}
                    <h2>Titulo</h2>
                </div>

                <div className="bodyNoticias">
                {/*<p>{int.fragmento_noticia}</p>*/}
                    <p>Esto será un texto pequeño</p>
                </div>

                <div className="btnNoticias">
                    <Button> Leer más <KeyboardDoubleArrowRightIcon className='icon-diabete' /></Button>
                   
                </div>
            </div>


            
        </div>
    </div>
  {/*      )
    })}*/}
</section>


)
};

export default Cardnoticias;