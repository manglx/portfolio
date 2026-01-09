import * as React from 'react'
import Route from './Route'

const Sidebar = ({ isOpen, routes, toggleMenu }) => (
  <div
    className={`
    fixed inset-0 z-10 flex
    ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
  `}
  >
    <div
      onClick={toggleMenu}
      className={`
      bg-slate-900 flex-1
      transition-opacity duration-300
      ${isOpen ? 'opacity-50' : 'opacity-0'}
    `}
    />

    <div
      className={`
      fixed top-0 right-0 z-30 h-screen w-64 bg-white
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
    >
      <div className="flex flex-col p-10 space-y-4">
        {routes.map((r) => (
          <Route
            route={r}
            key={r.name}
          />
        ))}
      </div>
    </div>
  </div>
)

export default Sidebar
