import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Input = () => {
    const dispatch = useDispatch()
    const [inputData,setInputdata] = useState("");
  return (
    <div>
        <input onChange={(e) => {
            setInputdata(e.target.value)
        }} type="text" />
        <button onClick={() => {
            dispatch({
                type:"inputData",
                data:inputData
            })
        }}>Click Me</button>
    </div>
  )
}

export default Input