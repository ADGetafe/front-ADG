import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './leer.css'

function Leer() {

const { id } = useParams();
const [noticias, setNoticias] = useState([]);

useEffect(() => {
fetch(`https://127.0.0.1:8000/news_api/${id}`, {
method: 'GET',
headers: new Headers({ 'Content-Type' : 'application/json'}),})
.then((res) => res.json())
.then((data)=>setNoticias(data))
console.log(noticias)
}, []);

  return (

    <section className="read">
    {noticias.map((int) => {
      console.log(int.articulo_noticia)
      return(
        <>
    <div className="leer_mas" style={{backgroundImage: `url(${int.imagen_noticia})`}}>
        {/* <img className='leer-mas-image' src={int.imagen_noticia} alt="leer"/> */}
      <div className= "title">
          <h3>{int.titulo_noticia}</h3>
      </div>
    </div>
    
    
    <div className="text">
      <div className='inner-text' dangerouslySetInnerHTML={{__html: int.articulo_noticia}} />
    </div>
    
    </>
      )
      })}

    </section>

  )
}

export default Leer