import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
 const [cake, setCake]= useState(0)
  const numOfCakes =useSelector(state =>state.cake.numOfCakes)
  const data = useSelector(state=>state.cake.listOfSong)
  console.log(data)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes {numOfCakes} </h2>
      <input type="number" value={cake} onChange={e=>setCake(e.target.value)} />
      <br />
      <button onClick={()=>dispatch(ordered(+cake))}>Order cake</button>
      <button onClick={()=> dispatch(restocked(+cake))}>Restock cakes</button>
    </div>
  )
}

export default CakeView
