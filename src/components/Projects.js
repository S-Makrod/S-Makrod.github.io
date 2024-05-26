import React from 'react'
import { Row } from 'react-bootstrap'

const Projects = () => {
    const projects = [
        {
            name: 'CS Fundamentals',
            text: 'Collection of work I have done both in and out of school. The repository contains implementations of core computer science concepts such as: searching, sorting, data structure implementations, low level systems programming and theory application.',
            tags: ['Algorithms', 'Data Structures', 'Systems Programming'],
            source: 'https://github.com/S-Makrod/CSFundamentals',
        },
        {
            name: 'Blog App',
            text: 'Blog application developed with CRUD functionality. If they are not logged in they can view blogs but once logged in they are able to view, create, and like blogs, as well as view users, and make comments. The frontend is done with React Bootstrap as well as Toastify for the toasts. There are two implementations, one based on PostgreSQL and one on MongoDB.',
            tags: ['Node.js', 'Express', 'Mongoose', 'React', 'Redux', 'MongoDB', 'Sequelize', 'PostgreSQL',],
            source: 'https://github.com/S-Makrod/BlogApp',
        },
        {
            name: 'Ads Site',
            text: 'Ad application developed using Django and Python which has CRUD functionality. When logging in users can either create an account or log in using GitHub OAuth. When creating an ad they are able to upload an image to better emphasize their ads. When browsing ads the users are able to search for specific ads and favourite those that interest them. Furthermore users are able to comment on ads.',
            tags: ['Django', 'Python', 'Bootstrap', 'MySQL'],
            source: 'https://github.com/S-Makrod/DjangoAdsSite',
        },
        {
            name: 'Resume Registry',
            text: 'Resume registry developed using PHP. It was developed to have CRUD functionality and follows a MVC design. You can sign up and sign in to the web application and then create, read, update, and delete profiles. Additionally, you can add education and positions.',
            tags: ['PHP', 'jQuery', 'MySQL'],
            source: 'https://github.com/S-Makrod/ResumeRegistry',
            demo: 'https://youtu.be/ENi-VVnlCSk'
        },
        {
            name: 'Medical Clinic',
            text: 'Project developed for CSCB07 (Intro to Software Design) at the University of Toronto. It is a mobile application developed with Java and Android Studio that simulates a medical clinic.',
            tags: ['Java', 'Android Studio', 'Firebase Realtime Database'],
            source: 'https://github.com/S-Makrod/MedicalClinic',
            demo: 'https://youtu.be/gmhzkBnsJZ0'
        },
    ]

    return (
        <div id='projects' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='mb-5 p-3 container'>
            <h1 className='section-header'>Side Projects</h1>
            <hr className='my-3 col-md-6'/>
            <Row xs={1} md={2} lg={3} className='g-4 card-container'>
                {projects.map(project =>
                    <div key={project.name} className="item">
                        <div className="card">
                            <div className="circle circle2"></div>
                            <div className="circle">
                                <h2>{project.name}</h2>
                                <p className='card-skills'>{project.tags.join(', ')}</p>
                            </div>
                            <div className='card-content'>
                                <p>{project.text}</p>
                                {project.source && <a href={project.source} target='_blank' rel='noreferrer' className='btn btn-outline-dark card-btn me-2'>Visit Repository</a>}
                                {project.demo && <a href={project.demo} target='_blank' rel='noreferrer' className='btn btn-outline-dark card-btn me-2'>View Demo</a>}
                            </div>
                        </div>
                    </div>)
                }
            </Row>
        </div>
    )
}

export default Projects
