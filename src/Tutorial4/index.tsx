import React from 'react'
import Connection from '../Tutorial1/Connection'
import { ROSProvider } from '../Tutorial1/RosContext'
import ServeService from './ServeService'

const Tutorial4: React.FC = () => {
  return (
    <ROSProvider>
      <Connection />
      <ServeService />
    </ROSProvider>
  )
}

export default Tutorial4
