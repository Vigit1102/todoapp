import React from 'react'
import { Button } from './Button'

interface Click{
    onAdd: any, 
    showform:boolean
}

export const Header : React.FC<Click> = ({ onAdd, showform }) => {

  return (
    <header className='header' >
      <h1>Task Tracker</h1>
      <Button
        onClick={onAdd}
        text={showform ? 'Close' : 'Add'}
        color={showform ? 'red' : 'green'} />
    </header>
  )
}
