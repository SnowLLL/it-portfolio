import React,{ useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Contact = ()=>{
    const { ref, inView} = useInView()
    const animationVerticalInView = useAnimation()

    useEffect(()=>{
        if(inView){
            animationVerticalInView.start({
                y:'5vh',
                transition:{
                    type:'spring',
                    duration:1,
                    bounce: 0.2,
                }
            })
        } 
        if(!inView){
            animationVerticalInView.start({
                y:'20vh',
            })
        }
    },[inView,animationVerticalInView])

    return(
        <motion.div
        animate={animationVerticalInView}
        ref ={ref}
        className='contact'>
            <a href="https://github.com/SnowLLL?tab=repositories" target="_blank" alt='twitter' rel="noreferrer"><i class="fa fa-github">&nbsp;</i>GitHub</a>
            <a href="mailto:liuxueworking@gmail.com" target="_blank" alt='email' rel="noreferrer"><i class="fa fa-at">&nbsp;</i>Email</a>
            <a href="https://www.linkedin.com/in/snow-liu/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin">&nbsp;</i>Linkedin</a>
            <div> &copy; Created in 2021 Summer by Snow Liu &nbsp;</div>
        </motion.div>
    );
}

export default Contact;