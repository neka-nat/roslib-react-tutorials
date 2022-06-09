import React, { useContext, useState } from 'react'
import { TextField } from '@material-ui/core'
import { ROSContext } from '../Tutorial1/RosContext'
import ROSLIB from 'roslib'

const SubscribeTopic: React.FC = () => {
  const [rosState] = useContext(ROSContext)
  const [messageData, setMessageData] = useState<ROSLIB.Message>()

  const handleChange = (event: { target: { value: string } }) => {
    if (rosState.ros) {
      const topic = new ROSLIB.Topic({
        ros: rosState.ros,
        name: event.target.value,
        messageType: 'std_msgs/String',
      })
      topic.subscribe(function (message: ROSLIB.Message) {
        setMessageData(message)
      })
    }
  }

  return (
    <div>
      <TextField variant="outlined" onChange={handleChange} />
      <p>{JSON.stringify(messageData)}</p>
    </div>
  )
}

export default SubscribeTopic
