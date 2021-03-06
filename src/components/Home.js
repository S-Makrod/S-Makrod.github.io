import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import TypeAnimation from 'react-type-animation';

const Home = () => {
    return (
        <div id='home' className='jumbotron' data-aos='zoom-in' data-aos-delay='100'>
            <h1 className='header'>Hi I'm Saad Makrod</h1>
            <div className='mb-2 typing-container'>
                <TypeAnimation cursor={true}
                    sequence={[
                    'I\'m a developer',
                    5000,
                    'I\'m a computer science student',
                    5000,
                    'I\'m a problem solver',
                    5000
                    ]}
                    wrapper="h3"
                    repeat={Infinity}
                />
            </div>
            <div>
                <a className='me-2' href='https://www.linkedin.com/in/saad-makrod/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faLinkedin} /></a>
                <a className='me-2' href='https://github.com/S-Makrod' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faGithub} /></a>
                <a href='mailto:saad.makrod@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faEnvelope} /></a>
            </div>
        </div>
    )
}

export default Home
