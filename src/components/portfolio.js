import React,{ useEffect, useRef } from 'react';
import { motion, useViewportScroll, useAnimation, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import anime from 'animejs/lib/anime.es.js';
import Loading from './loading'

const Portfolio = ()=>{
    const twitter = require('../assets/twitter/0.png').default
    const student = require('../assets/student/3.png').default
    const floods = require('../assets/floods/0.png').default
    const quote = require('../assets/quote/0.png').default
    const calculator = require('../assets/calcultator/0.png').default
    const mealbox = require('../assets/mealbox/0.png').default

    const { scrollYProgress } = useViewportScroll()
    const scaleToNull = useTransform(scrollYProgress , [1,0],[0,1]);
    const scaleToBig = useTransform(scrollYProgress , [0,1],[1,2]);

    return(
        <motion.div className='blackBkg'>
            <motion.div
            className='portfolio'
            id='twitter'
            style={{scale:scaleToNull}}>
                <Loading />
                <a href='https://my-twitter-ish.herokuapp.com/' alt='twitter-ish' target="_blank" rel="noreferrer">
                    <img src={twitter} className='portfolioPhoto'></img>
                    <caption>Twitter-ish</caption>
                    <span>(2021)</span>
                </a>
            </motion.div>
            <Loading />
            <motion.div
            style={{scale:scaleToNull}}
            className='portfolio'
            id='student'>
                <a href='https://student-profiles-test.netlify.app/' alt='student profiles' target="_blank" rel="noreferrer">
                    <img src={student} className='portfolioPhoto' alt='student profiles'></img>
                    <caption>Student Profiles</caption>
                    <span>(2021)</span>
                </a>
            </motion.div>
            <motion.div
            style={{scale:scaleToBig}}
            className='portfolio'
            id='floods'>
                <a href='https://china-floods-2021.herokuapp.com/' alt='China Floods in 2021' target="_blank" rel="noreferrer">
                    <img src={floods} className='portfolioPhoto' alt='China Floods in 2021'></img>
                    <caption>China Floods in 2021</caption>
                    <span>(2021)</span>
                </a>
            </motion.div>
            <motion.div
            style={{scale:scaleToNull}}
            className='portfolio'
            id='quote'>
                <Loading />
                <a href='https://my-random-quote.netlify.app/' alt='Quote machine' target="_blank" rel="noreferrer">
                    <img src={quote} className='portfolioPhoto big' alt='Quote machine'></img>
                    <caption>Quote Machine</caption>
                    <span>(2020)</span>
                </a>
            </motion.div>
            <motion.div
            style={{scale:scaleToNull}}
            className='portfolio'
            id='calculator'>
                <a href='https://snowlll.github.io/calculatorByJavaScript/' alt='Calculator' target="_blank" rel="noreferrer">
                    <img src={calculator} className='portfolioPhoto big' alt='Calculator'></img>
                    <caption>Calculator</caption>
                    <span>(2021)</span>
                </a>
                <Loading />
            </motion.div>
            <motion.div
            style={{scale:scaleToBig}}
            className='portfolio'
            id='mealbox'>
                <a href='http://www.sfu.ca/~nshukri/iat339-MealBox/' alt='meal box' target="_blank" rel="noreferrer">
                    <img src={mealbox} className='portfolioPhoto' id='smallMealBox' alt='meal box'></img>
                    <caption>MealBox</caption>
                    <span>(2017)</span>
                </a>
            </motion.div>
        </motion.div>
    );
}

export default Portfolio;