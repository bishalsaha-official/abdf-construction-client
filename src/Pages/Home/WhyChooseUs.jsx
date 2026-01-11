import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaShieldAlt, FaAward, FaUsers, FaClock, FaCheckCircle, FaDollarSign } from 'react-icons/fa';

const WhyChooseUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const strengths = [
        {
            id: 1,
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Safety First",
            description: "OSHA-compliant safety programs with zero incident commitment and regular training.",
            stat: "0.15"
        },
        {
            id: 2,
            icon: <FaAward className="text-3xl" />,
            title: "Award-Winning Quality",
            description: "Multiple industry awards for construction excellence and innovative building techniques.",
            stat: "25+"
        },
        {
            id: 3,
            icon: <FaUsers className="text-3xl" />,
            title: "Experienced Team",
            description: "Seasoned professionals with decades of combined expertise in complex construction projects.",
            stat: "98%"
        },
        {
            id: 4,
            icon: <FaClock className="text-3xl" />,
            title: "On-Time Delivery",
            description: "Proven track record of completing projects within scheduled timelines without compromising quality.",
            stat: "95%"
        },
        {
            id: 5,
            icon: <FaCheckCircle className="text-3xl" />,
            title: "Client Satisfaction",
            description: "Committed to transparent communication and exceeding client expectations on every project.",
            stat: "4.9/5"
        },
        {
            id: 6,
            icon: <FaDollarSign className="text-3xl" />,
            title: "Cost Efficiency",
            description: "Value engineering and smart budgeting to deliver maximum value without hidden costs.",
            stat: "15-25%"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <section ref={ref} className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Why Industry Leaders <span className="text-amber-600">Choose Us</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            With over two decades of construction excellence, we've built our reputation on reliability, quality, and client satisfaction. Our commitment to these core values sets us apart in every project we undertake.
                        </p>
                        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                            <p className="text-gray-700 italic text-lg mb-4">
                                "Their attention to detail and commitment to safety transformed our vision into reality."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                    JD
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-semibold text-gray-900">John Davidson</h4>
                                    <p className="text-gray-600">CEO, Commercial Properties Inc.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="lg:w-1/2"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {strengths.map((strength) => (
                                <motion.div
                                    key={strength.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
                                            <div className="text-amber-600">
                                                {strength.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-baseline justify-between mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{strength.title}</h3>
                                                <span className="text-2xl font-bold text-amber-600">{strength.stat}</span>
                                            </div>
                                            <p className="text-gray-600">{strength.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;