import React from 'react';
import '../styles/style.css'

const MouseMoveDown =()=>{
    return (
        <div class="mouse_scroll">
            <div class="mouse">
                <div class="wheel"></div>
            </div>
            <div>
                <span class="m_scroll_arrows unu"></span>
                <span class="m_scroll_arrows doi"></span>
                <span class="m_scroll_arrows trei"></span>
            </div>
        </div>
    );
}

export default MouseMoveDown;