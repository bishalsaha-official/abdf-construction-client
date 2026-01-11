import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaBuilding,
    FaUser,
    FaPaperPlane,
    FaCheckCircle
} from 'react-icons/fa';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const headerRef = useRef(null);
    const formRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        projectType: 'General Inquiry'
    });

    const isHeaderInView = useInView(headerRef, { once: true });
    const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

    const contactInfo = [
        {
            id: 1,
            icon: <FaMapMarkerAlt className="text-3xl" />,
            title: "Main Office",
            details: ["123 Construction Avenue", "San Francisco, CA 94107", "United States"],
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            icon: <FaPhoneAlt className="text-3xl" />,
            title: "Phone",
            details: ["(555) 123-4567", "Emergency: (555) 987-6543"],
            color: "from-emerald-500 to-green-400"
        },
        {
            id: 3,
            icon: <FaEnvelope className="text-3xl" />,
            title: "Email",
            details: ["info@construction.com", "support@construction.com"],
            color: "from-amber-500 to-orange-400"
        },
        {
            id: 4,
            icon: <FaClock className="text-3xl" />,
            title: "Business Hours",
            details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
            color: "from-purple-500 to-pink-400"
        }
    ];

    const projectTypes = [
        "General Inquiry",
        "Commercial Construction",
        "Industrial Projects",
        "Residential Building",
        "Renovation & Remodeling",
        "Construction Management",
        "Design-Build",
        "Site Development"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // Show SweetAlert confirmation
            const result = await Swal.fire({
                title: 'Confirm Submission',
                text: 'Are you ready to send your inquiry?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#f59e0b',
                cancelButtonColor: '#6b7280',
                confirmButtonText: 'Yes, send it!',
                cancelButtonText: 'Cancel',
                backdrop: true,
                allowOutsideClick: false
            });

            if (result.isConfirmed) {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Show success toast
                toast.success('Your message has been sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });

                // Show SweetAlert success message
                await Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you for contacting us. We will respond within 24 hours.',
                    icon: 'success',
                    confirmButtonColor: '#f59e0b',
                    confirmButtonText: 'Great!',
                    timer: 3000,
                    timerProgressBar: true
                });

                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                    projectType: 'General Inquiry'
                });
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <ToastContainer />

            {/* Page Header */}
            <section ref={headerRef} className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Contact Us
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
                            Let's Build Something Great Together
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Reach out to discuss your construction project or get more information about our services.
                            Our team is ready to help bring your vision to life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information & Form */}
            <section ref={formRef} className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Information */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isFormInView ? "visible" : "hidden"}
                            className="lg:w-2/5"
                        >
                            <motion.div variants={itemVariants} className="mb-10">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Have questions about our construction services? We're here to help.
                                    Contact us through any of the channels below or fill out the form.
                                </p>
                            </motion.div>

                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <motion.div
                                        key={info.id}
                                        variants={itemVariants}
                                        whileHover={{ x: 5 }}
                                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-200"
                                    >
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white`}>
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                                            {info.details.map((detail, index) => (
                                                <p key={index} className="text-gray-600 mb-1 last:mb-0">
                                                    {detail}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Contact Stats */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-10 p-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl text-white"
                            >
                                <h3 className="text-xl font-bold mb-4">Quick Response Guarantee</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-xl" />
                                        <span>24-hour initial response time</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-xl" />
                                        <span>Free initial consultation</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-xl" />
                                        <span>Detailed project assessment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaCheckCircle className="text-xl" />
                                        <span>No-obligation quote</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-3/5"
                        >
                            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                                        <FaPaperPlane className="text-2xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                                            Send Us a Message
                                        </h2>
                                        <p className="text-gray-600">Fill out the form below and we'll get back to you promptly</p>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaUser className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                                    placeholder="John Smith"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaEnvelope className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FaPhoneAlt className="text-gray-400" />
                                                </div>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                                    placeholder="(555) 123-4567"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Project Type
                                            </label>
                                            <select
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-white"
                                            >
                                                {projectTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                                            placeholder="Project Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="6"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                                            placeholder="Tell us about your project, timeline, and any specific requirements..."
                                            required
                                        />
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded"
                                            required
                                        />
                                        <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                                            I agree to receive communications about my inquiry. Your information is secure and will not be shared.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${isSubmitting
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending Message...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center">
                                                Send Message
                                                <FaPaperPlane className="ml-2" />
                                            </span>
                                        )}
                                    </button>
                                </form>

                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <p className="text-sm text-gray-500 text-center">
                                        We respect your privacy. All information submitted is confidential and protected.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map & Location Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Visit Our Headquarters
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Located in the heart of the city, our main office is ready to welcome you
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            {/* Map Placeholder */}
                            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
                                    <div className="text-center text-white p-8">
                                        <FaBuilding className="text-6xl mb-4 mx-auto text-amber-400" />
                                        <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                                        <p className="text-gray-300">
                                            Location map would be embedded here in production
                                        </p>
                                        <div className="mt-4 inline-block bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold">
                                            123 Construction Avenue, San Francisco
                                        </div>
                                    </div>
                                </div>
                                {/* Grid Overlay */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute inset-0" style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                        backgroundSize: '30px'
                                    }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Parking Information</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <span>Visitor parking available in front of building</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <span>Underground parking garage (Levels B1-B3)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <span>Accessible parking spaces available</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Public Transportation</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <span>Bus stop: Construction Ave & 2nd Street (100m)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <span>Subway station: Downtown Station (400m)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                        <span>Train station: Central Station (800m)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-4">Schedule a Visit</h3>
                                <p className="mb-4">
                                    Planning to visit our office? Let us know in advance so we can prepare for your arrival.
                                </p>
                                <button className="w-full bg-white text-amber-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                    Schedule Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Footer */}
            <section className="py-12 bg-gray-900 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-400 mb-2">24/7 Emergency</div>
                            <div className="text-lg">(555) 987-6543</div>
                            <div className="text-gray-400 text-sm">For urgent construction matters</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-400 mb-2">Quick Response</div>
                            <div className="text-lg">Within 24 Hours</div>
                            <div className="text-gray-400 text-sm">For all non-emergency inquiries</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-amber-400 mb-2">Follow Up</div>
                            <div className="text-lg">Guaranteed Follow-up</div>
                            <div className="text-gray-400 text-sm">We'll contact you within 24 hours</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;