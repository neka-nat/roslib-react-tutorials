import React, { useContext, useEffect, useState } from 'react'
import { ROSContext } from '../Tutorial1/RosContext'
import ROSLIB from 'roslib'
import { stringify } from 'querystring'


const ServeService: React.FC = () => {
    const [rosState] = useContext(ROSContext)
    const [serveService, setServeService] = useState<ROSLIB.Service<{a: number, b: number}, {sum: number}>>()
    const [answer, setAnswer] = useState<string>()

    useEffect(() => {
      if (rosState.ros) {
        const service = new ROSLIB.Service({
          ros: rosState.ros,
          name: '/add_two_ints',
          serviceType: 'rospy_tutorials/AddTwoInts',
        })
        setServeService(service)
        serveService?.advertise((request, response) => {
          response.sum = request.a + request.b
          setAnswer(response.sum.toString())
       })
      }
    }, [rosState])

    return (
      <div>
        {(answer) ? <p> {serveService?.name} is called. The answer is {answer}.</p> : <p>Not called.</p>}
      </div>
    )
}

export default ServeService