import React from 'react'
import { Loginbg } from '../../../assets'
import './upload.scss'

const   Upload = () => {
    return (
        <div className='upload'>
            <img className='preview' src={Loginbg} alt='preview'/>
            <input type='file'/>
        </div>
    )
}

export default  Upload
