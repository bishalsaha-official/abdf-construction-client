import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaHardHat, FaBuilding, FaUserCheck, FaAward } from 'react-icons/fa';

// Import local images - these should be placed in src/assets/images/
// const teamImage = '../../assets/company-team.jpg';
// const projectImage = '../../assets/company-project.jpg';
// const siteImage = '../../assets/company-site.jpg';

const CompanySnapshot = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [counted, setCounted] = useState(false);

    const stats = [
        {
            id: 1,
            value: 25,
            suffix: '+',
            label: 'Years Experience',
            icon: <FaHardHat className="text-amber-500" />,
            duration: 2
        },
        {
            id: 2,
            value: 350,
            suffix: '+',
            label: 'Projects Completed',
            icon: <FaBuilding className="text-amber-500" />,
            duration: 2.5
        },
        {
            id: 3,
            value: 98,
            suffix: '%',
            label: 'Client Satisfaction',
            icon: <FaUserCheck className="text-amber-500" />,
            duration: 3
        },
        {
            id: 4,
            value: 50,
            suffix: '+',
            label: 'Expert Team Members',
            icon: <FaAward className="text-amber-500" />,
            duration: 2.2
        }
    ];

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

    const statItemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Use placeholder images for development
    const placeholderImages = [
        'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w-800&q=80',
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    useEffect(() => {
        if (isInView && !counted) {
            setCounted(true);
        }
    }, [isInView, counted]);

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    {/* Left Column - Images */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="lg:w-1/2"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={placeholderImages[0]}
                                        alt="Professional construction team working together"
                                        className="w-full h-64 md:h-72 object-cover transform hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                                </div>
                                <div className="relative rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={placeholderImages[1]}
                                        alt="Completed commercial building project"
                                        className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                                </div>
                            </div>
                            <div className="mt-12">
                                <div className="relative rounded-xl overflow-hidden shadow-xl">
                                    <img
                                        src={placeholderImages[2]}
                                        alt="Construction site with heavy machinery"
                                        className="w-full h-72 md:h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="lg:w-1/2"
                    >
                        <div className="space-y-8">
                            {/* Headline */}
                            <motion.div variants={itemVariants}>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Building Excellence for{' '}
                                    <span className="text-amber-600">25 Years</span>
                                </h2>
                            </motion.div>

                            {/* Description */}
                            <motion.div variants={itemVariants}>
                                <div className="space-y-4">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        As a premier construction firm with over two decades of industry leadership, we specialize in delivering commercial, industrial, and institutional projects of exceptional quality and precision.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Our commitment to innovative building techniques, strict safety protocols, and transparent client relationships has established us as trusted partners for businesses and communities across the region.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Stats Grid */}
                            <motion.div variants={itemVariants}>
                                <div className="grid grid-cols-2 gap-6 mt-8">
                                    {stats.map((stat) => (
                                        <motion.div
                                            key={stat.id}
                                            variants={statItemVariants}
                                            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="text-2xl">
                                                    {stat.icon}
                                                </div>
                                                <div className="flex items-baseline">
                                                    {counted ? (
                                                        <motion.span
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            className="text-3xl font-bold text-gray-900"
                                                        >
                                                            {stat.value}
                                                            {stat.suffix}
                                                        </motion.span>
                                                    ) : (
                                                        <span className="text-3xl font-bold text-gray-900">
                                                            0{stat.suffix}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-gray-600 font-medium">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div variants={itemVariants}>
                                <div className="pt-4">
                                    <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                        Learn More About Our Company
                                        <FaAward className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Border */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-16 pt-8 border-t border-gray-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed & Insured</h4>
                            <p className="text-gray-600">Full contractor licensing and comprehensive insurance coverage</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h4>
                            <p className="text-gray-600">OSHA-compliant safety programs with zero incident commitment</p>
                        </div>
                        <div className="text-center">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Building</h4>
                            <p className="text-gray-600">LEED-certified projects and eco-friendly construction practices</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanySnapshot;