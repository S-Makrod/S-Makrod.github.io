import React from 'react'

import { Badge } from 'react-bootstrap'

const About = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" id='about' className='mb-5 container'>
            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <h1 className='section-header'>About Me</h1>
                    <hr className='my-3'/>
                    <div className='row'>
                        <div>
                            <p>
                                Hi, I'm Saad! I am a current second year at the University of Toronto. 
                                I enjoy coding and building new things, one of the reasons I pursued Computer 
                                Science was so that I could build software that everyone can use. 
                                <br/><br/>
                                In my free time I enjoy reading and playing ice hockey (pre-pandemic of course 😢). 
                                I enjoy my quiet time and love a good work-life balance.
                            </p>
                            <a href='Makrod_Saad_Resume.pdf' className='mt-3 p-2 btn btn-outline-dark col-4' target='_blank' rel='noreferrer'>Resume</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-left'>
                    <h2>Languages</h2>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        Java
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        C
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        Python
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        PHP
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        HTML (the L is for language so it counts)
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        CSS
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        JavaScript
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        jQuery
                    </Badge>
                    <h2>Frameworks &#38; Tools</h2>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        React
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        Django
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        Bootstrap
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        VS Code
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3 mb-3'>
                        Git
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3'>
                        SQLite
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3'>
                        PostgreSQL
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3'>
                        MySQL
                    </Badge>
                    <Badge pill bg="dark" className='about-pill me-3'>
                        MongoDB
                    </Badge>
                </div>
            </div>
        </div>
    )
}

export default About
