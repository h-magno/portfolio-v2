'use client'

import { useState } from 'react'

const skills = () => {
  const [counter, setCounter] = useState(0)

  const increment = (inputValue: number) => setCounter((currentValue) => currentValue + inputValue)
  

  return (
    <div className='bg-blue-600 pt-96 '>

      <div className=''>
        { counter }
      </div>
      <button type='button' className='btn btn-circle' onClick={() => increment(1)}> Somar </button>
    </div>
  )
}

export default skills
