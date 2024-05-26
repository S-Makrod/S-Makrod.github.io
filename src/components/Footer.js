import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div id='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <p className='text-start'>&copy; Saad Makrod {year}</p>
                    </div>
                    <div className='col-6 text-end'>
                        <a className='me-2' href='https://www.linkedin.com/in/saad-makrod/' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faLinkedin} /></a>
                        <a className='me-2' href='https://github.com/S-Makrod' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faGithub} /></a>
                        <a href='mailto:saad.makrod@gmail.com' target='_blank' rel='noreferrer'><FontAwesomeIcon className='social-link' size='lg' icon={faEnvelope} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
