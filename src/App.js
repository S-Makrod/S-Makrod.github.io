import React from 'react'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Footer from './components/Footer'

// todo styling and colouring
// todo need content put dummy stuff for now
const App = () => {
    AOS.init({once: true})
    return (
        <div>
            <Menu />
            <Home />
            <About />
            <Experience />
            <Projects />
            <Footer />
        </div>
    )
}

export default App
