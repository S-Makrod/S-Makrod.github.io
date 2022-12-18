import React, { useState } from 'react'
import { Card, Row, Col, Modal, Button, Badge } from 'react-bootstrap'

const ProjectModal = ({show, project, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby={`modal-${project.name}`}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id={`modal-${project.name}`}>
                    {project.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {project.text.text}
                </p>
                {project.text.features.length > 0 && <>
                    <p>
                        Features Implemented:
                    </p>
                    <ul>
                        {project.text.features.map(feature => <li key={feature}>{feature}</li>)}
                    </ul>
                </>}
                {project.links.source && <a href={project.links.source} target='_blank' rel='noreferrer' className='btn btn-outline-dark me-2'>See Project</a>}
                {project.links.host && <a href={project.links.host} target='_blank' rel='noreferrer' className='btn btn-outline-dark'>Live Demo</a>}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} className='btn btn-dark'>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Project = ({project}) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Col>
                <Card className='project-card' border="light" onClick={() => setModalShow(true)} role='button'>
                    <Card.Img variant='top' className='project-card-img' src={project.image} />
                    <Card.Body className='text-left'>
                        <Card.Title>{project.name}</Card.Title>
                        {project.tags.map(tag => <Badge key={tag} pill bg="dark" className='project-card-pill me-2 mb-1'>{tag}</Badge>)}
                    </Card.Body>
                </Card>
            </Col>
            <ProjectModal show={modalShow} project={project} onHide={() => setModalShow(false)} />
        </>
    )
}

const Projects = () => {
    const projects = [
        {
            name: 'CS Fundamentals',
            text: {
                text: 'This is a collection of work I have done both inside and outside of school. When visting this repo you will get to see implementations of core computer science concepts such as: searching, sorting, data structure implementations, low level systems programming and theory application.',
                features: []
            },
            image: 'static/cs-fundamentals.png',
            tags: ['Algorithms', 'Data Structures', 'Systems Programming'],
            links: {
                source: 'https://github.com/S-Makrod/CSFundamentals',
            }
        },
        {
            name: 'RBC Certificate Management System',
            text: {
                text: 'This is a Django application used internally at RBC to manage SSL Certificates. The system is a multi-database application, using Microsoft SQL to manage certificate inventory and a SQLite database to manage users. Users are authenticated using LDAP. Once authenticated, they are able to perform two options which is search the database or create a certificate. The search feature queries the Microsoft SQL database and renders the results in a table. Users are able to click on certificates and update, delete, download and either reactivate or deactivate the certificate. When certificates are approved the application sends email notifications to users to let them know their certificates are ready. The frontend of the app was designed using Bootstrap.',
                features: [
                    'Full CRUD capabilities',
                    'Implemented user authentication with LDAP to restrict access to only users with the correct active directory group',
                    'Designed the frontend using Bootstrap, DataTables, and Django Messages optimize user experience',
                    'Developed feature that parsed uploaded certificate files and updated the database'
                ]
            },
            image: 'static/rbc-logo.png',
            tags: ['Django', 'Python', 'Bootstrap', 'Microsoft SQL', 'SQLite'],
            links: []
        },
        {
            name: 'MERN Blog App',
            text: {
                text: 'This is a MERN application developed with CRUD functionality. Users are able to sign-up and log in. If they are not logged in they can view blogs but once logged in they are able to view blogs, create blogs, like blogs, view users, and make comments. The frontend is done with React Bootstrap as well as Toastify for the toasts.',
                features: [
                    'Implemented login and authentication so that users are only able to create blogs and comments once logged in and delete their own blogs',
                    'Designed the frontend using Redux, React Router, React Forms, React Bootstrap and Toastify to create an appealing and easy to use interface for the user',
                    'Enabled the liking of blogs'
                ]
            },
            image: 'static/mern-blog-app.png',
            tags: ['Node.js', 'Express', 'Mongoose', 'React', 'Redux', 'MongoDB'],
            links: {
                source: 'https://github.com/S-Makrod/BlogApp',
            }
        },
        {
            name: 'PERN Blog App',
            text: {
                text: 'This is a PERN application developed with CRUD functionality. Users are able to sign-up and log in. If they are not logged in they can view blogs but once logged in they are able to view blogs, create blogs, like blogs, view users, and make comments. The frontend is done with React Bootstrap as well as Toastify for the toasts.',
                features: [
                    'Implemented login and authentication so that users are only able to create blogs and comments once logged in and delete their own blogs',
                    'Designed the frontend using Redux, React Router, React Forms, React Bootstrap and Toastify to create an appealing and easy to use interface for the user',
                    'Enabled the liking of blogs'
                ]
            },
            image: 'static/pern-blog-app.png',
            tags: ['Node.js', 'Express', 'React', 'Redux', 'Sequelize', 'PostgreSQL',],
            links: {
                source: 'https://github.com/S-Makrod/BlogAppV2',
            }
        },
        {
            name: 'Ads Site',
            text: {
                text: 'This is an ad application developed using Django and Python which has CRUD functionality. Users are able to log in and log out. When logging in users can either use an account or log in using GitHub OAuth. When creating an ad they are able to upload an image to better emphasize their ads. When browsing ads the users are able to search for specific ads and favourite those that interest them. Furthermore users are able to comment on ads.',
                features: [
                    'Full CRUD capabilities',
                    'Implemented file upload to allow users to include an image with their ad posting to enhance the chance of a successful sale',
                    'Implemented GitHub OAuth for user authentication',
                    'Styled the application with Bootstrap to optimize user experience'
                ]
            },
            image: 'static/ads.png',
            tags: ['Django', 'Python', 'Bootstrap', 'MySQL'],
            links: {
                source: 'https://github.com/S-Makrod/DjangoAdsSite',
                host: 'https://saadmakrod.pythonanywhere.com/'
            }
        },
        {
            name: 'Resume Registry',
            text: {
                text: 'This is a resume registry developed using PHP, MySQL, jQuery, JavaScript, HTML, and CSS. It was developed to have CRUD functionality and follows a Model-View-Controller design. You can sign up and sign in to the web application and then create, read, update, and delete profiles. Each profile has a first name, last name, email, headline, and summary as mandatory sections. Additionally, you can add education and positions. For the education I have autocompletion that uses the institution database shown in my demo to autocomplete previously entered schools. Whenever someone enters a school that is not recognized it is added to the institution database. I used htmlentities() and PDO prepare statements to avoid SQL and HTML injection.',
                features: [
                    'Sign In Page: You can create an account, note that once you sign in you can only see profiles that you own',
                    'Sign Up Page: You can create an account note that passwords are stored with a salted hash for security',
                    'Create: You can create profiles through the "Add New Entry" feature (only if you are signed in)',
                    'Read: A table is shown for viewing the data, click on a specific profile name to see more info',
                    'Update: Click the edit link to update an entry (only if you are signed in and you own the profile)',
                    'Delete: Click the delete link to delete an entry (only if you are signed in and you own the profile)'
                ]
            },
            image: 'static/resume-registry.png',
            tags: ['PHP', 'jQuery', 'MySQL'],
            links: {
                source: 'https://github.com/S-Makrod/ResumeRegistry'
            }
        },
        {
            name: 'Medical Clinic',
            text: {
                text: 'This was a group project developed for the final project of CSCB07 (Intro to Software Design) at the University of Toronto. It is a mobile application developed with Java and Android Studio that simulates a medical clinic. We used Agile methodologies to develop this software, specifically we used Scrum. Patients are able to log in. Once logged in they can see a list of doctors and filter through them so that they can find a doctor that meets their needs. Then they can click on a doctor and see their availabilities so that they can book appointments. Doctors are also able to log in. Once logged in they can see their schedule for the week and the patient they are meeting.',
                features: [
                    'Implemented a Model-View-Controller design for the login modules to promote ease of testing and conformance with the SOLID design principles',
                    'Implemented activities that filtered doctors based on user specified filters',
                    'Developed features the allowed users to book appointments'
                ]
            },
            image: 'static/medical-clinic.png',
            tags: ['Java', 'Android Studio', 'Firebase Realtime Database'],
            links: {
                source: 'https://github.com/S-Makrod/MedicalClinic'
            }
        },
    ]

    return (
        <div id='projects' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className='mb-5 p-3 container'>
            <h1 className='section-header'>Projects</h1>
            <hr className='my-3 col-md-6'/>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {projects.map(project => <Project key={project.name} project={project} />)}
            </Row>
        </div>
    )
}

export default Projects
