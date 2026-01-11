import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaBars,
    FaTimes,
    FaPhoneAlt,
    FaHardHat,
    FaArrowRight,
    FaChevronDown
} from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        {path: '/services', label: 'Services',},
        { path: '/projects', label: 'Projects' },
        { path: '/team', label: 'Team' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setServicesOpen(false);
    }, [location]);

    const handleServicesHover = (open) => {
        if (window.innerWidth > 1024) {
            setServicesOpen(open);
        }
    };

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const mobileItemVariants = {
        closed: { x: -20, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    const servicesMenuVariants = {
        closed: {
            opacity: 0,
            y: -10,
            pointerEvents: 'none',
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        },
        open: {
            opacity: 1,
            y: 0,
            pointerEvents: 'auto',
            transition: {
                duration: 0.3,
                ease: "easeOut",
                staggerChildren: 0.05
            }
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
                        : 'bg-white py-4'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <NavLink
                            to="/"
                            className="flex items-center gap-3 group"
                        >
                            <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg">
                                <FaHardHat className="text-white text-xl md:text-2xl" />
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">
                                    ABDF <span className="text-amber-600">CONSTRUCTION</span>
                                </h1>
                                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                                    Building Excellence Since 1998
                                </p>
                            </div>
                        </NavLink>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div
                                    key={item.path}
                                    className="relative"
                                    onMouseEnter={() => item.submenu && handleServicesHover(true)}
                                    onMouseLeave={() => item.submenu && handleServicesHover(false)}
                                >
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `relative font-semibold text-gray-700 hover:text-amber-600 transition-colors duration-200 px-1 py-2 ${isActive ? 'text-amber-600' : ''
                                            }`
                                        }
                                    >
                                        <span className="flex items-center gap-1">
                                            {item.label}
                                            {item.submenu && <FaChevronDown className="text-xs" />}
                                        </span>

                                        {/* Active indicator */}
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"
                                            initial={false}
                                            animate={{
                                                scaleX: location.pathname === item.path ? 1 : 0
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                        />
                                    </NavLink>

                                    {/* Services Dropdown */}
                                    <AnimatePresence>
                                        {item.submenu && servicesOpen && (
                                            <motion.div
                                                variants={servicesMenuVariants}
                                                initial="closed"
                                                animate="open"
                                                exit="closed"
                                                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-40"
                                            >
                                                {item.submenu.map((subItem) => (
                                                    <NavLink
                                                        key={subItem.path}
                                                        to={subItem.path}
                                                        className="block px-6 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors font-medium"
                                                    >
                                                        {subItem.label}
                                                    </NavLink>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <FaPhoneAlt className="text-amber-500" />
                                <span className="font-semibold">(555) 123-4567</span>
                            </div>
                            <NavLink
                                to="/contact"
                                className="btn btn-primary bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-none text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Get a Quote
                                <FaArrowRight />
                            </NavLink>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-amber-600 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FaTimes className="text-2xl" />
                            ) : (
                                <FaBars className="text-2xl" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMobileMenu}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden lg:hidden"
                        >
                            <div className="p-6">
                                {/* Contact Info */}
                                <div className="mb-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-amber-500 rounded-lg">
                                            <FaPhoneAlt className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">24/7 Emergency</p>
                                            <p className="text-lg font-bold text-gray-900">(555) 123-4567</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        Monday - Friday: 8:00 AM - 6:00 PM
                                    </p>
                                </div>

                                {/* Navigation Links */}
                                <div className="space-y-1">
                                    {navItems.map((item) => (
                                        <motion.div
                                            key={item.path}
                                            variants={mobileItemVariants}
                                        >
                                            <div className="mb-1">
                                                <NavLink
                                                    to={item.path}
                                                    className={({ isActive }) =>
                                                        `block py-4 px-4 rounded-lg font-semibold transition-colors ${isActive
                                                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                                                            : 'text-gray-700 hover:bg-gray-100'
                                                        }`
                                                    }
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span>{item.label}</span>
                                                        {item.submenu && (
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    setServicesOpen(!servicesOpen);
                                                                }}
                                                                className="p-1"
                                                            >
                                                                <FaChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </NavLink>

                                                {/* Mobile Submenu */}
                                                <AnimatePresence>
                                                    {item.submenu && servicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="ml-6 pl-4 border-l-2 border-amber-200 space-y-2 py-2">
                                                                {item.submenu.map((subItem) => (
                                                                    <NavLink
                                                                        key={subItem.path}
                                                                        to={subItem.path}
                                                                        className="block py-2 px-4 text-gray-600 hover:text-amber-600 transition-colors"
                                                                        onClick={toggleMobileMenu}
                                                                    >
                                                                        {subItem.label}
                                                                    </NavLink>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mobile CTA */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <NavLink
                                        to="/contact"
                                        onClick={toggleMobileMenu}
                                        className="btn btn-primary bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 border-none text-white w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        <FaPhoneAlt />
                                        Request Free Quote
                                    </NavLink>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Spacer for fixed navbar */}
            <div className="h-20 lg:h-24" />
        </>
    );
};

export default Navbar;