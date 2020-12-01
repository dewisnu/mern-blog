import React from 'react';
import { Registerbg } from '../../../assets';
import './blogitem.scss';
import {Button, Gap} from "../../atoms";
import {useHistory} from "react-router-dom";

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className='blog-item'>
            <img className='image-thumb' src={Registerbg} alt='post'/>
            <div className='content-detail'>
                <p className='title'>Title Blog</p>
                <p className='author'>Author - Date - Post</p>
                <p className='body'>Enim do ut officia labore non. Minim Lorem officia elit labore quis. Aliqua excepteur reprehenderit magna fugiat ut quis in pariatur irure dolor consectetur consequat. Anim minim eu minim tempor eu officia reprehenderit ullamco consectetur quis. Enim ex velit officia est. Occaecat magna laborum magna laborum magna dolor aute.</p>
                <Gap height={20}/>  
                <Button  title='View Detail' onClick={() => history.push('/detail-blog') } />
            </div>
             
            
        </div>
    )
}

export default BlogItem
