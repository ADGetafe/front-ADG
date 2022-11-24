import React, {useState, useEffect} from 'react';
import './Carousel.css';
import { Button } from '@material-ui/core';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom"
// import Item from "./item";
import styled from "styled-components";
// import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
// import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
  const Item = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 400px;
    width: 100%;
    background-color: #ffffff;
    color: #000;
    margin: 0 25px;
    font-size: 4em;
  `;

export default function Carr() {

const [noticias, setNoticias] = useState([]);

useEffect(() => {
fetch('https://127.0.0.1:8000/not', {
method: 'GET',
headers: new Headers({ 'Content-Type' : 'application/json'}),})
.then((res) => res.json())
.then((data)=>setNoticias(data))
}, []);

return (
<section className='carousel'>
    <h2 className='carr-noticias' style={{ textAlign: "center" }}>NOTICIAS</h2>
  <div className='carr'>
      <Carousel itemsToShow={1}>
  {noticias.map((int) => {
  return(
    <>
        <Item key={int.id}>
        <div className='portada'>
          <img className='carr-img' src={int.imagen_noticia} alt="noticias"/>
        </div>
        <div className='texto'>
          <h2 className='titulo-noticia-carr'>{int.titulo_noticia}</h2>
          <p className='titulo-noticia-carr'>{int.creacion_noticia.date}</p>
          <p className='titulo-noticia-carr'>{int.fragmento_noticia}</p>
        
        <Link className='leer-mas-link' to={`/leer/mas/${int.id}`}>
        <div className="flotante">
          <Button classNam>
            Leer más <KeyboardDoubleArrowRightIcon className='icon-diabete' />
          </Button>
        </div>  
        </Link>
        </div>
          </Item>
    </>
      )
      })}
    </Carousel>
    </div>
</section>

)}