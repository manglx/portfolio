import * as React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import { RiHome9Line } from 'react-icons/ri'
import { LuAppWindow } from 'react-icons/lu'

const Navbar = ({ openMenu }) => {
  const routes = [
    {
      name: 'Home',
      path: '#home',
      icon: RiHome9Line,
    },
    {
      name: 'Projects',
      path: '#projects',
      icon: LuAppWindow,
    },
  ]

  return (
    <div className="w-screen fixed top-0 left-0 z-10">
      <div>
        <MobileNavbar routes={routes} />
        <DesktopNavbar routes={routes} />
      </div>
    </div>
  )
}

export default Navbar
