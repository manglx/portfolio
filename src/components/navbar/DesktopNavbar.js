import * as React from 'react'

const DesktopNavbar = ({ routes }) => (
  <nav className="hidden sm:flex justify-between border">
    {routes.map((r) => (
      <a
        href={r.path}
        key={r.name}
      >
        {r.name}
      </a>
    ))}
  </nav>
)

export default DesktopNavbar
