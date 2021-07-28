import React, { useEffect, useRef } from 'react';
import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';

const Loading = ()=>{
    const animationRef = useRef(null)

    useEffect(()=>{
        animationRef.current = anime({
            targets: '.jumpCircle .circle',
            translateY: 500,
            delay: anime.stagger(100, {start: 500})
          });
    },[])

    return(
        <div className='jumpCircle'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
        </div>
    );
}

export default Loading;