import * as React from 'react'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
import SocialNetworksFloatingPanel from './socialNetworks/SocialNetworksFloatingPanel'
import { MenuContext } from '../contexts/MenuContext'
import MenuProvider from '../providers/MenuProvider'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen)
  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="h-screen w-screen bg-[url(/background1.avif)] overflow-x-hidden bg-cover bg-center">
      <MenuProvider value={isMenuOpen}>
        <Navbar openMenu={openMenu} />
        <main>{children}</main>
        <footer>Footer</footer>

        <SocialNetworksFloatingPanel />
      </MenuProvider>
    </div>
  )
}

export default Layout
