import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhoneAlt, FaCalendarAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const CallToAction = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const contactOptions = [
        {
            id: 1,
            icon: <FaPhoneAlt className="text-3xl" />,
            title: "Call Us Today",
            description: "Speak directly with our project managers",
            action: "(555) 123-4567",
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            icon: <FaCalendarAlt className="text-3xl" />,
            title: "Schedule Consultation",
            description: "Free initial project assessment",
            action: "Book Appointment",
            color: "from-amber-500 to-orange-400"
        },
        {
            id: 3,
            icon: <FaEnvelope className="text-3xl" />,
            title: "Email Inquiry",
            description: "Get a detailed project quote",
            action: "hello@construction.com",
            color: "from-emerald-500 to-green-400"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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

    const backgroundVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <motion.div
                variants={backgroundVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '60px'
                    }}></div>
                </div>
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="max-w-5xl mx-auto"
                >
                    {/* Main CTA Card */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl shadow-2xl overflow-hidden mb-12 md:mb-16"
                    >
                        <div className="p-8 md:p-12 lg:p-16 text-white text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                            >
                                Ready to Build Your Vision?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl md:text-2xl text-amber-100 mb-8 max-w-3xl mx-auto"
                            >
                                Let's discuss your construction project and explore how we can bring it to life with precision and expertise.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                            >
                                <button className="btn btn-lg bg-white text-amber-700 hover:bg-gray-100 border-white hover:border-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Start Your Project
                                    <FaArrowRight className="ml-2" />
                                </button>
                                <button className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
                                    Download Brochure
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Options */}
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    >
                        {contactOptions.map((option) => (
                            <motion.div
                                key={option.id}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`p-4 rounded-xl bg-gradient-to-br ${option.color} text-white shadow-lg mb-6`}>
                                        {option.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {option.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {option.description}
                                    </p>
                                    <div className={`text-lg font-bold bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}>
                                        {option.action}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 pt-8 border-t border-gray-200"
                    >
                        <div className="text-center">
                            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                                <div className="text-sm text-gray-600">
                                    <div className="font-semibold">Free Initial Consultation</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-gray-400 hidden md:block"></div>
                                <div className="text-sm text-gray-600">
                                    <div className="font-semibold">No-Obligation Quote</div>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-gray-400 hidden md:block"></div>
                                <div className="text-sm text-gray-600">
                                    <div className="font-semibold">24-48 Hour Response Time</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;