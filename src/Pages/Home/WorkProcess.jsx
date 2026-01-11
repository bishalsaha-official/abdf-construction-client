import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaClipboardCheck, FaDrawPolygon, FaHardHat, FaTruckLoading, FaCheckCircle } from 'react-icons/fa';

const WorkProcess = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const processSteps = [
        {
            id: 1,
            icon: <FaClipboardCheck className="text-4xl" />,
            title: "Initial Consultation",
            description: "We meet to understand your vision, requirements, budget, and timeline.",
            duration: "1-2 Weeks",
            color: "from-blue-500 to-cyan-400"
        },
        {
            id: 2,
            icon: <FaDrawPolygon className="text-4xl" />,
            title: "Design & Planning",
            description: "Our architects and engineers create detailed plans and obtain necessary permits.",
            duration: "2-4 Weeks",
            color: "from-purple-500 to-pink-400"
        },
        {
            id: 3,
            icon: <FaHardHat className="text-4xl" />,
            title: "Construction Phase",
            description: "Expert teams execute the plan with quality control at every stage.",
            duration: "Project Specific",
            color: "from-amber-500 to-orange-400"
        },
        {
            id: 4,
            icon: <FaTruckLoading className="text-4xl" />,
            title: "Project Delivery",
            description: "Final inspection, walkthrough, and handover of the completed project.",
            duration: "1 Week",
            color: "from-emerald-500 to-green-400"
        },
        {
            id: 5,
            icon: <FaCheckCircle className="text-4xl" />,
            title: "Post-Construction Support",
            description: "Warranty service and ongoing support for your complete satisfaction.",
            duration: "1 Year+",
            color: "from-teal-500 to-cyan-400"
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

    const stepVariants = {
        hidden: { y: 40, opacity: 0 },
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Our Proven Process
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A systematic approach that ensures quality, transparency, and timely delivery on every project.
                    </p>
                </motion.div>

                {/* Desktop Process Timeline */}
                <div className="hidden lg:block">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="relative"
                    >

                        {/* Process Steps */}
                        <div className="flex justify-between relative z-10">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    variants={stepVariants}
                                    whileHover={{ y: -10 }}
                                    className="flex flex-col items-center w-56"
                                >
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-xl mb-6 relative`}>
                                        {step.icon}
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-gradient-to-br from-gray-50 to-gray-100"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="flex items-center justify-center mb-3">
                                            <div className="w-8 h-8 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center text-amber-600 font-bold shadow-lg">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                        <div className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {step.duration}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mobile/Tablet Stacked Layout */}
                <div className="lg:hidden">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-8"
                    >
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                variants={stepVariants}
                                whileHover={{ x: 5 }}
                                className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200"
                            >
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <div className={`p-4 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-white border-4 border-amber-500 flex items-center justify-center text-amber-600 font-bold shadow-lg">
                                            {index + 1}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">
                                            {step.title}
                                        </h3>
                                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 pt-8 border-t border-gray-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">Weekly Updates</div>
                            <p className="text-gray-600">Regular progress reports with photos and budget tracking</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">Digital Dashboard</div>
                            <p className="text-gray-600">Real-time project monitoring through our client portal</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-amber-600 mb-2">Quality Audits</div>
                            <p className="text-gray-600">Independent inspections at critical project milestones</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkProcess;