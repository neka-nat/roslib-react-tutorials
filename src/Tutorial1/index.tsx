import React from 'react'
import { ROSProvider } from './RosContext'
import Connection from './Connection'

const Tutorial1: React.FC = () => {
  return (
    <ROSProvider>
      <Connection />
    </ROSProvider>
  )
}

export default Tutorial1
