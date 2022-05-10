import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField } from '@material-ui/core'
import { ROSContext } from '../Tutorial1/RosContext'
import ROSLIB from 'roslib'

const PublishTopic: React.FC = () => {
  const [rosState] = useContext(ROSContext)
  const [publisher, setPublisher] = useState<ROSLIB.Topic>()
  const [message, setMessage] = useState<string>()

  useEffect(() => {
    if (rosState.ros) {
      const topic = new ROSLIB.Topic({
        ros: rosState.ros,
        name: '/hello',
        messageType: 'std_msgs/String',
      })
      setPublisher(topic)
    }
  }, [rosState])

  const handleChange = (event: { target: { value: string } }) => {
    setMessage(event.target.value)
  }

  const handlePublish = () => {
    const msg = new ROSLIB.Message({ data: message })
    publisher?.publish(msg)
  }

  return (
    <div>
      <TextField variant="outlined" onChange={handleChange} />
      <Button onClick={handlePublish}>Publish "/hello" Topic</Button>
    </div>
  )
}

export default PublishTopic
