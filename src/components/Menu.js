import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faGraduationCap, faUser, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav } from 'react-bootstrap'
import Scroll from 'react-scroll'

const Menu = () => {
    const [homeClass, setHomeClass] = useState('hover-underline-animation')
    const [aboutClass, setAboutClass] = useState('hover-underline-animation')
    const [experienceClass, setExperienceClass] = useState('hover-underline-animation')
    const [projectClass, setProjectClass] = useState('hover-underline-animation')
    const [navClass, setNavClass] = useState(false)
    const offset = -80

    const removeUnderline = (handler) => handler('')
    const addUnderline = (handler) => handler('hover-underline-animation')

    const addHomeClass = (handler1, handler2) => {
        handler1(true)
        handler2('hover-underline-animation')
    }

    const removeHomeClass = (handler1, handler2) => {
        handler1('')
        handler2(false)
    }

    useEffect(() => {
        if(aboutClass === '' || experienceClass === '' || projectClass === '') {
            setNavClass(true)
        }
    }, [setNavClass, aboutClass, experienceClass, projectClass])

    return (
        <Navbar collapseOnSelect expand="lg" className={navClass? 'shadow':''} style={{ transition: '0.5s ease',backgroundColor: navClass? '#f8f9fa' : 'transparent'}} fixed='top'>
            <div className='container'>
                <Scroll.Link to='home' className='mt-1 mb-1 me-4 brand' spy={true} offset={offset}>
                    <Navbar.Brand ><strong>Saad Makrod</strong></Navbar.Brand>
                </Scroll.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                        <Scroll.Link activeClass='underline' to='home' className={'mt-1 mb-1 me-4 ' + homeClass} spy={true} offset={offset} onSetActive={() => removeHomeClass(setNavClass, setHomeClass)} onSetInactive={() => addHomeClass(setNavClass, setHomeClass)}>
                            Home&nbsp;<FontAwesomeIcon icon={faHome}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='about' className={'mt-1 mb-1 me-4 ' + aboutClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setAboutClass)} onSetInactive={() => addUnderline(setAboutClass)}>
                            About&nbsp;<FontAwesomeIcon icon={faUser}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='experience' className={'mt-1 mb-1 me-4 ' + experienceClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setExperienceClass)} onSetInactive={() => addUnderline(setExperienceClass)}>
                            Experience&nbsp;<FontAwesomeIcon icon={faGraduationCap}/>
                        </Scroll.Link>
                        <Scroll.Link activeClass='underline' to='projects' className={'mt-1 mb-1 me-4 ' + projectClass} spy={true} offset={offset} onSetActive={() => removeUnderline(setProjectClass)} onSetInactive={() => addUnderline(setProjectClass)}>
                            Projects&nbsp;<FontAwesomeIcon icon={faProjectDiagram}/>
                        </Scroll.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>   
    )
}

export default Menu