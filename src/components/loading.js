import React, { useEffect, useRef } from 'react';
import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';

const Loading = ()=>{
    const animationRef = useRef(null)

    useEffect(()=>{
        animationRef.current = anime({
            targets: '.jumpCircle .circle',
            translateY: -200,
            delay: anime.stagger(200, {start: 0})
          });
    },[])

    return(
        <>
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
        </>
    );
}

export default Loading;