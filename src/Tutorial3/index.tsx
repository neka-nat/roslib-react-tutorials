import React from 'react'
import Connection from '../Tutorial1/Connection'
import { ROSProvider } from '../Tutorial1/RosContext'
import SubscribeTopic from './SubscribeTopic'

const Tutorial3: React.FC = () => {
  return (
    <ROSProvider>
      <Connection />
      <SubscribeTopic />
    </ROSProvider>
  )
}

export default Tutorial3
