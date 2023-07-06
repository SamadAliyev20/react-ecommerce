import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-3 p-5 flex items-center justify-end'>
      <select onChange={e =>setSort(e.target.value)} className='bg-gray-100 py-3 px-5 outline-none'>
        <option disabled>SELECT</option>
        <option value="asc">Artan</option>
        <option value="desc">Azalan</option>
      </select>
      
    </div>
    
  )
}

export default Sorting