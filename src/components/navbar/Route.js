import * as React from 'react'

const Route = ({ route }) => {
  const IconComponent = route.icon
  return (
    <a
      href={route.path}
      key={route.name}
      className="flex items-center"
    >
      <IconComponent
        className="mr-2"
        size={20}
      />
      {route.name}
    </a>
  )
}

export default Route
