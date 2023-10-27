'use client'

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSinit = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-in-quad',
            duration: 1000,
            once: true
        })
    }, [])

    return null
}

