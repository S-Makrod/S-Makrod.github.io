import React from 'react'
import { Chrono } from 'react-chrono';

const Experience = () => {
    const items = [
        {
          title: 'Jan 2022 - Present',
          cardTitle: 'Cyber Security Analyst',
          cardSubtitle:
            'Royal Bank of Canada',
          cardDetailedText: `Developed the RBC Certificate Management System using Django and Python which is a CRUD web application used to manage SSL Certificates at RBC. Furthermore, I aided in developing and testing APIs on IBM Mainframe and organized internal events at RBC.`
        },
        {
          title: 'Sept 2021 - Present',
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
          cardDetailedText: `Tailored marketing idea towards improving student mental health one of which was the "November Challenge" that had over 100 participants. Additionally, I developed multimedia such as infographics and videos to promote healthy practices.`
        },
        {
          title: 'July 2019 - Aug 2019',
          cardTitle: 'Product Marketing Manager Intern',
          cardSubtitle: `Microsoft`,
          cardDetailedText: `Designed and developed an Inventory Manager App, this app is responsible for managing inventory and smoothening the request application for over 2000 employees; it was later showcased at the Microsoft Canada Annual General Meeting.`
        },
        {
          title: 'July 2018 - Aug 2018',
          cardTitle: 'Administrative Intern',
          cardSubtitle: `Toronto Police Service`,
          cardDetailedText: `Created a presentation on cyberbullying for School Liaison Officer that was used to improve the current presentation. Additionally, I developed an email list to improve organization and smoothen the communication process between employees.`
        }
      ]
  
    
    return (
        <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='experience' className='mb-5 container'>
            <h1 className='section-header'>Experience</h1>
            <hr className='my-3 col-md-9'/>
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
    )
}

export default Experience
