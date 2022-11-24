import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"
import { Button } from '@material-ui/core';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import './cardnoticias.css';

function Cardnoticias({title,imageUrl,body}) {
const [noticias, setNoticias] = useState([]);

useEffect(() => {
fetch('https://127.0.0.1:8000/not', {
method: 'GET',
headers: new Headers({ 'Content-Type' : 'application/json'}),})
.then((res) => res.json())
.then((data)=>setNoticias(data))
}, []);

return (

<section className="noticias">
    {noticias.map((int) => {
    return(
    <div key={int.id} className="containerNoticias">

        <div className="imageNoticias">
            <img src={int.imagen_noticia} alt="img" />

        </div>


        <div className="textNoticias">
            <div className="contentNoticias">
                <div className="titleNoticias">
                    <h2>{int.titulo_noticia}</h2>

                </div>

                <div className="bodyNoticias">
                    <p>{int.fragmento_noticia}</p>

                </div>

                <div className="btnNoticias">
                    <Link className='leer-mas-link' to={`/leer/mas/${int.id}`}> <Button>
                    Leer más
                    <KeyboardDoubleArrowRightIcon className='icon-diabete' />
                    </Button>
                    </Link>
                </div>
            </div>



        </div>
    </div>


    )
    })}
</section>


)
};

export default Cardnoticias;