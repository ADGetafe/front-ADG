import React from 'react'
import Leer from './Leer'
import { useParams } from 'react-router-dom';

function Single() {
    const { id } = useParams();
  return (
    <div>
      <Leer id={ id }/>
    </div>
  )
}

export default Single
