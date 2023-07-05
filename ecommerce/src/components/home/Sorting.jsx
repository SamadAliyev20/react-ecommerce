import React from 'react'

const Sorting = () => {
  return (
    <div className='bg-gray-100 my-3 p-5 flex items-center justify-end'>
      <select className='bg-gray-100 py-3 px-5 outline-none'>
        <option disabled>SELECT</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  )
}

export default Sorting