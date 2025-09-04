import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
} from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <div className="font-serif py-20">
            {/* Hero Section */}
            <section className="relative pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#4B2E1E] mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-[#4B2E1E] max-w-3xl mx-auto">
                        Get in touch with our team to book your consultation or ask any questions
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-2 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="text-[var(--brown-red)]  rounded-lg shadow p-8">
                            <h2 className="text-3xl font-bold mb-6">
                                Book Your Consultation
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#E2B63B] focus:border-transparent"
                                        placeholder="Full Name*"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Telephone/ Mobile *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#E2B63B] focus:border-transparent"
                                        placeholder="Telephone/ Mobile*"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#E2B63B] focus:border-transparent"
                                        placeholder="Email Address*"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        How did you hear about us
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#E2B63B] focus:border-transparent">
                                        <option>Select</option>
                                        <option>Google Search</option>
                                        <option>Social Media</option>
                                        <option>Referral</option>
                                        <option>Advertisement</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Which Program Are You Interested In?
                                    </label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#E2B63B] focus:border-transparent">
                                        <option>Select</option>
                                        <option>Body Transformation Program</option>
                                        <option>Cancer Rehabilitation</option>
                                        <option>Pregnancy Care Program</option>
                                        <option>Menopause Wellness Program</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-2">
                                        Further details about what you are looking for
                                    </label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#E2B63B] focus:border-transparent"
                                        placeholder="Tell us more about your wellness goals..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[var(--brown-yellow-bg)] hover:bg-[var(--brown-red)] text-white font-semibold py-3 px-6 rounded-lg w-full transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <div className="bg-[var(--brown-red)] text-white rounded-lg p-8 mb-8">
                                <h3 className="text-2xl font-bold mb-6 text-[var(--brown-yellow-bg)]">
                                    Get In Touch
                                </h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <FaMapMarkerAlt className="w-6 h-6 text-[var(--brown-yellow-bg)] mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Address</h4>
                                            <p>123 Wellness Street<br />Mumbai, India</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <FaPhoneAlt className="w-6 h-6 text-[var(--brown-yellow-bg)] mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Phone</h4>
                                            <p>+91 9876543210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <FaEnvelope className="w-6 h-6 text-[var(--brown-yellow-bg)] mt-1" />
                                        <div>
                                            <h4 className="font-semibold mb-1">Email</h4>
                                            <p>embracefeelalive22@gmail.com</p>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-[var(--brown-yellow-bg)]">Follow Us</h3>
                                    <div className="flex justify-start space-x-4 mb-6 text-white">
                                        <a href="#" className="hover:text-[var(--brown-yellow-bg)] transition-colors">
                                            <FaFacebookF className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="hover:text-[var(--brown-yellow-bg)] transition-colors">
                                            <FaTwitter className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="hover:text-[var(--brown-yellow-bg)] transition-colors">
                                            <FaInstagram className="w-6 h-6" />
                                        </a>
                                        <a href="#" className="hover:text-[var(--brown-yellow-bg)] transition-colors">
                                            <FaYoutube className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="bg-[var(--brown-yellow-bg)] text-[var(--brown-red)] rounded-lg p-8 mb-8">
                                <h3 className="text-2xl font-bold mb-6">Opening Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span>Monday</span>
                                        <span>9:00 am to 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tuesday</span>
                                        <span>9:00 am to 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Wednesday</span>
                                        <span>9:00 am to 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Thursday</span>
                                        <span>9:00 am to 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Friday</span>
                                        <span>9:00 am to 6:00 pm</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday & Sunday</span>
                                        <span>Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
