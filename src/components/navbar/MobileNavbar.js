import * as React from 'react'
import { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import SideBar from './Sidebar'

const MobileNavbar = ({ routes }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)

  return (
    <>
      <nav className="flex sm:hidden justify-between text-slate-700">
        <div className="font-bold text-xl">Manglx.</div>
        <div className="flex justify-center items-center">
          <button onClick={toggleMenu}>
            <HiOutlineMenuAlt3 size={25} />
          </button>
        </div>
      </nav>
      <SideBar
        isOpen={isMenuOpen}
        routes={routes}
        toggleMenu={toggleMenu}
      />
    </>
  )
}

export default MobileNavbar
