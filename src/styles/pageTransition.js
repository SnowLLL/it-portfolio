export const pageTransition ={
    // duration:3,
    
    smooth:{
        type:'tween',
        transition:'linear',
        duration:0.6,
        bounce:0.3,
    },

    type:'spring',
    stiffness:50,

    // type:'tween',
    // ease:'easeIn',
    ease:'cirInOut',
    // ease:'anticipate',
    duration:1,

    fadein:{
        opacity: 1,
        scale:1,
    },
    fadeout:{
        opacity: 0,
        scale:0.7,
    },
    
    slideup:{
        opacity: 1,
        y:0
    },
    slidedown:{
        opacity: 0,
        y:'-100vh',
    },

    slideleft:{
        opacity: 1,
        x:0
    },
    slideright:{
        opacity: 0,
        x:'-100vh',
    },
}