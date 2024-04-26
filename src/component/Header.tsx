import React from 'react'
import NavMenu from './NavMenu'

const Header = ({name}) => {
  return (
    <div className='bg-white px-20 h-20 border-b shadow flex items-center justify-between'>
        <div>Logo</div>
        <NavMenu name={name} />
    </div>
  )
}

export default Header