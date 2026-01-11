import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    FaBuilding,
    FaIndustry,
    FaHome,
    FaTools,
    FaPaintRoller,
    FaHardHat,
    FaTruck,
    FaClipboardCheck,
    FaShieldAlt,
    FaAward,
    FaUsers,
    FaCalendarAlt,
    FaCheckCircle,
    FaArrowRight
} from 'react-icons/fa';

const Services = () => {
    const headerRef = useRef(null);
    const servicesRef = useRef(null);
    const detailsRef = useRef(null);
    const whyRef = useRef(null);

    const isHeaderInView = useInView(headerRef, { once: true });
    const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
    const isDetailsInView = useInView(detailsRef, { once: true, amount: 0.1 });
    const isWhyInView = useInView(whyRef, { once: true, amount: 0.2 });

    const services = [
        {
            id: 1,
            icon: <FaBuilding className="text-4xl" />,
            title: "Commercial Construction",
            shortDesc: "Complete commercial building solutions from ground-up to tenant improvements.",
            fullDesc: "We specialize in commercial construction projects including office buildings, retail centers, and mixed-use developments. Our team manages everything from site selection and permitting to final occupancy.",
            features: ["Office Buildings", "Retail Centers", "Hotels", "Restaurants"],
            image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-blue-600 to-cyan-500"
        },
        {
            id: 2,
            icon: <FaIndustry className="text-4xl" />,
            title: "Industrial Facilities",
            shortDesc: "Specialized construction for manufacturing, warehousing, and distribution.",
            fullDesc: "Our industrial construction expertise includes manufacturing plants, warehouses, distribution centers, and specialized industrial facilities with complex mechanical and electrical systems.",
            features: ["Manufacturing Plants", "Warehouses", "Distribution Centers", "Industrial Parks"],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-amber-600 to-orange-500"
        },
        {
            id: 3,
            icon: <FaHome className="text-4xl" />,
            title: "Residential Projects",
            shortDesc: "Custom homes and multi-family residential developments with premium finishes.",
            fullDesc: "From luxury custom homes to multi-family apartment complexes, we deliver residential projects that combine quality craftsmanship with innovative design and sustainable practices.",
            features: ["Custom Homes", "Multi-Family", "Townhomes", "Condominiums"],
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-emerald-600 to-green-500"
        },
        {
            id: 4,
            icon: <FaTools className="text-4xl" />,
            title: "Renovation & Remodeling",
            shortDesc: "Expert renovation services preserving structural integrity while modernizing spaces.",
            fullDesc: "Transform existing spaces with our renovation services. We specialize in commercial renovations, historic restorations, and residential remodels while maintaining structural integrity.",
            features: ["Commercial Renovations", "Historic Restoration", "Interior Remodels", "Facade Updates"],
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-purple-600 to-indigo-500"
        },
        {
            id: 5,
            icon: <FaHardHat className="text-4xl" />,
            title: "Construction Management",
            shortDesc: "Full project lifecycle management ensuring on-time, on-budget delivery.",
            fullDesc: "Our construction management services provide comprehensive oversight from preconstruction to project closeout, ensuring quality control, budget adherence, and schedule management.",
            features: ["Project Planning", "Budget Control", "Schedule Management", "Quality Assurance"],
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-red-600 to-pink-500"
        },
        {
            id: 6,
            icon: <FaPaintRoller className="text-4xl" />,
            title: "Design-Build Services",
            shortDesc: "Integrated design and construction process for seamless project execution.",
            fullDesc: "Our design-build approach integrates architectural design and construction expertise, streamlining project delivery and enhancing collaboration between all stakeholders.",
            features: ["Integrated Design", "Single Responsibility", "Cost Efficiency", "Faster Delivery"],
            image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-teal-600 to-cyan-500"
        },
        {
            id: 7,
            icon: <FaClipboardCheck className="text-4xl" />,
            title: "Preconstruction Services",
            shortDesc: "Comprehensive planning, budgeting, and scheduling before construction begins.",
            fullDesc: "Our preconstruction services include feasibility studies, value engineering, detailed cost estimating, and constructability reviews to ensure project success from the start.",
            features: ["Feasibility Studies", "Cost Estimating", "Value Engineering", "Scheduling"],
            image: "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-yellow-600 to-amber-500"
        },
        {
            id: 8,
            icon: <FaTruck className="text-4xl" />,
            title: "Site Development",
            shortDesc: "Complete site preparation and infrastructure development services.",
            fullDesc: "From site clearing and grading to utility installation and landscaping, we provide comprehensive site development services for projects of all scales.",
            features: ["Site Preparation", "Grading & Excavation", "Utility Installation", "Landscaping"],
            image: "https://images.unsplash.com/photo-1576671414121-aa0b80a5f2f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            color: "from-gray-600 to-gray-500"
        }
    ];

    const strengths = [
        {
            id: 1,
            icon: <FaAward className="text-3xl" />,
            title: "Award-Winning Quality",
            description: "Multiple industry awards for construction excellence and innovative building techniques",
            stat: "25+ Awards"
        },
        {
            id: 2,
            icon: <FaShieldAlt className="text-3xl" />,
            title: "Safety Excellence",
            description: "OSHA-compliant safety programs with zero incident commitment and regular training",
            stat: "0.15 TRIR"
        },
        {
            id: 3,
            icon: <FaUsers className="text-3xl" />,
            title: "Expert Team",
            description: "Seasoned professionals with decades of combined expertise in complex construction",
            stat: "85+ Experts"
        },
        {
            id: 4,
            icon: <FaCalendarAlt className="text-3xl" />,
            title: "Timely Delivery",
            description: "Proven track record of completing projects within scheduled timelines",
            stat: "98% On-Time"
        },
        {
            id: 5,
            icon: <FaCheckCircle className="text-3xl" />,
            title: "Client Satisfaction",
            description: "Committed to transparent communication and exceeding client expectations",
            stat: "4.9/5 Rating"
        },
        {
            id: 6,
            icon: <FaClipboardCheck className="text-3xl" />,
            title: "Quality Assurance",
            description: "Rigorous quality control processes at every stage of construction",
            stat: "100% Inspected"
        }
    ];

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

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        }
    };

    return (
        <div className="min-h-screen bg-white">
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
                            Our Services
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
                            Comprehensive Construction Solutions
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            From concept to completion, we provide expert construction services across commercial,
                            industrial, and residential sectors with uncompromising quality and safety standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section ref={servicesRef} className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Specialized Construction Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Tailored solutions for every stage of your construction project
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isServicesInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {services.map((service) => (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-6`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.shortDesc}
                                </p>
                                <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                                    Learn More
                                    <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Service Details - Expanded */}
            <section ref={detailsRef} className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isDetailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Detailed Service Overview
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            In-depth look at our comprehensive construction capabilities
                        </p>
                    </motion.div>

                    <div className="space-y-20">
                        {services.slice(0, 4).map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center`}
                            >
                                <div className="lg:w-1/2">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-64 md:h-80 lg:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white rounded-full text-sm font-semibold`}>
                                                {service.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                                            {service.icon}
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                                    </div>

                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {service.fullDesc}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Service Features:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                        Request Service Details
                                        <FaArrowRight className="ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Our Services Stand Out */}
            <section ref={whyRef} className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose Our Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The competitive advantages that set our construction services apart
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isWhyInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {strengths.map((strength) => (
                            <motion.div
                                key={strength.id}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl border border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg">
                                        <div className="text-amber-600">
                                            {strength.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-xl font-bold text-gray-900">{strength.title}</h3>
                                            <span className="text-2xl font-bold text-amber-600">{strength.stat}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {strength.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Process Steps */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isWhyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-gray-200"
                    >
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Service Process</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                A systematic approach that ensures quality, transparency, and client satisfaction
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "Consultation", desc: "Initial needs assessment and planning" },
                                { step: "Design", desc: "Detailed planning and specification development" },
                                { step: "Execution", desc: "Construction with quality control at every stage" },
                                { step: "Delivery", desc: "Final inspection and client handover" }
                            ].map((process, index) => (
                                <div key={index} className="text-center p-4">
                                    <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                                        {index + 1}
                                    </div>
                                    <h4 className="font-bold text-gray-900 mb-2">{process.step}</h4>
                                    <p className="text-gray-600 text-sm">{process.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Contact us today for a detailed consultation and discover how our comprehensive
                            construction services can bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn btn-lg bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Get a Free Consultation
                                <FaArrowRight className="ml-2" />
                            </button>
                            <button className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                                Download Service Catalog
                            </button>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/20">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                                <div>
                                    <div className="font-semibold">Free Initial Consultation</div>
                                    <div className="text-gray-400">No obligation assessment</div>
                                </div>
                                <div>
                                    <div className="font-semibold">Detailed Proposal</div>
                                    <div className="text-gray-400">Comprehensive project scope and pricing</div>
                                </div>
                                <div>
                                    <div className="font-semibold">24-Hour Response</div>
                                    <div className="text-gray-400">Quick turnaround on inquiries</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;