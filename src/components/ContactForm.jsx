import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        service: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage('Message Sent Successfully!');
                setFormData({ user_name: '', user_email: '', service: '', message: '' });
            } else {
                setResponseMessage('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className='appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500'
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className='appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500'
                />
            </div>
            <div>
                <label>Required Service</label>
                <input
                    type="text"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className='appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500'
                />
            </div>
            <div>
                <label>Message</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='appearance-none block w-full bg-transparent text-white border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-dark focus:border-gray-500'
                ></textarea>
            </div>
            <button type="submit">Send</button>
            <div>{responseMessage}</div>
        </form>
    );
};

export default ContactForm;
