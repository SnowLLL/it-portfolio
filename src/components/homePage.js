import React, { useEffect, useRef } from 'react';
import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';
import Loading from './loading'

const HomePage = ()=>{
    const selfie = require('../assets/self.jpg').default
    const animationRef = useRef(null)

    useEffect(()=>{
        animationRef.current = anime({
            targets: '.jumpName .letter',
            translateY: 300,
            translateX: -400,
            delay: anime.stagger(100, {from: 'center'})
          });
    },[])

    return(
        <>  
            <div className='jumpName'>
                <span className='letter'>S</span>
                <span className='letter'>N</span>
                <span className='letter'>O</span>
                <span className='letter'>W</span>
            </div>
            <div className='jumpName'>
                <span className='letter'>L</span>
                <span className='letter'>I</span>
                <span className='letter'>U</span>
                <img src={selfie} alt='It is me' className='letter photo'></img>
            </div>
            <Loading />
        </>
    );
}

export default HomePage;