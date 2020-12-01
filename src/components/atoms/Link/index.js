import React from 'react'
import './Link.scss'

const Link = ({title,onClik}) => {
    return (
        <p className='link' onClick={onClik}>{title}</p>
      
    )
}

export default Link
