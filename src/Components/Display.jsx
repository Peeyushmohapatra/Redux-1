import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const data = useSelector((state) => {
        return state.data
    })
  return (
    <div>
        <h2>Display</h2>
        <h3>{data}</h3>
    </div>
  )
}

export default Display