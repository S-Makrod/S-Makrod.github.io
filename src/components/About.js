import React from 'react'

import { Badge } from 'react-bootstrap'

const About = () => {
    const languages = [
        'Python',
        'JavaScript',
        'C',
        'C#',
        'Java',
        'Ruby',
        'PHP',
        'SQL',
        'CSS',
        'HTML (the L is for language so it counts)',
    ]

    const tools = [
        'Django',
        'Express',
        'Spring Boot',
        '.NET',
        'React',
        'Bootstrap',
        'Material UI',
        'Git',
        'Heroku',
        'SQLite',
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'Neo4j',
        'Figma',
        'Jira'
    ]

    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" id='about' className='mb-5 container'>
            <div className='row'>
                <div className='col-md-6 mb-3'>
                    <h1 className='section-header'>About Me</h1>
                    <hr className='my-3'/>
                    <div className='row'>
                        <div>
                            <p>
                                Hi, I'm Saad, a fourth year student at the University of Toronto.
                                I enjoy coding and building new things, one of the reasons I pursued Computer
                                Science was so that I could build software that everyone can use. I am also pursuing a
                                minor in Economics.
                                <br/><br/>
                                In my free time I enjoy keeping up with the leafs, going to the gym, and reading.
                            </p>
                            <a href='static/Makrod_Saad_Resume.pdf' className='mt-3 p-2 btn btn-dark col-3' target='_blank' rel='noreferrer'>Resume</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-left'>
                    <h2>Languages</h2>
                    {languages.map(language => (
                        <Badge key={language} pill bg="dark" className='about-pill me-3 mb-3'>
                            {language}
                        </Badge>
                    ))}
                    <h2>Frameworks &#38; Tools</h2>
                    {tools.map(tool => (
                        <Badge key={tool} pill bg="dark" className='about-pill me-3 mb-3'>
                            {tool}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
