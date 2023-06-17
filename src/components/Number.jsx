import React from 'react'
import {useSelector} from 'react-redux'
function Number() {

  const count = useSelector((state) =>state)
  
  return (
    <div className='number'>
        
    {count}

    </div>
  )
}

export default Number