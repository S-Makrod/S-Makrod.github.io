import React from 'react'

import { Badge } from 'react-bootstrap'

const About = () => {
    const languages = [
        'Python',
        'Java',
        'TypeScript',
        'JavaScript',
        'C',
        'C#',
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
                <div className='col-md-7 mb-3'>
                    <h1 className='section-header'>About Me</h1>
                    <hr className='my-3'/>
                    <div className='row'>
                        <div>
                            <p>
                                Hi, I'm Saad! I am in my fourth year at the University of Toronto, majoring in computer
                                science and minoring in economics. I have had the chance to work with a vast number of
                                groups, including a startup research group, two large financial enterprises, an NGO,
                                a software company, and a fintech company; in roles ranging from cyber security to full stack and
                                backend development.
                                <br/><br/>
                                I have always liked picking up skills and learning new things. One of the reasons I pursued
                                computer science is to solve real problems. As a result, I have thrown myself at as many
                                opportunities as possible. From all these experiences, I have had the chance to work on problems
                                across a myriad of industries, including financial services, fintech, technology,
                                health and safety, research, and consultancy.
                                <br/><br/>
                                When I am not working, I enjoy keeping up with the leafs (sadly, this is painful), going to
                                the gym, swimming, and reading.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 text-left'>
                    <h2>Languages</h2>
                    {languages.map(language => (
                        <Badge key={language} pill bg='#ffc0cb' className='about-pill me-3 mb-3'>
                            {language}
                        </Badge>
                    ))}
                    <h2>Frameworks &#38; Tools</h2>
                    {tools.map(tool => (
                        <Badge key={tool} pill className='about-pill me-3 mb-3'>
                            {tool}
                        </Badge>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
