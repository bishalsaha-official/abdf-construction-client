import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHardHat, FaBuilding, FaHome, FaIndustry, FaTools, FaPaintRoller } from 'react-icons/fa';

const ServicesOverview = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const services = [
        {
            id: 1,
            icon: <FaBuilding className="text-4xl" />,
            title: "Commercial Construction",
            description: "Complete commercial building solutions from ground-up construction to tenant improvements and renovations.",
            color: "from-blue-600 to-cyan-500"
        },
        {
            id: 2,
            icon: <FaIndustry className="text-4xl" />,
            title: "Industrial Facilities",
            description: "Specialized industrial construction including warehouses, manufacturing plants, and distribution centers.",
            color: "from-amber-600 to-orange-500"
        },
        {
            id: 3,
            icon: <FaHome className="text-4xl" />,
            title: "Residential Projects",
            description: "Custom home construction and multi-family residential developments with premium finishing.",
            color: "from-emerald-600 to-green-500"
        },
        {
            id: 4,
            icon: <FaHardHat className="text-4xl" />,
            title: "Construction Management",
            description: "Full project lifecycle management ensuring on-time, on-budget delivery with quality assurance.",
            color: "from-purple-600 to-indigo-500"
        },
        {
            id: 5,
            icon: <FaTools className="text-4xl" />,
            title: "Renovation & Remodeling",
            description: "Expert renovation services for commercial and residential properties, preserving structural integrity.",
            color: "from-red-600 to-pink-500"
        },
        {
            id: 6,
            icon: <FaPaintRoller className="text-4xl" />,
            title: "Design-Build Services",
            description: "Integrated design and construction process for seamless project execution from concept to completion.",
            color: "from-teal-600 to-cyan-500"
        }
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

    const cardVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        }
    };

    return (
        <section ref={ref} className="py-10 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Comprehensive Construction Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Delivering expert construction solutions across commercial, industrial, and residential sectors with uncompromising quality.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                            <div className="p-6 md:p-8">
                                <div className="mb-6">
                                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <button className="text-amber-600 font-semibold flex items-center group-hover:text-amber-700 transition-colors">
                                    Learn More
                                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;