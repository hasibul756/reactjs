import React, { useState } from 'react'

const Child = (props) => {

    const {countValue, value, title, incrementCounter, decrementCounter} = props

  return (
    <div className='container-2xl mx-auto flex flex-col justify-center items-center gap-2'>
      <h2>{title}</h2>
      <p>{value}</p>
      <button className='px-3 py-1 text-white bg-neutral-800 w-10' onClick={incrementCounter}>+</button>
      <p>{countValue}</p>
      <button className='px-3 py-1 text-white bg-slate-600 w-10'  onClick={decrementCounter}>-</button>
    </div>
  )
}

export default Child