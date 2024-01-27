import React, { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

import './App.css'
import Mobile from './components/Mobile'

const App = () => {
    const [small, setSmall] = useState(false)
    AOS.init({once: true})

    window.addEventListener('resize', handleWindowResize);

    function handleWindowResize() {
        if (window.innerWidth < 600) {
            setSmall(true)
        } else {
            setSmall(false)
        }
    }

    if (small || window.innerWidth < 600) {
        return (
            <div>
                <Mobile />
            </div>
        )
    }

    return (
        <div>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
