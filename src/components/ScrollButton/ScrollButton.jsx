import React, { useState } from 'react';
import { useEffect } from 'react';
import './ScrollButton.css'
import scroll from '../../IMG/scroll.png'

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        toggleVisible();
        return () => {
            setVisible({});
        };
    }, []);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div style={{ display: visible ? 'inline' : 'none' }}>
            <img src={scroll} alt="scroll" id='scroll-button' onClick={scrollToTop} />
        </div>

    );
}

export default ScrollButton;