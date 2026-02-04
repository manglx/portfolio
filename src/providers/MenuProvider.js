import * as React from 'react'
import { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext'

const MenuProvider = ({ menuState, children }) => {
  return (
    <MenuContext.Provider value={menuState}>{children}</MenuContext.Provider>
  )
}

export default MenuProvider
