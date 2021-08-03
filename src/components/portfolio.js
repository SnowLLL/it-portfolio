import React,{ useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Portfolio = ()=>{
    const { ref, inView} = useInView()
    const animationHorizontalInView = useAnimation()
    const twitter = require('../assets/twitter/0.png').default
    const student = require('../assets/student/0.png').default
    const floods = require('../assets/floods/0.png').default
    const quote = require('../assets/quote/0.png').default
    const calculator = require('../assets/calcultator/0.png').default
    const mealbox = require('../assets/mealbox/0.png').default

    useEffect(()=>{
        if(inView){
            animationHorizontalInView.start({
                x:'2vw',
                y:'20vh',
                transition:{
                    type:'spring',
                    duration:1,
                    bounce: 0.2,
                }
            })
        } 
        if(!inView){
            animationHorizontalInView.start({
                x:'-100vw',
                y:'20vh',
            })
        }
    },[inView])

    return(
        <div className='blackBkg'>
            <motion.div
            animate={animationHorizontalInView}
            ref ={ref}
            className='portfolio'>
                <a href='https://my-twitter-ish.herokuapp.com/' alt='twitter' target="_blank"><img src={twitter} className='portfolioPhoto'></img></a>
                <a href='https://student-profiles-test.netlify.app/' alt='student' target="_blank"><img src={student} className='portfolioPhoto'></img></a>
                <a href='https://china-floods-2021.herokuapp.com/' alt='floods' target="_blank"><img src={floods} className='portfolioPhoto'></img></a>
                <a href='https://my-random-quote.netlify.app/' alt='quote' target="_blank"><img src={quote} className='portfolioPhoto'></img></a>
                <a href='https://snowlll.github.io/calculatorByJavaScript/'alt='calculator' target="_blank"><img src={calculator} className='portfolioPhoto'></img></a>
                <a href='http://www.sfu.ca/~nshukri/iat339-MealBox/' alt='mealbox' target="_blank"><img src={mealbox} className='portfolioPhoto'></img></a>
            </motion.div>
        </div>
    );
}

export default Portfolio;