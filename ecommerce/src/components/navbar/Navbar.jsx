import React from 'react'
import NavbarLeft from './navbarItem/NavbarLeft'
import NavbarRight from './navbarItem/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
        <NavbarLeft/>
        <NavbarRight/>
    </div>
  )
}

export default Navbar