import React, { useState } from 'react';
// import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import { Modal, Button } from '@material-ui/core';
import './flotante.css'
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import Definiciondata from './flotantedata';
// const baseUrl='http://127.0.0.1:8000/api'

const useStyles = makeStyles((theme) => ({

    
    iconos:{
      cursor: 'pointer'
    }, 
    inputMaterial:{
      width: '100%'
    }
  }));

function Flotante() {
    const styles= useStyles();
        /*const [data, setData]=useState([]);*/
        const [modalInsertar, setModalInsertar]=useState(false);


  // const peticionGet=()=>{
  //    axios.get(baseUrl)
  //   .then(response=>{
  //     setData(response.data);
  //     abrirCerrarModalInsertar()
  //   })
  // }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  // useEffect(()=>{
  //    peticionGet();
  // },[])

  const bodyInsertar = (

    
    <div className={styles.modal}>  

        
        

            <div className='container-flotante'>
              <div className='titleCloseBtn'>
                <Button onClick={()=>abrirCerrarModalInsertar()}>X</Button>
              </div>
              {Definiciondata.map((def) => {
          return (
            <>
              <div className='heading-modal'>
                  <h1>{def.titulo1}</h1>
              </div>

              <div className="body-modal">                  
                   <p>{def.parrafo1}</p>
                   <p>{def.parrafo2}</p>
                   <p>{def.parrafo3}</p>
                   <p>{def.parrafo4}</p>
                   <p>{def.parrafo5}</p>

              </div>
            </>
              )
        })
      }
       
            </div>
      
    </div>
  
  )


  return (
    <div className="flotante">
          
        <Button onClick={()=>abrirCerrarModalInsertar()}>
        Leer más <KeyboardDoubleArrowRightIcon className='icon-diabete' />
        </Button>
          <Modal
          open={modalInsertar}
          onClose={abrirCerrarModalInsertar}>
              {bodyInsertar}
          </Modal>
    

    </div>
  )
}

export default Flotante