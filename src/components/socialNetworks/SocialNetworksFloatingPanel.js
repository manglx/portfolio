import * as React from 'react'
import './index.css'
import { socialNetworks } from './index'
import { Tooltip } from 'react-tooltip'

const SocialNetworksFloatingPanel = () => {
  const colors = {
    twitter: 'text-[#1DA1F2]',
    linkedin: 'text-[#0077B5]',
    github: 'text-[#333]',
    facebook: 'text-[#1877F2]',
    instagram: 'text-[#E4405F]',
    fallback: 'text-[#000]',
  }

  return (
    <div className="fixed bottom-4 left-4 shadow-lg bg-white p-2 rounded-full z-50 flex flex-col space-y-2">
      {socialNetworks.map((network) => (
        <span key={network.name}>
          <a
            href={network.url}
            id={`tooltip-${network.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${
              colors[network.name.toLowerCase() || 'fallback']
            } hover:opacity-80 transition-opacity`}
          >
            <network.icon size={24} />
          </a>
          <Tooltip
            anchorSelect={`#tooltip-${network.name}`}
            className="border-rounded"
          >
            {network.name}
          </Tooltip>
        </span>
      ))}
    </div>
  )
}

export default SocialNetworksFloatingPanel
