import React from 'react'

const Experience = () => {
    const items = [
        {
            date: 'May 2022 - Present',
            key: 't-cairem',
            cardTitle: 'Web Developer',
            cardSubtitle: 'T-CAIREM',
            place: 'T-CAIREM',
            cardDetailedText: `I am currently responsible for developing a standalone education platform across all phases of SDLC using React, Redux, and Material UI on the frontend, with Django and a PostgreSQL database on the backend. The platform is intended to be widely used by T-CAIREM members across Canada.`
        },
        {
            date: 'Jan 2022 - April 2022',
            cardTitle: 'Cyber Security Analyst',
            key: 'csa',
            cardSubtitle: 'RBC',
            place: 'Royal Bank of Canada',
            cardDetailedText: `Developed the RBC Certificate Management System using Django and Python which is a CRUD web application used to manage SSL Certificates at RBC. Furthermore, I aided in developing and testing APIs on IBM Mainframe and organized internal events at RBC.`
        },
        {
            date: 'Sept 2021 - December 2021',
            cardTitle: 'Web Developer',
            key: 'wd',
            cardSubtitle: `ScarRobo`,
            place: 'ScarRobo',
            cardDetailedText: `Responsible for developing and maintaining the club website, which was developed using React.`
        },
        {
            date: 'Fall 2021, Fall 2022',
            cardTitle: 'Teaching Assistant',
            key: 'ta',
            cardSubtitle: `UofT`,
            place: 'University of Toronto',
            cardDetailedText: `Teaching Assistant for the following courses: CSCA20 (Introduction to Programming) and MGTA01 (Introduction to Canadian Business). I hosted tutorials where I went over any concerns with the weekly assignments, as well as reviewed concepts that were difficult for students. Additionally, I marked tests and held office hours.`
        },
        {
            date: 'Sept 2020 - April 2021',
            cardTitle: 'Virtual Program Monitor',
            key: 'vpm',
            cardSubtitle: `UofT`,
            place: 'University of Toronto',
            cardDetailedText: `Tailored marketing ideas towards improving student mental health one of which was the "November Challenge" that had over 100 participants. Additionally, I developed multimedia such as infographics, videos, and held events to promote healthy practices.`
        },
        {
            date: 'July 2019 - Aug 2019',
            cardTitle: 'Product Marketing Manager Intern',
            key: 'pmm',
            cardSubtitle: `Microsoft`,
            place: 'Microsoft',
            cardDetailedText: `Designed and developed an Inventory Manager App using the Microsoft Power Platform. This app is responsible for managing inventory and smoothening the request process for over 2000 employees; it was later showcased at the Microsoft Canada Annual General Meeting.`
        },
        {
            date: 'July 2018 - Aug 2018',
            cardTitle: 'Administrative Intern',
            key: 'ai',
            cardSubtitle: `TPS`,
            place: 'Toronto Police Service',
            cardDetailedText: `Created a presentation on cyber-bullying for the School Liaison Officer that was used to improve the current presentation. Additionally, I developed an email list to improve organization and smoothen the communication process between employees.`
        }
      ]


    return (
        <div className='diagonal-box pt-5'>
            <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='experience' className='mb-5 container content pb-5 pt-5'>
                <h1 className='section-header'>Experience</h1>
                <hr className='my-3 col-md-6'/>
                <div className='row'>
                    <div className='exp-container d-none d-md-flex'>
                        <div className='exp-holder'>
                            <div className="d-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {items.map((item, idx) => <button key={"pill-" + item.key} className={"nav-link exp" + (idx == 0? " active": "")} id={"v-pills-" + item.key + "-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-" + item.key} type="button" role="tab" aria-controls={"v-pills-" + item.key} aria-selected="true">{item.cardSubtitle}</button>)}
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    {items.map((item, idx) => <div key={'group-' + item.key} className={"tab-pane fade" + (idx == 0? " show active": "")} id={"v-pills-" + item.key} role="tabpanel" aria-labelledby={"v-pills-" + item.key + "-tab"}>
                                        <h1>{item.cardTitle} @ <span className='exp-title'>{item.place}</span></h1>
                                        <p>{item.date}</p>
                                        <p>{item.cardDetailedText}</p>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-5 d-md-none'>
                        <div className="accordion" id="exp-accordian">
                            {items.map(item =>
                                <div key={item.key} className="accordion-item">
                                    <h2 className="accordion-header" id={item.key}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse-" + item.key} aria-expanded="false" aria-controls={"collapse-" + item.key}>
                                            {item.place}
                                        </button>
                                    </h2>
                                    <div id={"collapse-" + item.key} className="accordion-collapse collapse" aria-labelledby={item.key} data-bs-parent="#exp-accordian">
                                        <div className="accordion-body">
                                            <strong>{item.cardTitle} | {item.date}</strong> <br/> <br/> {item.cardDetailedText}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
