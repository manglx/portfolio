import * as React from 'react'
import Navbar from './navbar/Navbar'
import SocialNetworksFloatingPanel from './socialNetworks/SocialNetworksFloatingPanel'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>

      <SocialNetworksFloatingPanel />
    </>
  )
}

export default Layout
