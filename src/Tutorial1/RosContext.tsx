import React, { createContext, useState, ReactNode } from 'react'
import ROSLIB from 'roslib'

type RosState = {
  ros?: ROSLIB.Ros
  url: string
  isConnected: boolean
}

type Props = {
  children: ReactNode
}

const ROSContext = createContext<
  [RosState, React.Dispatch<React.SetStateAction<RosState>>]
>([{ url: '', isConnected: false }, () => {}])

const ROSProvider: React.FC<Props> = ({ children }) => {
  const [rosSate, setRosState] = useState<RosState>({
    ros: new ROSLIB.Ros({}),
    url: 'ws://localhost:9090',
    isConnected: false,
  })
  return (
    <ROSContext.Provider value={[rosSate, setRosState]}>
      {children}
    </ROSContext.Provider>
  )
}

export { ROSContext, ROSProvider }
