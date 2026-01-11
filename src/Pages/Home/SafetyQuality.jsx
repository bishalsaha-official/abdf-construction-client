import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaShieldAlt, FaCertificate, FaClipboardCheck, FaUserShield, FaChartLine, FaMedal } from 'react-icons/fa';

const SafetyQuality = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const commitments = [
        {
            id: 1,
            icon: <FaShieldAlt className="text-4xl" />,
            title: "Safety First Culture",
            description: "Comprehensive safety programs with zero-tolerance policy for violations",
            metrics: "0.15 TRIR*",
            color: "from-red-500 to-orange-400"
        },
        {
            id: 2,
            icon: <FaCertificate className="text-4xl" />,
            title: "Quality Assurance",
            description: "Rigorous quality control at every construction phase and material inspection",
            metrics: "99.8% Compliance",
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 3,
            icon: <FaClipboardCheck className="text-4xl" />,
            title: "Documented Processes",
            description: "ISO-certified procedures for consistent project execution and accountability",
            metrics: "ISO 9001:2015",
            color: "from-green-500 to-emerald-400"
        },
        {
            id: 4,
            icon: <FaUserShield className="text-4xl" />,
            title: "Trained Professionals",
            description: "Ongoing training and certification for all team members and subcontractors",
            metrics: "100% Certified",
            color: "from-purple-500 to-pink-400"
        }
    ];

    const certifications = [
        { name: "OSHA", icon: <FaShieldAlt /> },
        { name: "LEED AP", icon: <FaMedal /> },
        { name: "ISO 9001", icon: <FaCertificate /> },
        { name: "AGC", icon: <FaChartLine /> },
        { name: "ABC", icon: <FaClipboardCheck /> },
        { name: "Safety+", icon: <FaUserShield /> }
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

    const certVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20
            }
        }
    };

    return (
        <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Safety & Quality Excellence
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Our uncompromising commitment to safety protocols and quality standards ensures successful project outcomes and client satisfaction.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-amber-400">Our Safety Promise</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Every project begins with comprehensive safety planning. We implement daily safety briefings, regular equipment inspections, and continuous training to maintain our industry-leading safety record.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-200">Daily safety meetings and site inspections</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-200">Personal protective equipment (PPE) enforcement</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-200">Emergency response plans and regular drills</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-gray-200">Subcontractor safety compliance verification</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-amber-400">Quality Assurance</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our quality management system includes material testing, third-party inspections, and digital documentation to ensure every project meets or exceeds industry standards.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">25+</div>
                                    <div className="text-gray-300 text-sm">Quality Inspections</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">100%</div>
                                    <div className="text-gray-300 text-sm">Material Testing</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">0</div>
                                    <div className="text-gray-300 text-sm">Major Defects</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {commitments.map((commitment) => (
                                <motion.div
                                    key={commitment.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl bg-gradient-to-br ${commitment.color} text-white shadow-lg`}>
                                            {commitment.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">
                                                {commitment.title}
                                            </h4>
                                            <p className="text-gray-300 text-sm mb-3">
                                                {commitment.description}
                                            </p>
                                            <div className="text-amber-400 font-bold">
                                                {commitment.metrics}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Affiliations</h3>
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-3 md:grid-cols-6 gap-4"
                            >
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        variants={certVariants}
                                        whileHover={{ scale: 1.1 }}
                                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300"
                                    >
                                        <div className="text-2xl text-amber-400 mb-2">
                                            {cert.icon}
                                        </div>
                                        <div className="text-sm font-medium text-gray-300">
                                            {cert.name}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-8 pt-8 border-t border-white/20"
                        >
                            <div className="flex items-center justify-between text-sm text-gray-400">
                                <div>TRIR: Total Recordable Incident Rate (Industry Average: 3.0)</div>
                                <div className="text-amber-400 font-semibold">83% Below Industry Average</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyQuality;