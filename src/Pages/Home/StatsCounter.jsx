import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { FaCalendarAlt, FaBuilding, FaUserFriends, FaHardHat } from 'react-icons/fa';

const StatsCounter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated]);

    const stats = [
        {
            id: 1,
            icon: <FaCalendarAlt className="text-4xl" />,
            value: 25,
            suffix: '+',
            label: 'Years of Excellence',
            duration: 3,
            color: 'from-blue-500 to-cyan-400'
        },
        {
            id: 2,
            icon: <FaBuilding className="text-4xl" />,
            value: 420,
            suffix: '+',
            label: 'Projects Completed',
            duration: 4,
            color: 'from-amber-500 to-orange-400'
        },
        {
            id: 3,
            icon: <FaUserFriends className="text-4xl" />,
            value: 150,
            suffix: '+',
            label: 'Happy Clients',
            duration: 3.5,
            color: 'from-emerald-500 to-green-400'
        },
        {
            id: 4,
            icon: <FaHardHat className="text-4xl" />,
            value: 85,
            suffix: '+',
            label: 'Expert Team Members',
            duration: 3,
            color: 'from-purple-500 to-indigo-400'
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

    const statVariants = {
        hidden: { scale: 0.8, opacity: 0 },
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
        <section ref={ref} className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '30px'
                }}></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Building Excellence Since 1998
                    </h2>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                        Our numbers speak to our commitment, quality, and the trust our clients place in us.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={statVariants}
                            whileHover={{ y: -5 }}
                            className="text-center p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${stat.color} text-white shadow-lg mb-6`}>
                                {stat.icon}
                            </div>
                            <div className="mb-3">
                                <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
                                    {hasAnimated ? (
                                        <CountUp
                                            start={0}
                                            end={stat.value}
                                            duration={stat.duration}
                                            separator=","
                                            suffix={stat.suffix}
                                        />
                                    ) : (
                                        `0${stat.suffix}`
                                    )}
                                </div>
                            </div>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-200">
                                {stat.label}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 pt-8 border-t border-white/20 text-center"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4">
                            <div className="text-2xl font-bold text-amber-400 mb-2">$250M+</div>
                            <p className="text-gray-300">Total Project Value</p>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold text-amber-400 mb-2">99.2%</div>
                            <p className="text-gray-300">On-Time Completion Rate</p>
                        </div>
                        <div className="p-4">
                            <div className="text-2xl font-bold text-amber-400 mb-2">0.12</div>
                            <p className="text-gray-300">Industry-Low TRIR*</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsCounter;