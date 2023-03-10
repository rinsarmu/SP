import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch = useDispatch()
  const users = useSelector(state=>state.user)
  useEffect(()=>{
    dispatch(fetchUsers())
// 
  }, [])
  console.log(useSelector(state=>state.user.users))
  const renderedUser =()=>{
    let data = null
    return users.loading 
      ? <p>Loading...</p>
      : users.error 
        ?<p>Something is occurred</p>
        : data = users.users.map(user=>{
            return(
              <div key={user.name}>
                <h3>{user.name}</h3>
                <p>{user.username}</p>
              </div>
            )
        })
  }
  return (
    <div>
      <h1>List of users</h1>
      {renderedUser()}
    </div>
  )
}

export default UserView
