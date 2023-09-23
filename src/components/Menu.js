import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGraduationCap, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import Scroll from 'react-scroll'

const Menu = () => {
    const offset = -80

    return (
        <Navbar collapseOnSelect expand="lg" style={{ transition: '0.5s ease', backgroundColor: '#fff', position: 'absolute', top: '0px', left: '0px', zIndex: 1, width: '100%' }}>
            <div className='container'>
                <Scroll.Link to='home' className='mt-1 mb-1 me-4 brand' spy={true} offset={offset}>
                    <Navbar.Brand ><strong>Saad Makrod</strong></Navbar.Brand>
                </Scroll.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Scroll.Link to='home' className='mt-1 mb-1 me-4 hover-underline-animation' spy={true} offset={offset}>
                            Home&nbsp;<FontAwesomeIcon icon={faHome}/>
                        </Scroll.Link>
                        <Scroll.Link to='about' className='mt-1 mb-1 me-4 hover-underline-animation' spy={true} offset={offset}>
                            About&nbsp;<FontAwesomeIcon icon={faUser}/>
                        </Scroll.Link>
                        <Scroll.Link to='experience' className='mt-1 mb-1 me-4 hover-underline-animation' spy={true} offset={offset}>
                            Experience&nbsp;<FontAwesomeIcon icon={faGraduationCap}/>
                        </Scroll.Link>
                        <Scroll.Link to='projects' className='mt-1 mb-1 me-4 hover-underline-animation' spy={true} offset={offset}>
                            Projects&nbsp;<FontAwesomeIcon icon={faProjectDiagram}/>
                        </Scroll.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Menu