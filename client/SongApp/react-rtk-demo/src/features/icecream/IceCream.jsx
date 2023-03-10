import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { ordered,restocked } from './icecream';
const IceCreamView = () => {
  const numOfIceCreams = useSelector(state=>state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of icecream {numOfIceCreams}</h2>
      <button onClick={()=>dispatch(ordered())}>Order ice Cream</button>
      <button onClick={()=>dispatch(restocked(2))}>Restock ice cream</button>
    </div>
  )
}

export default IceCreamView
