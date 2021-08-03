import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css'
import anime from 'animejs/lib/anime.es.js';
import {Loading, Portfolio, Contact} from '../components'
import { motion, useTransform, useViewportScroll, useAnimation } from 'framer-motion'
import { pageTransition } from '../styles/pageTransition'
import { useInView } from 'react-intersection-observer'

const HomePage = ()=>{
    const selfie = require('../assets/self.jpg').default
    const { ref, inView} = useInView()
    const animationRef = useRef(null)
    const animationInView = useAnimation()
    const animationTechInView = useAnimation()

    useEffect(()=>{
        animationRef.current = anime({
            targets: '.jumpName .letter',
            translateX: 200,
            translateY: 350,
            delay: anime.stagger(200, {from: 'center'})
          });
    },[])

    useEffect(()=>{
        animationRef.current = anime({
            targets: '.jumpCircle .circle',
            translateX: -150,
            translateY: 400,
            scale:1.2,
            delay: anime.stagger(100, {from:'center'}),
            // loop:true
          });
    },[])

    useEffect(()=>{
        if(inView){
            animationInView.start({
                x:'80vw',
                y:'8vh',
                transition:{
                    type:'spring',
                    duration:0.3,
                    bounce: 0.3,
                }
            })
        } 
        if(!inView){
            animationInView.start({x:'80vw'})
        }
    },[animationInView])

    useEffect(()=>{
        if(inView){
            animationTechInView.start({
                x:'100vw',
                translateX:'-40vw',
                translateY:'-17vw',
                transition:{
                    type:'tween',
                    duration:1,
                    bounce: 0.2,
                }
            })
        } 
        if(!inView){
            animationTechInView.start({x:'-100vw'})
        }
    },[animationTechInView])

    const [canScroll, setCanScroll] = useState(false)
    const { scrollYProgress } = useViewportScroll()
    const scaleToNull = useTransform(scrollYProgress , [1,0],[0,1]);
    const scaleToBig = useTransform(scrollYProgress , [0,1],[1,2]);
    const opacity = useTransform(scrollYProgress, [0, 1],[1,0]);

    useEffect(()=>{
        canScroll === false ? document.querySelector('body').classList.add('no-scroll') 
                            : document.querySelector('body').classList.remove('no-scroll') 
    },[canScroll])

    return(
        <motion.div 
        transition={pageTransition.smooth}
        onAnimationComplete={()=>setCanScroll(true)}> 
            <motion.div style={{opacity:opacity}} className='jumpName'>
                <span className='letter'>I'M</span>
            </motion.div>
            <motion.div style={{opacity:opacity}} className='jumpName'>
                <span className='letter'>SNOW</span>
                <span className='letter'>LIU</span>
            </motion.div>
            <Loading />
            <motion.div style={{scale:scaleToNull}}>
                <img src={selfie} className='photo' alt='selfie'></img>
            </motion.div>
            <motion.div 
            style={{scale:scaleToBig}}
            animate={animationInView}
            ref ={ref}>
                <p> I'm an aspiring, innovative and diligent Front-end and UI development professional 
                    with a strong passion to produce and deliver robust, well-designed, elegant front-end solutions.</p>
            </motion.div>
            <motion.div 
            style={{scale:scaleToBig}}
            animate={animationTechInView}
            ref ={ref}>
                <ul className='techStack'>
                    <li className='tech'> React </li>
                    <li className='tech'> Bootstrap </li>
                    <li className='tech'> AnimeJS </li>
                    <li className='tech'> Material-UI </li>
                    <li className='tech'> JavaScript </li>
                    <li className='tech'> ES6 </li>
                    <li className='tech'> HTML </li>
                    <li className='tech'> CSS </li>
                    <li className='tech'> Python3 </li>
                    <li className='tech'> Framer Motion</li>
                    <li className='tech'> Git/Github </li>
                </ul>
            </motion.div>
            <motion.div>
                <Portfolio />
                <Contact />
            </motion.div>
        </motion.div>
    );
}

export default HomePage;