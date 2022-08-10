import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as myRoute from '../Coordinates'


export default function HomePage() {
    const navigate = useNavigate()
    
  return (
    <div>
      <h1>HomePage !</h1>
      <button onClick={()=> {myRoute.goToListPage(navigate)}}>List Trips</button>
      <button onClick={()=> {myRoute.goToLoginPage(navigate)}}>Login</button>
      <button onClick={()=> {myRoute.goToAdminPage(navigate)}}>AdminHomePage</button>
    </div>
  )
}
