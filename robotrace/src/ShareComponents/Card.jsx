import React, { useContext } from 'react'
import { context } from '../Context/Store'

const Card = () => {
  const {username} = useContext(context);
 
  return (
    <div>
        <h1>
          the name of user is {username}
        </h1>
    </div>
  )
}

export default Card