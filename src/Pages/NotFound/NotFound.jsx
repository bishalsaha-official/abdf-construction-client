import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaConstruction } from 'react-icons/fa';

const NotFound = () => {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center"
                >
                    {/* Construction Icon */}
                    <motion.div
                        variants={itemVariants}
                        className="mb-8"
                    >
                        <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-xl">
                            <FaConstruction className="text-6xl" />
                        </div>
                    </motion.div>

                    {/* 404 Number */}
                    <motion.div
                        variants={itemVariants}
                        className="relative mb-6"
                    >
                        <div className="text-9xl md:text-[12rem] font-bold text-gray-900 opacity-10">
                            404
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-8xl md:text-[10rem] font-bold bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                                404
                            </span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                    >
                        Page Not Found
                    </motion.h1>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"
                    />

                    {/* Message */}
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
                    >
                        The page you're looking for seems to have moved or doesn't exist.
                        It might be under construction or has been relocated.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                    >
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <FaHome className="text-xl" />
                            Return to Homepage
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-outline border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
                        >
                            <FaArrowLeft className="text-xl" />
                            Go Back
                        </button>
                    </motion.div>

                    {/* Help Section */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 max-w-2xl mx-auto"
                    >
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Looking for something specific?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <button
                                onClick={() => navigate('/services')}
                                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-gray-700"
                            >
                                <div className="font-semibold mb-1">Our Services</div>
                                <div className="text-sm text-gray-500">Explore construction services</div>
                            </button>
                            <button
                                onClick={() => navigate('/gallery')}
                                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-gray-700"
                            >
                                <div className="font-semibold mb-1">Project Gallery</div>
                                <div className="text-sm text-gray-500">View completed projects</div>
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-gray-700"
                            >
                                <div className="font-semibold mb-1">Contact Us</div>
                                <div className="text-sm text-gray-500">Get in touch with our team</div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Construction Theme Note */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-8 pt-6 border-t border-gray-200"
                    >
                        <p className="text-gray-500 text-sm">
                            If you believe this is an error, please contact our support team.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;