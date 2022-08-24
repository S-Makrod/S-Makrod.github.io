import React from 'react'
import { Chrono } from 'react-chrono';

const Experience = () => {
    const items = [
        {
            title: 'May 2022 - Present',
            cardTitle: 'Web Developer',
            cardSubtitle: 'Universty of Toronto T-CAIREM',
            cardDetailedText: `I am currently responsible for developing a standalone education platform across all phases of SDLC using React, Redux, and Material UI on the frontend, with Django and a PostgreSQL database on the backend. The platform is intended to be widely used by T-CAIREM members across Canada.`
        },
        {
            title: 'Jan 2022 - April 2022',
            cardTitle: 'Cyber Security Analyst',
            cardSubtitle: 'Royal Bank of Canada',
            cardDetailedText: `Developed the RBC Certificate Management System using Django and Python which is a CRUD web application used to manage SSL Certificates at RBC. Furthermore, I aided in developing and testing APIs on IBM Mainframe and organized internal events at RBC.`
        },
        {
            title: 'Sept 2021 - April 2022',
            cardTitle: 'Web Developer',
            cardSubtitle: `ScarRobo`,
            cardDetailedText: `Responsible for developing and maintaining the club website, which was developed using React.`
        },
        {
            title: 'Sept 2021 - Dec 2021',
            cardTitle: 'Teaching Assistant',
            cardSubtitle: `University of Toronto`,
            cardDetailedText: `Teaching Assistant for the following courses: CSCA20 (Introduction to Programming) and MGTA01 (Introduction to Canadian Business). I hosted tutorials where I went over any concerns with the weekly assignments, as well as reviewed concepts that were difficult for students. Additionally, I marked tests and held office hours.`
        },
        {
            title: 'Sept 2020 - April 2021',
            cardTitle: 'Virtual Program Monitor',
            cardSubtitle: `University of Toronto`,
            cardDetailedText: `Tailored marketing ideas towards improving student mental health one of which was the "November Challenge" that had over 100 participants. Additionally, I developed multimedia such as infographics, videos, and held events to promote healthy practices.`
        },
        {
            title: 'July 2019 - Aug 2019',
            cardTitle: 'Product Marketing Manager Intern',
            cardSubtitle: `Microsoft`,
            cardDetailedText: `Designed and developed an Inventory Manager App using the Microsoft Power Platform. This app is responsible for managing inventory and smoothening the request process for over 2000 employees; it was later showcased at the Microsoft Canada Annual General Meeting.`
        },
        {
            title: 'July 2018 - Aug 2018',
            cardTitle: 'Administrative Intern',
            cardSubtitle: `Toronto Police Service`,
            cardDetailedText: `Created a presentation on cyber-bullying for the School Liaison Officer that was used to improve the current presentation. Additionally, I developed an email list to improve organization and smoothen the communication process between employees.`
        }
      ]


    return (
        <div className='diagonal-box'>
            <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='experience' className='mb-5 container content' style={{paddingTop: '120px'}}>
                <h1 className='section-header'>Experience</h1>
                <hr className='my-3 col-md-6'/>
                <div className='row'>
                    <Chrono
                        items={items}
                        mode='VERTICAL_ALTERNATING'
                        theme={{
                            primary: '#000',
                            secondary: '#fff',
                            titleColor: '#000'
                        }}
                        hideControls={true}
                    >
                        <div className='chrono-icons'>
                            <img src='static/uoft.svg' alt='uoft' />
                            <img src='static/rbc.svg' alt='rbc' />
                            <img src='static/logo.png' alt='scarrobo' />
                            <img src='static/uoft.svg' alt='uoft' />
                            <img src='static/uoft.svg' alt='uoft' />
                            <img src='static/microsoft.png' alt='microsoft'/>
                            <img src='static/tps.svg' alt='toronto police service' />
                        </div>
                    </Chrono>
                </div>
            </div>
        </div>
    )
}

export default Experience
