
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
        <div className="min-h-screen bg-brand-dark relative flex items-center justify-center py-32 px-4 overflow-hidden">
             {/* Ambient Background Elements */}
             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>

            <div className="max-w-xl w-full relative z-10">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-playfair font-bold text-white mb-4 drop-shadow-lg">Get In Touch</h1>
                    <p className="text-white/70 text-lg font-light">
                        Have a recommendation or a comment? I'd love to hear from you!
                    </p>
                </div>
                
                {/* Glassmorphism Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl">
                    {submitted ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Message Sent!</h2>
                            <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="mt-8 text-brand-primary hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2 ml-1">Your Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    required 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    className="
                                        block w-full px-4 py-3 rounded-xl
                                        bg-white/5 border border-white/10 text-white placeholder-white/30
                                        focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent
                                        transition-all duration-200
                                    "
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2 ml-1">Your Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    required 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                    className="
                                        block w-full px-4 py-3 rounded-xl
                                        bg-white/5 border border-white/10 text-white placeholder-white/30
                                        focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent
                                        transition-all duration-200
                                    "
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2 ml-1">Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    rows={4} 
                                    required 
                                    value={formData.message} 
                                    onChange={handleChange} 
                                    className="
                                        block w-full px-4 py-3 rounded-xl
                                        bg-white/5 border border-white/10 text-white placeholder-white/30
                                        focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-transparent
                                        transition-all duration-200 resize-none
                                    "
                                    placeholder="Tell me about a great restaurant..."
                                ></textarea>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    className="
                                        w-full py-4 px-6 rounded-xl
                                        bg-white text-brand-dark font-bold text-lg
                                        hover:bg-brand-primary hover:text-white
                                        transform hover:-translate-y-1
                                        transition-all duration-300 shadow-lg hover:shadow-brand-primary/25
                                    "
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
