import React from 'react'

const Pagination = ({ index, pageDecrement, pageIncrement }) => {
  return (

        <div className='flex justify-center items-center mb-5 gap-3'>
          <button onClick={pageDecrement} className='active:scale-95 flex px-2 py-1 text-white bg-amber-700 rounded-3xl cursor-pointer'>Previous
          </button>
          <h1 className='text-white mx-2'>Page {index}</h1>
          <button onClick={pageIncrement} className='active:scale-95 flex px-2 py-1 text-white bg-amber-700 rounded-3xl cursor-pointer'>Next
          </button>
          </div>

  )
}

export default Pagination