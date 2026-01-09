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
      flex flex-col
      ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
    >
      <div className="flex-1 flex flex-col p-10 space-y-4">
        {routes.map((r) => (
          <Route
            route={r}
            key={r.name}
          />
        ))}
      </div>
      <div className="px-6 py-3">
        <button
          className="w-full h-fit py-2 border rounded-full border-blue-500 bg-blue-50 text-blue-500"
          onClick={() => {}}
        >
          Get in touch
        </button>
      </div>
    </div>
  </div>
)

export default Sidebar
