
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Using FormSubmit.co AJAX API to send email without backend server
            const response = await fetch("https://formsubmit.co/ajax/aidutoy@gmail.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Message from Alex's Food Guide: ${formData.name}`
                })
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                console.error("Form submission failed");
                alert("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Form submission error", error);
            alert("Something went wrong. Please check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
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
                        <div className="text-center py-12 animate-fade-in">
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>
                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`
                                        w-full py-4 px-6 rounded-xl
                                        font-bold text-lg
                                        transition-all duration-300 shadow-lg
                                        ${isSubmitting 
                                            ? 'bg-white/10 text-white/50 cursor-not-allowed' 
                                            : 'bg-white text-brand-dark hover:bg-brand-primary hover:text-white hover:shadow-brand-primary/25 transform hover:-translate-y-1'
                                        }
                                    `}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : 'Send Message'}
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
