import React from 'react';
import '../assets/css/skills.css';
import ProgressBar from 'react-animated-progress-bar';
import htmlIcon from '../assets/images/html5.svg';
import cssIcon from '../assets/images/css3.svg';
import jsIcon from '../assets/images/js.svg';
import jqueryIcon from '../assets/images/jquery.svg';
import bootstrapIcon from '../assets/images/bootstrap.svg';
import tailwindIcon from '../assets/images/tailwind.svg';
import materialuiIcon from '../assets/images/materialui.svg';
import wordpressIcon from '../assets/images/wordpress.svg';
import shopifyIcon from '../assets/images/shopify.svg';
import reactIcon from '../assets/images/react.svg';

// DOC: https://www.npmjs.com/package/react-animated-progress-bar?activeTab=readme

function Skills() {
  const skillsDetails = [
    {
      skillname: 'HTML',
      skillPercentage: '100',
      skillIcon: htmlIcon
    },
    {
      skillname: 'CSS',
      skillPercentage: '98',
      skillIcon: cssIcon
    },
    {
      skillname: 'JavaScript',
      skillPercentage: '70',
      skillIcon: jsIcon
    },
    {
      skillname: 'jQuery',
      skillPercentage: '70',
      skillIcon: jqueryIcon
    },
    {
      skillname: 'Bootstrap',
      skillPercentage: '100',
      skillIcon: bootstrapIcon
    },
    {
      skillname: 'Tailwind',
      skillPercentage: '70',
      skillIcon: tailwindIcon
    },
    {
      skillname: 'Material UI',
      skillPercentage: '80',
      skillIcon: materialuiIcon
    },
    {
      skillname: 'WordPress',
      skillPercentage: '90',
      skillIcon: wordpressIcon
    },
    {
      skillname: 'Shopify',
      skillPercentage: '70',
      skillIcon: shopifyIcon
    },
    {
      skillname: 'React UI',
      skillPercentage: '50',
      skillIcon: reactIcon
    }
  ]
  const additionalSkills = [
    {
      shortSkillName: 'Debugging'
    },
    {
      shortSkillName: 'Cross-browser Compatibility'
    },
    {
      shortSkillName: 'Theme Customization'
    },
    {
      shortSkillName: 'Custom Product Properties'
    },
    {
      shortSkillName: 'Website Building'
    },
    {
      shortSkillName: 'Scratch Theme'
    },
    {
      shortSkillName: 'Elementor Pro'
    },
    {
      shortSkillName: 'Membership Systems'
    },
    {
      shortSkillName: 'Paypal Integration'
    },
    {
      shortSkillName: 'Document Object Model (DOM)'
    },
    {
      shortSkillName: 'Problem Solving'
    },
    {
      shortSkillName: 'End-to-end Testing'
    },
    {
      shortSkillName: 'Adaptive Design'
    },
    {
      shortSkillName: 'User Requirements'
    },
    {
      shortSkillName: 'Communication'
    },
    {
      shortSkillName: 'Analytical Skills'
    },
    {
      shortSkillName: 'Wireframing'
    },
    {
      shortSkillName: 'Bitbucket'
    },
    {
      shortSkillName: 'Jira'
    },
    {
      shortSkillName: 'Gitlab'
    },
    {
      shortSkillName: 'GitHub'
    },
    {
      shortSkillName: 'Search Engine Optimization (SEO)'
    },
    {
      shortSkillName: 'Project Management'
    },
    {
      shortSkillName: 'App Integration'
    },
    {
      shortSkillName: 'Responsiveness'
    },
    {
      shortSkillName: 'Web Architecture'
    },
    {
      shortSkillName: 'XD, Figma, Zeplin, PSD to WordPress/Shopify/Custom'
    },
    {
      shortSkillName: 'Single Page Applications'
    },
    {
      shortSkillName: 'ACF Pro'
    },
    {
      shortSkillName: 'Gutenberg Editor'
    },
    {
      shortSkillName: 'Custom Gutenberg Blocks'
    },
    {
      shortSkillName: 'WordPress Development'
    },
    {
      shortSkillName: 'Landing Pages'
    },
    {
      shortSkillName: 'Store Design'
    },
    {
      shortSkillName: 'Redesigning'
    },
    {
      shortSkillName: 'Shopify'
    },
    {
      shortSkillName: 'New Store Development'
    },
    {
      shortSkillName: 'Donation Plugin'
    },
    {
      shortSkillName: 'Figma Conversion'
    },
    {
      shortSkillName: 'Adobe XD'
    },
    {
      shortSkillName: 'Plugin UI'
    },
    {
      shortSkillName: 'Theme/Plugin Customization'
    },
    {
      shortSkillName: 'Custom Theme Development'
    },
    {
      shortSkillName: 'Plugins Integration'
    },
    {
      shortSkillName: 'PHP'
    },
    {
      shortSkillName: 'WPML'
    },
    {
      shortSkillName: 'ACF'
    },
    {
      shortSkillName: 'JavaScript'
    },
    {
      shortSkillName: 'HTML'
    },
    {
      shortSkillName: 'jQuery'
    },
    {
      shortSkillName: 'Web Design'
    },
    {
      shortSkillName: 'Web Development'
    },
    {
      shortSkillName: 'SQL (Learning Based)'
    },
    {
      shortSkillName: 'XML (Learning Based)'
    },
    {
      shortSkillName: 'Cascading Style Sheets (CSS)'
    },
    {
      shortSkillName: 'Java (Learning Based)'
    },
    {
      shortSkillName: 'Photoshop'
    },
    {
      shortSkillName: 'Microsoft Office'
    },
    {
      shortSkillName: 'HTML5'
    },
    {
      shortSkillName: 'WordPress'
    },
    {
      shortSkillName: 'C# (Learning Based)'
    },
    {
      shortSkillName: 'Ionic Framework'
    },
    {
      shortSkillName: 'C++ (Learning Based)'
    },
    {
      shortSkillName: 'AutoCAD (Learning Based)'
    },
    {
      shortSkillName: 'Content Management Systems (CMS)'
    },
    {
      shortSkillName: 'SASS'
    },
    {
      shortSkillName: 'Bootstrap'
    },
    {
      shortSkillName: 'Team Management'
    },
    {
      shortSkillName: 'Teamwork'
    },
    {
      shortSkillName: 'Interpersonal Communication'
    },
    {
      shortSkillName: 'Shorthand (Learning Based)'
    },
    {
      shortSkillName: 'npm'
    },
    {
      shortSkillName: 'Gulp.js'
    },
    {
      shortSkillName: 'Speed Optimization'
    },
    {
      shortSkillName: 'E-commerce'
    },
    {
      shortSkillName: 'WordPress Design'
    }
  ]
  return (
    <div className='skills-wrap py-5'>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-2">
          <div className='about-intro'>
            <h1 className='text-[2.7rem] md:text-[4rem] font-black text-[var(--green)]'> Skills <sub>&</sub> Experience</h1>
            <p className='mb-5'>Since beginning my journey as a freelance developer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.
            </p>
            <p className='mb-5'>I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, jQuery, Bootstrap, building small and medium web apps, features, animations, and coding interactive layouts.
            </p>
            <p className='mb-5'>I also have full-stack developer experience with popular open-source CMS like (WordPress & Shopify).
            </p>
            <p>Visit my <a href="https://www.linkedin.com/in/fazeelat-suleman-378841110/" target="_blank" rel="noreferrer">LinkedIn</a> profile for more details or just <a href="/contact">contact</a> me.
            </p>
          </div>

          <div className="skills grid grid-cols-3 items-center gap-y-5 gap-x-5 md:grid-cols-5">
            {skillsDetails.map((skillsdetails, index) => (
              <div key={index} className="skill text-center">
                <ProgressBar width="100%" trackWidth="3" percentage={skillsdetails.skillPercentage} trackPathColor="transparent" trackBorderColor="transparent" />
                <div className='skill-info flex items-center justify-center'><img alt='skill icon' src={skillsdetails.skillIcon} />{skillsdetails.skillname}</div>
              </div>
            ))}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='absolute'>
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="var(--green)" />
                  <stop offset="100%" stopColor="var(--blue)" />
                </linearGradient>
              </defs>
            </svg>
          </div>


        </div>
        <div className="grid grid-cols-1 items-center gap-y-8 gap-x-8 sm:gap-y-16 lg:grid-cols-1">
          <div className='additional-skills-tags'>
            <h2 className='mt-20 text-[1rem] md:text-[2rem] font-black text-[var(--green)]'> Additional Skills</h2>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {
                additionalSkills.map((as, i) => (
                  <li className="mr-1.5 mt-2" key={i}>
                    <div
                      className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-md font-medium leading-5 text-teal-300">
                      {as.shortSkillName}</div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills