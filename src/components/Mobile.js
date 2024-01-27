import React from 'react'
import TypeAnimation from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperclip } from '@fortawesome/free-solid-svg-icons'

const Mobile = () => {
    return (
        <div className='mobile' data-aos='zoom-in' data-aos-delay='100'>
            <h1 className='mobile-header'>Hi I'm Saad</h1>
            <div className='ms-2 mb-2 typing-container'>
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
            <div className='ms-2'>
                <a className='me-2' href='https://www.linkedin.com/in/saad-makrod/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faLinkedin} /></a>
                <a className='me-2' href='https://github.com/S-Makrod' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faGithub} /></a>
                <a className='me-2' href='mailto:saad.makrod@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faEnvelope} /></a>
                <a href='static/Makrod_Saad_Resume.pdf' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' border size='lg' icon={faPaperclip} /></a>
            </div>
        </div>
    )
}

export default Mobile