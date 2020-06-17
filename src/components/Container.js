import React, { useEffect } from 'react'

function Container( props ) {
  return (
    <div className='content-container container-fluid'>{ props.children }</div>
  )
}

export default Container