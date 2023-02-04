import React from 'react'
import { useDispatch } from 'react-redux'
import { getdata } from '../Appreducer/action';

const Component_B = () => {
  const dispatch = useDispatch();
  
  const handlechange = (e) => {
    dispatch(getdata(e.target.value))

  }
  return (
    <>
      <div>
        <h1>Components B</h1>
        <input type="text" placeholder='Enter Any Text' onChange={(e) => handlechange(e)} />
      </div>
    </>
  )
}

export default Component_B