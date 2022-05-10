import React from 'react'
import Connection from '../Tutorial1/Connection'
import { ROSProvider } from '../Tutorial1/RosContext'
import PublishTopic from './PublishTopic'

const Tutorial2: React.FC = () => {
  return (
    <ROSProvider>
      <Connection />
      <PublishTopic />
    </ROSProvider>
  )
}

export default Tutorial2
