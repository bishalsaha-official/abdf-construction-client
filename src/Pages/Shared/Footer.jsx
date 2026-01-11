import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaHardHat,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaArrowRight,
    FaShieldAlt,
    FaAward,
    FaUsers
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About Us' },
        { path: '/services', label: 'Our Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/team', label: 'Our Team' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact Us' },
    ];

    const services = [
        'Commercial Construction',
        'Residential Building',
        'Industrial Facilities',
        'Renovation & Remodeling',
        'Construction Management',
        'Design-Build Services'
    ];

    const certifications = [
        'Licensed & Bonded',
        'OSHA Certified',
        'LEED Accredited',
        'Safety First Award'
    ];

    const socialLinks = [
        { icon: <FaLinkedin />, label: 'LinkedIn', url: 'https://linkedin.com/company' },
        { icon: <FaFacebook />, label: 'Facebook', url: 'https://facebook.com/company' },
        { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com/company' },
        { icon: <FaYoutube />, label: 'YouTube', url: 'https://youtube.com/company' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="bg-gradient-to-b from-gray-900 to-gray-800 text-white"
        >
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Company Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                                <FaHardHat className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold tracking-tight">
                                    ABDF <span className="text-amber-400">CONSTRUCTION</span>
                                </h3>
                                <p className="text-sm text-gray-300 uppercase tracking-wider font-medium">
                                    Building Excellence Since 1998
                                </p>
                            </div>
                        </Link>

                        <p className="text-gray-300 leading-relaxed">
                            A premier construction company specializing in commercial, residential, and
                            industrial projects with uncompromising quality and safety standards.
                        </p>

                        <div className="space-y-3 pt-4 border-t border-gray-700">
                            {certifications.map((cert, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <FaShieldAlt className="text-amber-400" />
                                    <span className="text-sm font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <FaArrowRight className="text-amber-400" />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center gap-2 text-gray-300 hover:text-amber-300 transition-colors duration-200"
                                    >
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-gray-700">
                            <div className="flex items-center gap-3">
                                <FaAward className="text-2xl text-amber-400" />
                                <div>
                                    <p className="font-bold">25+ Years</p>
                                    <p className="text-sm text-gray-300">Industry Experience</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <FaHardHat className="text-amber-400" />
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <div className="flex items-center gap-2 text-gray-300 group cursor-default">
                                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-amber-500 transition-colors"></div>
                                        <span>{service}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 border-t border-gray-700">
                            <div className="flex items-center gap-3">
                                <FaUsers className="text-2xl text-amber-400" />
                                <div>
                                    <p className="font-bold">85+ Experts</p>
                                    <p className="text-sm text-gray-300">Professional Team</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h4 className="text-xl font-bold flex items-center gap-2">
                            <FaMapMarkerAlt className="text-amber-400" />
                            Contact Info
                        </h4>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-amber-400 mt-1" />
                                <div>
                                    <p className="font-medium">Main Office</p>
                                    <p className="text-gray-300 text-sm">123 Construction Avenue</p>
                                    <p className="text-gray-300 text-sm">San Francisco, CA 94107</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-amber-400" />
                                <div>
                                    <p className="font-medium">(555) 123-4567</p>
                                    <p className="text-gray-300 text-sm">24/7 Emergency Available</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-amber-400" />
                                <div>
                                    <p className="font-medium">info@abdfconstruction.com</p>
                                    <p className="text-gray-300 text-sm">General Inquiries</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <FaClock className="text-amber-400 mt-1" />
                                <div>
                                    <p className="font-medium">Business Hours</p>
                                    <p className="text-gray-300 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
                                    <p className="text-gray-300 text-sm">Sat: 9:00 AM - 2:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Social Media & Newsletter */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 pt-8 border-t border-gray-700"
                >
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        {/* Social Media */}
                        <div className="space-y-3">
                            <p className="text-lg font-bold">Connect With Us</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center text-xl transition-all duration-300"
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="lg:w-1/2">
                            <p className="text-lg font-bold mb-3">Stay Updated</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email for updates"
                                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                                />
                                <button className="btn btn-primary bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-none text-white px-6 rounded-lg font-bold transition-all duration-300">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                variants={itemVariants}
                className="bg-gray-900 py-6"
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-center md:text-left">
                            <p className="text-gray-400">
                                &copy; {currentYear} ABDF Construction. All Rights Reserved.
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                Building the Future with Integrity and Excellence
                            </p>
                        </div>

                        {/* Additional Links */}
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link to="/privacy" className="text-gray-400 hover:text-amber-300 text-sm transition-colors">
                                Privacy Policy
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link to="/terms" className="text-gray-400 hover:text-amber-300 text-sm transition-colors">
                                Terms of Service
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link to="/sitemap" className="text-gray-400 hover:text-amber-300 text-sm transition-colors">
                                Sitemap
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-gray-800 to-gray-900 py-4 border-t border-gray-700"
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-400 text-sm">
                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-emerald-500" />
                            <span>Fully Licensed & Insured</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <FaAward className="text-amber-500" />
                            <span>Award-Winning Quality</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <FaUsers className="text-blue-500" />
                            <span>Expert Professional Team</span>
                        </div>
                        <div className="hidden md:block w-px h-4 bg-gray-600"></div>
                        <div className="flex items-center gap-2">
                            <FaHardHat className="text-orange-500" />
                            <span>Safety First Commitment</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
};

export default Footer;