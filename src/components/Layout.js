import * as React from 'react'
import Navbar from './navbar/Navbar'
import SocialNetworksFloatingPanel from './socialNetworks/SocialNetworksFloatingPanel'

const Layout = ({ children }) => {
  return (
    <div className="bg-linear-to-b from-[#98ebf9] to-[#ffe8c9]">
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>

      <SocialNetworksFloatingPanel />
    </div>
  )
}

export default Layout
