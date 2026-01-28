import * as React from 'react'
import Navbar from './navbar/Navbar'
import SocialNetworksFloatingPanel from './socialNetworks/SocialNetworksFloatingPanel'

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-[url(/background1.avif)] overflow-x-hidden bg-cover bg-center">
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>

      <SocialNetworksFloatingPanel />
    </div>
  )
}

export default Layout
