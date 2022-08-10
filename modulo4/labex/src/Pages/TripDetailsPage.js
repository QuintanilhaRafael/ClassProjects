import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function TripDetailsPage() {
    const navigate = useNavigate()
    const pathParams = useParams()
    const id = 'someid'
  return (
    <div>
      <h1>Admin Trip List !</h1>
    </div>
  )
}
