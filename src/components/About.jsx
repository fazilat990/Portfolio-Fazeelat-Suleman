import React from 'react';
import { Link } from 'react-router-dom';

function About() {

    const education = [
        {
            institute: 'APTECH Computer Education Pakistan',
            degree: 'DISM (Diploma in System Management)',
            year: '2015-16',
            description: 'Designing & Programming',
        },
        {
            institute: 'Royal Group of Colleges',
            degree: 'Bachelors Degree (B.Com)',
            year: '2008-10',
            description: 'Business/Commerce, General',
        },
    ]

    const certifications = ['Office Management', 'Shorthand', 'AutoCAD', 'Web Designing and Development', 'Graphics Designing' ,'Certified Trainer', 'WordPress', 'Shopify']

    const experience = [
        {
            company: 'Codup* + Dezital',
            duration: 'Nov 2021 - Present',
            jobTitle: 'Frontend/Shopify/WordPress Developer',
            city: 'Lahore, Pakistan',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            tags: ['React', 'Git', 'SCSS', 'HTML', 'CSS', 'Javascript', 'jQuery', 'WordPress', 'Shopify', 'Bootstrap', 'Custom Website Development', 'Customizations', 'UI/UX', 'Figma/Zeplin/PSD/XD to WordPress/Custom Code']
        },
        {
            company: 'Explore Logics IT Solutions',
            duration: 'Mar 2019 - Nov 2021',
            jobTitle: 'Frontend/Wordpress Developer',
            city: 'Lahore, Pakistan',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            tags: ['Git', 'SCSS', 'HTML', 'CSS', 'Javascript', 'jQuery', 'Figma/Zeplin/PSD/XD to WordPress/Custom Code', 'WordPress', 'Bootstrap', 'Custom Website Development', 'Customizations', 'UI/UX']
        },
        {
            company: 'Green Systems',
            duration: 'Aug 2015 - Feb 2019',
            jobTitle: 'UI/UX | Wordpress Developer',
            city: 'Gujranwala, Pakistan',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            tags: ['Git', 'SCSS', 'HTML', 'CSS', 'Javascript', 'jQuery', 'Figma/Zeplin/PSD/XD to WordPress/Custom Code', 'WordPress', 'Bootstrap', 'Custom Website Development', 'Customizations', 'UI/UX']
        },
        {
            company: 'Aptech Computer Education',
            duration: 'Jul 2015 - Feb 2019',
            jobTitle: 'Web Designing Lecturer',
            city: 'Gujranwala, Pakistan',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            tags: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Bootstrap', 'Custom Website Development', 'UI/UX']
        },
        {
            company: 'Carino Technologies (PVT) Ltd',
            duration: 'Mar 2017 - Aug 2017',
            jobTitle: 'Wordpress | Ionic Apps UI Frontend Developer',
            city: 'Islamabad, Pakistan',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            tags: ['Ionic', 'Git', 'SCSS', 'HTML', 'CSS', 'Javascript', 'jQuery', 'Figma/Zeplin/PSD/XD to WordPress/Custom Code', 'WordPress', 'Bootstrap', 'Custom Website Development', 'Customizations', 'UI/UX']
        },
        {
            company: 'Private Schools',
            duration: 'Mar 2010 - Jun 2015',
            jobTitle: 'Teacher',
            city: 'Gujranwala, Pakistan',
            description: 'Deliver high-quality, robust production code for a diverse array of projects for clients, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
            tags: ['English', 'Computer', 'Maths', 'Social Studies', 'Islamiyat']
        }
    ]

    return (
        <div className='about-wrap py-5'>
            <div className="container">
                <div className="grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-2">
                    <div className='about-intro'>
                        <h1 className='sm:text-5xl text-4xl font-medium title-font mb-4 text-[var(--green)]'> <span className='font-[Aerospace]'>I</span>, Me <sub>&</sub> Myself</h1>
                        <p className='mb-5'>I'm an ambitious Developer located in Pakistan. I have a serious passion for UI effects, creating intuitive, dynamic user experiences in Frontend Designing and Development. I am energetic, Well-organised person, problem solver, independent employee with high attention to detail, full of passion and ever ready to face the challenges.
                        </p>
                        <p>I am very much eager to serve in the fields of Web Development to add more value which leads to increase in the profitability of organization.
                        </p>
                        <Link to="/contact" className="mt-5 px-[50px] py-4 text-[var(--bg)] text-center border border-solid border-[var(--green)] rounded bg-[var(--green)] hover:bg-[var(--blue)] hover:border-[var(--blue)] hover:text-white transition-colors duration-300 font-black inline-block">Contact Me</Link>
                    </div>
                    <div className="skills">
                        <h2 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-[var(--green)] mb-5'>Education</h2>

                        {
                            education.map((ei, index, { length }) => (
                                <div className={`flex relative ${(index + 1 === length) ? '' : 'pb-10'} sm:items-center`} key={index}>

                                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[var(--green)] text-[#000000] relative z-10 title-font font-bold text-sm">{index + 1}</div>
                                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                        <div className="flex-shrink-0 w-24 h-24 bg-[var(--blue)] text-[var(--green)] font-bold rounded-full inline-flex items-center justify-center">
                                            {ei.year}
                                        </div>
                                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                            <div className='text-gray text-sm'>{ei.institute}</div>
                                            <h2 className="font-[900] title-font mb-1 text-[var(--green)]"> {ei.degree}</h2>
                                            <p className="leading-relaxed">{ei.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="certification-wrap pt-20">
                    <div className="flex flex-col text-center w-full mb-10">
                        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[var(--green)]">Certifications</h2>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Demonstrating expertise and commitment through diverse certifications in Web Development.</p>
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {
                            certifications.map((certtification, index) => (
                                <div className="p-2 lg:w-1/4 md:w-1/2 w-full" key={index}>
                                    <div className="h-full flex items-center border-gray-700 border p-4 rounded-lg">
                                        <div className="flex-grow">
                                            <h2 className="title-font font-medium">{certtification}</h2>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="experience-wrap py-20">
                    <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-[var(--green)]">Work Experience</h2>
                    <div className="-my-8 divide-y-2 divide-gray-700">
                    {
                        experience.map((exp, index) => (
                            <div className="py-8 flex flex-wrap md:flex-nowrap" key={index}>
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font">{exp.company}</span>
                                    <span className="mt-1 text-sm">{exp.duration} </span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-semibold title-font hover:text-[var(--green)]">{exp.jobTitle}
                                    </h2>
                                    <p className="text-gray-400 mb-2">{exp.city}</p>
                                    <p className="leading-relaxed">{exp.description}</p>
                                    <div className="skills-tags">
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            {
                                                exp.tags.map((tag, i) => (
                                                    <li className="mr-1.5 mt-2" key={i}>
                                                    <div
                                                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                        {tag}</div>
                                                    </li>
                                                ))    
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))
                    }    
                       

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About