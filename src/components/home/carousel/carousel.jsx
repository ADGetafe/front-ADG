import React, {useState, useEffect} from 'react';
import './Carousel.css';
import Carousel from "react-elastic-carousel";
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
    background-color: #bbb0bb;
    color: #fff;
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
  <div className='carr'>
    <h1 style={{ textAlign: "center" }}>Example to setup your carousel in react</h1>
      <Carousel itemsToShow={1}>
  {noticias.map((int) => {
  return(
    <>
        <Item key={int.id}>
        {/* <div className='carr-container'> */}
        <div className='portada'>
          <img className='carr-img' src={int.imagen_noticia} alt="noticias"/>
        </div>
        <div className='texto'>
          <h2 className='titulo-noticia-carr'>{int.titulo_noticia}</h2>
          <p className='titulo-noticia-carr'>{int.fragmento_noticia}</p>
        </div>
        {/* </div> */}
          </Item>
    </>
      )
      })}
    </Carousel>
    </div>
</section>

)}