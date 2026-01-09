import * as React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  )
}

export default Layout
