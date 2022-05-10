import React, { useContext } from 'react'
import { Button, TextField } from '@material-ui/core'
import { ROSContext } from './RosContext'

const Connection: React.FC = () => {
  const [rosState, setRosState] = useContext(ROSContext)
  const handleChange = (event: { target: { value: string } }) => {
    setRosState({ ...rosState, url: event.target.value })
  }

  const handleConnect = () => {
    try {
      rosState.ros?.connect('ws://localhost:9090')

      if (rosState.ros)
        rosState.ros.on('connection', () => {
          setRosState({
            ...rosState,
            isConnected: true,
          })
        })

      if (rosState.ros)
        rosState.ros.on('error', (error: string) => {
          console.log(error)
        })
    } catch (e: any) {
      console.log('Failed to create ros instance', e)
    }
  }

  return (
    <div>
      <TextField
        variant="outlined"
        value={rosState.url}
        onChange={handleChange}
      />
      <Button onClick={handleConnect}>Connect</Button>
      <p style={{ color: 'red' }}>
        {rosState.isConnected ? 'Connected!' : 'Not Connected!'}
      </p>
    </div>
  )
}

export default Connection
