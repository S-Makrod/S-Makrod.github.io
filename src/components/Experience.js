import React from 'react'

const Experience = () => {
    const items = [
        {
            date: 'May 2024 - Aug 2024',
            key: 'gws',
            cardTitle: 'Developer Consultant',
            cardSubtitle: 'Guidewire',
            place: 'Guidewire Software',
            cardDetailedText: ``,
            points: [
                'Architected and presented enhancement to vulnerability detection system used in cloud transition projects to stakeholders',
                'Developed automation tool using Java to repair 12 vulnerabilities in client applications, saving days of manual effort',
                'Built CLI application using Python to transition property files to XML configuration files, saving 30+ consultants hours'
            ]
        },
        {
            date: 'Jun 2023 - May 2024',
            key: 'aii',
            cardTitle: 'Software Engineer',
            cardSubtitle: 'African Impact',
            place: 'African Impact Initiative',
            cardDetailedText: `Worked with NGO to build foundation of Venture Building Platform using Django, React, TypeScript, and PostgreSQL. The product is currently progressing towards MVP launch`,
            points: [
                'Engineered Django email service capable of delivering HTML-formatted emails across 10 distinct business cases',
                'Implemented routing layer for React Redux app to auto-toggle between 4 user access levels and improve security',
                'Utilized TypeScript generics and Axios to develop customizable REST API client and integrate with 3 external APIs',
                'Leveraged GitHub Hooks, GitHub Pipelines, and ESLint resulting in a 50% increase in development standards compliance'
            ]
        },
        {
            date: 'Fall 2021, Fall 2022, Winter 2024',
            cardTitle: 'Teaching Assistant',
            key: 'ta',
            cardSubtitle: `UofT`,
            place: 'University of Toronto',
            cardDetailedText: `Teaching Assistant for the following courses: CSCA20 (Introduction to Programming) and MGTA01 (Introduction to Canadian Business). I hosted tutorials where I went over any concerns with the weekly assignments, as well as reviewed concepts that were difficult for students. Additionally, I marked tests and held office hours.`,
            points: [
                `Teaching Assistant for the following courses: CSCA08 (Introduction to Computer Science), CSCA20 (Introduction to Programming) and MGTA01 (Introduction to Canadian Business)`,
                'Managed tutorials of over 30 students teaching programming fundamentals related to syntax, testing, refactoring, and data processing using Python, Jupyter Notebooks, and SQL',
            ]
        },
        {
            date: 'Sep 2023 - Dec 2023',
            key: 'eco',
            cardTitle: 'Software Developer',
            cardSubtitle: 'EcoOnline',
            place: 'EcoOnline Global',
            cardDetailedText: `Developing microservices for notification system in R&D department using C#, .NET, Docker, Kafka, and Datadog`,
            points: [
                'Created Datadog pipeline to parse and correctly classify application logs across 5 unique statuses for traceability purposes',
                'Authored telemetry library using Prometheus, C#, and .NET, providing application monitoring across 5+ microservices',
                'Orchestrated load test using Docker and Grafana k6 simulating 20,000 users and 150,000 requests via Kafka and REST'
            ]
        },
        {
            date: 'Jan 2023 - Apr 2023',
            key: 'omers',
            cardTitle: 'Backend Developer',
            cardSubtitle: 'OMERS',
            place: 'OMERS',
            cardDetailedText: `Worked on the calculations team, developing REST APIs for OMERS services. Additionally, developed an in-memory caching system that reduces regression test runtime by over 70% and created a POC for the redesign of the validation framework, which is responsible for verification of all results and error handling.`,
            points: [
                'Worked in agile setting to build microservices using Java, Spring Boot, Google Cloud Platform, and Apache Camel',
                'Automated management of semantic versioning using GitLab Pipelines when publishing JARs to Maven repositories',
                'Reduced regression tests run time by 70% by creating in-memory caching system using aspect-oriented programming',
                'Enhanced validation framework using Spring Constraint Validator to reduce complexity of managing payload validations'
            ]
        },
        {
            date: 'May 2022 - Jan 2023',
            key: 't-cairem',
            cardTitle: 'Full Stack Developer',
            cardSubtitle: 'T-CAIREM',
            place: 'T-CAIREM',
            cardDetailedText: `I am currently responsible for developing a standalone education platform across all phases of SDLC using React, Redux, and Material UI on the frontend, with Django and a PostgreSQL database on the backend. The platform is intended to be widely used by T-CAIREM members across Canada.`,
            points: [
                'Designed PostgreSQL database schema defining relations between users, resource entities, ratings, and favourites',
                'Collaborated with 8 stakeholders to define requirements and deliver Django and React Redux single-page application',
                'Engineered CMS equipped with analytic dashboard to centralize resource approval and track 7 metrics for data analysis',
                'Integrated client-side Google OAuth2 authentication using Python, and Axios, allowing for passwordless authentication'
            ]
        },
        {
            date: 'Jan 2022 - Apr 2022',
            cardTitle: 'Cyber Security Analyst',
            key: 'csa',
            cardSubtitle: 'Royal Bank of Canada',
            place: 'RBC',
            cardDetailedText: `Developed the RBC Certificate Management System using Django and Python which is a CRUD web application used to manage SSL Certificates at RBC. Furthermore, I aided in developing and testing APIs on IBM Mainframe and organized internal events at RBC.`,
            points: [
                'Constructed X.509 certificate parser using Python allowing users to upload and download certificates in Django app',
                'Filtered Microsoft SQL database by developing search API using Django to execute advanced queries across 10+ fields',
                'Decreased application access time for 25+ employees by implementing LDAP authentication integrated with Azure AD',
                'Streamlined cryptographic key creation on Mainframe using hashing algorithms and Rexx, cutting generation time by 50%',
            ]
        },
        // {
        //     date: 'Sept 2020 - April 2021',
        //     cardTitle: 'Virtual Program Monitor',
        //     key: 'vpm',
        //     cardSubtitle: `UofT`,
        //     place: 'University of Toronto',
        //     cardDetailedText: `Tailored marketing ideas towards improving student mental health one of which was the "November Challenge" that had over 100 participants. Additionally, I developed multimedia such as infographics, videos, and held events to promote healthy practices.`,
        //     points: [
        //         'Tailored marketing ideas towards improving student mental health one of which was the "November Challenge" that had over 100 participants' ,
        //         'Developed multimedia such as infographics, videos, and held events to promote healthy practices',
        //     ]
        // },
        {
            date: 'Jul 2019 - Aug 2019',
            cardTitle: 'Product Marketing Manager Intern',
            key: 'pmm',
            cardSubtitle: `Microsoft`,
            place: 'Microsoft',
            cardDetailedText: `Designed and developed an Inventory Manager App using the Microsoft Power Platform. This app is responsible for managing inventory and smoothening the request process for over 2000 employees; it was later showcased at the Microsoft Canada Annual General Meeting.`,
            points: [
                'Launched internal inventory tracker that smoothened inventory management for over 2000 employees using Microsoft Power Platform, later presented at the Microsoft Canada Annual General Meeting',
            ]
        },
        // {
        //     date: 'July 2018 - Aug 2018',
        //     cardTitle: 'Administrative Intern',
        //     key: 'ai',
        //     cardSubtitle: `TPS`,
        //     place: 'Toronto Police Service',
        //     cardDetailedText: `Created a presentation on cyber-bullying for the School Liaison Officer that was used to improve the current presentation. Additionally, I developed an email list to improve organization and smoothen the communication process between employees.`,
        //     points: [
        //         'Created presentation on cyber-bullying for School Liaison Officer that was used to improve the current presentation',
        //         'Developed email list to improve organization and smoothen the communication process between employees'
        //     ]
        // }
    ]

    return (
        <div className='diagonal-box pt-5'>
            <div data-aos='fade-up' data-aos-duration='1000' data-aos-easing='ease-in-out' id='experience' className='mb-5 container content pb-5 pt-5'>
                <h1 className='section-header'>Experience</h1>
                <hr className='my-3 col-md-6'/>
                <div className='row'>
                    <div className='exp-container d-md-flex'>
                        <div className='exp-holder'>
                            <div className="d-flex align-items-start">
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    {items.map((item, idx) => <button key={"pill-" + item.key} className={"nav-link exp" + (idx === 0? " active": "")} id={"v-pills-" + item.key + "-tab"} data-bs-toggle="pill" data-bs-target={"#v-pills-" + item.key} type="button" role="tab" aria-controls={"v-pills-" + item.key} aria-selected="true">{item.cardSubtitle}</button>)}
                                </div>
                                <div className="tab-content" id="v-pills-tabContent">
                                    {items.map((item, idx) => <div key={'group-' + item.key} className={"tab-pane fade" + (idx === 0? " show active": "")} id={"v-pills-" + item.key} role="tabpanel" aria-labelledby={"v-pills-" + item.key + "-tab"}>
                                        <h1>{item.cardTitle} <span className='exp-title'>@ {item.place}</span></h1>
                                        <p>{item.date}</p>
                                        <ul>
                                            {item.points.map((point, idx) => <li key={item.key + '-' + idx}>{point}</li>)}
                                        </ul>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
