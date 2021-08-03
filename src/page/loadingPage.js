import React, { useEffect, useRef } from 'react';
import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';
import { motion } from 'framer-motion'
import { pageTransition } from '../styles/pageTransition'
import Loading from '../components/loading';
import { NavLink } from 'react-router-dom'

const LoadingPage = ()=>{
    const animationRef = useRef(null)

    useEffect(()=>{
        animationRef.current = anime({
            targets: '.jumpCircle .circle',
            translateX: 350,
            translateY: 450,
            delay: anime.stagger(50, {start:0}),
          });
    },[])

    return(
        <motion.div 
        initial='slidedown'
        animate='slideup'
        exit='slidedown'
        variants={pageTransition}
        transition={pageTransition.smooth}
        className='blackBkg'>
            <Loading />
            <Loading />
            <motion.div 
            whileHover={{scale:0.8}}
            transition={pageTransition.smooth}>
                <NavLink to='/home' className='start'>
                    <span className='letter'>S</span>
                    <span className='letter'>T</span>
                    <span className='letter'>A</span>
                    <span className='letter'>R</span>
                    <span className='letter'>T</span>
                </NavLink>
            </motion.div>
        </motion.div>
    );
}

export default LoadingPage;