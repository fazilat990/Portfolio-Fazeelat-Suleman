import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import loaderImage from '../assets/images/loader.gif';
import phoneIcon from '../assets/images/phone.svg';
import skypeIcon from '../assets/images/skype.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import locationIcon from '../assets/images/location.svg';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8eg1969', 'template_ufstjzb', form.current, 'AyVyKJIkko0fptuZJ')
      .then((result) => {
        console.log(result.text);
        setTimeout(function () {
          document.querySelector('.success-response').innerHTML = "Message Sent";
        }, 5000);
        document.getElementById("contactform").reset();
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });
  };

  const contactInfo = [
    {
      text: 'Request Phone No!',
      icon: phoneIcon,
      link: 'mailto:fazilat.990@gmail.com'
    },
    {
      text: 'fazilat.990',
      icon: skypeIcon,
      link: 'skype:fazilat.990'
    },
    {
      text: 'LinkedIn',
      icon: linkedinIcon,
      link: 'https://www.linkedin.com/in/fazeelat-suleman-378841110/'
    },
    {
      text: 'Lahore, Pakistan',
      icon: locationIcon,
      link: ''
    }
  ]

  return (
    <div className='contact-wrap'>
      <div className="container">
        <div className="items-center flex flex-wrap py-20">
          <div className="formwrap lg:w-3/12">
            <div className='text-[2.7rem] md:text-[5rem] text-center leading-none'>
              <span className="block">Want to</span>
              <strong className='font-black block font-[Aerospace] text-[var(--green)]'>Start</strong>
              <span className="block">a <strong>New </strong></span>
              <span className="block ml-[100px]">Project?</span>
            </div>
            <div className="text-end mt-5 underline underline-offset-4">
              <h3>Let's get started!
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z" fill="#1C274C" />
                  <path d="M14 6L20 12L14 18" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h3>
            </div>
          </div>
          <div className="contact-info-wrap lg:w-3/12"></div>
          <div className="contact-info-wrap lg:w-6/12">
            <div className="contact-info mb-3">
              <div className="email text-[2rem]"><a href='mailto:fazilat.990@gmail.com'>fazilat.990@gmail.com</a></div>
            </div>
            <div className="social-links mb-10">
              <div className="flex flex-wrap lg:w-4/5 sm:mb-2 -mx-2">
                {
                  contactInfo.map((ci, index) => (
                    <div className="p-2 sm:w-1/2 w-full" key={index}>
                      <div className="flex items-center">
                        <img alt="icons" src={ci.icon} />
                        <span className="title-font font-medium ml-3"><a href={ci.link}>{ci.text}</a> </span>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>
            <form className="w-full max-w-lg -mx-2" id='contactform' ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="username">
                    First Name
                  </label>
                  <input className="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500" id="username" type="text" placeholder="Jane" name="user_name" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="useremail">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500" id="useremail" type="email" placeholder="jane@gmail.com" name="user_email" required />
                </div>
                <div className="w-full md:w-1/1 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="userservice">
                    Required Service
                  </label>
                  <input className="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500" id="userservice" placeholder="Shopify Website Devlopment" name="user_service" required />
                </div>
                <div className="w-full md:w-1/1 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea className="appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500" rows={5} id="message" placeholder="Enter Details" name="message" required></textarea>
                </div>
                <div className="w-full md:w-1/1 px-3">
                  <div className="relative inline-block">
                    <input type="submit" value="Send" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pl-4 pr-10 rounded focus:outline-none focus:shadow-outline" />
                    <div className='loader absolute right-[10px] bottom-0 top-0 flex items-center hidden'>
                      <img alt="loader" src={loaderImage} width="20px" />
                    </div>
                  </div>
                </div>
                <div className='success-response'></div>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Contact