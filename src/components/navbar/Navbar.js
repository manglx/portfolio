import * as React from 'react'
import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import { RiHome9Line } from 'react-icons/ri'
import { LuAppWindow } from 'react-icons/lu'
import { useState, useEffect } from 'react'

const Navbar = () => {
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

  const [isAtTop, setIsAtTop] = useState(true)

  const updateIsAtTop = (scrollHeight) => {
    scrollHeight === 0 ? setIsAtTop(true) : setIsAtTop(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      updateIsAtTop(window.scrollY)
    })

    return () => {
      window.removeEventListener('scroll', () => {
        updateIsAtTop(window.scrollY)
      })
    }
  }, [])

  return (
    <div className="w-full fixed top-0 left-0 z-10 p-2">
      <div
        className={`py-4 px-6 rounded-2xl
          transition-all duration-300 ease-in-out
          ${
            isAtTop
              ? 'bg-transparent shadow-none backdrop-blur-0'
              : 'bg-white/30 backdrop-blur-sm shadow-md'
          }
        `}
      >
        <MobileNavbar routes={routes} />
        <DesktopNavbar routes={routes} />
      </div>
    </div>
  )
}

export default Navbar
