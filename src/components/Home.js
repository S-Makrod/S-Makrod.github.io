import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleWindowResize)

    function handleMouseMove(e) {
        if (width > 600) {
            const spansSlow = document.querySelectorAll('.spanSlow')
            const spansFast = document.querySelectorAll('.spanFast')

            let normalizedPosition = e.pageX / (width/2) - 1
            let speedSlow = 100 * normalizedPosition
            let speedFast = 200 * normalizedPosition

            spansSlow.forEach((span) => {
                span.style.transform = `translate(${speedSlow}px)`
            })

            spansFast.forEach((span) => {
                span.style.transform = `translate(${speedFast}px)`
            })
        }
    }

    function handleWindowResize() {
        setWidth(window.innerWidth)
    }

    return (
        <div id='home' className='jumbotron' data-aos='zoom-in' data-aos-delay='100'>
            <div className="wrap">
                <div className="header-line">
                    <div className="header-left">
                        <div className="header-content">
                            <span className="header-text spanSlow">Hi I'm</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-content">
                            <span className="header-text spanSlow">Hi I'm</span>
                        </div>
                    </div>
                </div>
                {/* <div className="header-line">
                    <div className="header-left">
                        <div className="header-content">
                            <span className="header-text spanSlow">I'm</span>
                        </div>
                    </div>
                <div className="header-right">
                    <div className="header-content">
                        <span className="header-text spanSlow">I'm</span>
                    </div>
                </div>
                </div> */}
                <div className="header-line">
                    <div className="header-left">
                        <div className="header-content">
                            <span className="header-text spanFast">Saad</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-content">
                            <span className="header-text spanFast">Saad</span>
                        </div>
                    </div>
                </div>
                <div className="header-line">
                    <div className="header-left">
                        <div className="header-content">
                            <span className="header-text spanSlow">Makrod</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-content">
                            <span className="header-text spanSlow">Makrod</span>
                        </div>
                    </div>
                </div>
                <div className="header-line">
                    <div className="header-left">
                        <div className="header-content">
                            <span className="header-text line-pulse"></span>
                        </div>
                    </div>
                    <div className="header-right">
                        <div className="header-content">
                            <span className="header-text line-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ms-2 social-link-container'>
                <a className='me-2' href='https://www.linkedin.com/in/saad-makrod/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faLinkedin} /></a>
                <a className='me-2' href='https://github.com/S-Makrod' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faGithub} /></a>
                <a className='me-2' href='mailto:saad.makrod@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faEnvelope} /></a>
                <a href='static/Makrod_Saad_Resume.pdf' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faPaperclip} /></a>
            </div>
            <div className="header-arrow">
                <i className="arrow down"></i>
                <i className="arrow down"></i>
                <i className="arrow down"></i>
            </div>
        </div>
    )
}

export default Home
