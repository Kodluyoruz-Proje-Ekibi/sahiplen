import React from 'react'
import {SiDatadog} from 'react-icons/si'
import {FaCat} from 'react-icons/fa'
import {FaPaw} from 'react-icons/fa'
import './Card.css'
function Card({image,title}) {
    return (
        <div className='<container'>


        <div class='row'>
        <div className ='card-container'>
            <div className='image-container'>
                <img src='birinci.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Maltipoo <SiDatadog/></h3>
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
        <div className ='card-container'>
            <div className='image-container'>
                <img src='ikinci.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Morkie <SiDatadog/></h3>
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
        <div className ='card-container'>
            <div className='image-container'>
                <img src='ücüncü.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Çin Aslanı <SiDatadog/></h3>
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
        <div className ='card-container'>
            <div className='image-container'>
                <img src='dördüncü.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Golden <SiDatadog/></h3>
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

        <div class='row'>
        <div className ='card-container'>
            <div className='image-container'>
                <img src='besinci.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Scottish Fold <FaCat/></h3>
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
        <div className ='card-container'>
            <div className='image-container'>
                <img src='altıncı.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Scottish  <FaPaw/></h3>
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
        <div className ='card-container'>
            <div className='image-container'>
                <img src='yedinci.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>Siyam <FaPaw/></h3>
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
        <div className ='card-container'>
            <div className='image-container'>
                <img src='sekizinci.PNG' alt=''/>
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>İran Kedisi <FaPaw/></h3>
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












        </div>


    )
}

export default Card