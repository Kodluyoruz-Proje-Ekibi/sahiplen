import React from 'react'
import {SiDatadog} from 'react-icons/si'
import './Card.css'
function Card({image,title}) {
    return (
        <div>
        <div className ='card-container'>
            <div className='image-container'>
                <img src={image} alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    
                    

                    <h3>{title} <SiDatadog/></h3>
                </div>
                <div className='card-body'>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            
            </div>
            
            <div className='btn'>
                <button>
                    <a>
                        <h7>Profil</h7>
                    </a>
                </button>
            </div>
    
        
        </div>
        
        </div>
    )
}

export default Card