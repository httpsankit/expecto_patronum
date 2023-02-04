import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import store from '../Appreducer/Store'

const Component_C = () => {
  const data = useSelector((Store) => Store.reducer.product);

  return (
    <>
      <div>
        <h1>Component C</h1>
        <p> Text From Component B TextBox is : </p>
        <p> {data}</p>
      </div>
    </>
  )
}

export default Component_C