import React from 'react'

interface button {
    color:any, 
    text:string, 
    onClick:any
}

export const Button:React.FC<button> = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='btn' >{text} </button>
  )
}
