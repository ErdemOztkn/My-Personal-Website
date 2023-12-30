import React, { useState } from 'react';
import { FiUser, FiMail } from 'react-icons/fi';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('email', formData.email);
            params.append('message', formData.message);

            const response = await fetch('contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString(),
            });

            if (response.ok) {
                console.log('Form gönderildi!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                alert('Your message has been delivered');
            }
        } catch (error) {
            console.error('Hata:', error);
            alert('An error occurred');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleClear = () => {
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section className="contact">
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit} id='form'>
                <div className="inputWrapper">
                    <i><FiUser /></i>
                    <input name='name' type="text" placeholder='First Name' required value={formData.name} onChange={handleChange} />
                </div>
                <div className="inputWrapper">
                    <i><FiMail /></i>
                    <input name='email' type="email" placeholder='E-mail' required value={formData.email} onChange={handleChange} />
                </div>
                <textarea name='message' cols="50" rows="5" placeholder='Message' required value={formData.message} onChange={handleChange}></textarea>
                <div className="buttonWrapper">
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" onClick={handleClear} />
                </div>
            </form>
        </section>
    );
}