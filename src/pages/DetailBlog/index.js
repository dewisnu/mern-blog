import React from 'react'
import { Registerbg } from '../../assets'
import { Gap, Link } from '../../components/atoms'
import './detailblog.scss'
import {useHistory} from "react-router-dom";

const DetailBlog = () => {
    const history = useHistory();
    return (
        <div className='detail-blog-wrapper'>
            <img className='img-cover' src={Registerbg} alt='thumb'/>
            <p className='blog-title'>Title Blog</p>
            <p className='blog-author'>Author - Date Post</p>
            <p className='blog-body'> Sint adipisicing velit sunt veniam officia irure dolore. Occaecat sunt aliquip tempor aliqua est cupidatat nostrud dolore eu in. Duis occaecat velit incididunt dolore velit in. Ad officia laboris ad adipisicing sunt quis officia et.
            
            Sint adipisicing velit sunt veniam officia irure dolore. Occaecat sunt aliquip tempor aliqua est cupidatat nostrud dolore eu in. Duis occaecat velit incididunt dolore velit in. Ad officia laboris ad adipisicing sunt quis officia et.
            </p>
            <Gap height={20}/>
            <Link title='kembali ke home' onClik={() => history.push('/') } />
           
        </div>
    )
}

export default DetailBlog
