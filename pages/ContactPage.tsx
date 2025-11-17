
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="pt-32 pb-16 min-h-screen bg-white">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-playfair font-bold text-brand-dark mb-4 text-center">Get In Touch</h1>
                <p className="text-center text-brand-secondary mb-10">Have a recommendation or a comment? I'd love to hear from you!</p>
                
                {submitted ? (
                    <div className="text-center p-8 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-green-600">Thank You!</h2>
                        <p className="text-gray-700 mt-2">Your message has been received.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-accent hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent transition-opacity">
                                Send Message
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactPage;