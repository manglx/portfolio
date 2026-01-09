import * as React from 'react'
import MobileNavbar from './navbar/MobileNavbar'
import DesktopNavbar from './navbar/DesktopNavbar'
import { RiHome9Line } from 'react-icons/ri'
import { LuAppWindow } from 'react-icons/lu'

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

const Navbar = () => (
  <>
    <MobileNavbar routes={routes} />
    <DesktopNavbar routes={routes} />
  </>
)

export default Navbar
