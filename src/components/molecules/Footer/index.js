import React from 'react';
import { Logo,Sosmed} from '../../../assets';
import './footer.scss';

const Icon = ({img}) =>{
    return(
    
    <div className='icon-wrapper'>
     <img className='icon-medsos' src={img} alt='icon'/>
    </div>
    )
   
}

const Footer = () => {
    return (
        <div>
           <div className='footer'>
               <div>
                   <img className='logo' src={Logo} alt='logo'/>
               </div>
               <div className='social-wrapper'>
                    <Icon img={Sosmed}/>
                    <Icon img={Sosmed}/>
                    <Icon img={Sosmed}/>
                    <Icon img={Sosmed}/>
                    <Icon img={Sosmed}/>
                  
               </div>
           </div>
           <div className='copyright'>
               <p>Copyright I Gede ari wisnu sanjaya</p>
           </div>
        </div>
    )
}

export default Footer
