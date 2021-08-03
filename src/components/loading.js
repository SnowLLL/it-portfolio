import React from 'react';
import '../styles/style.css'

const Loading = ()=>{
    return(
        <div >
            <div className='jumpCircle'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <div className='jumpCircle'>  
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
        </div>
    );
}

export default Loading;