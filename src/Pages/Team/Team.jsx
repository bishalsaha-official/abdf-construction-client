import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    FaHardHat,
    FaUserTie,
    FaToolbox,
    FaShieldAlt,
    FaClipboardCheck,
    FaBuilding,
    FaPhone,
    FaEnvelope,
    FaLinkedin,
    FaTimes
} from 'react-icons/fa';

const Team = () => {
    const headerRef = useRef(null);
    const teamRef = useRef(null);
    const [selectedMember, setSelectedMember] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const isHeaderInView = useInView(headerRef, { once: true });
    const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });

    const teamMembers = [
        {
            id: 1,
            name: "Michael Rodriguez",
            position: "CEO & Founder",
            department: "Leadership",
            expertise: ["Commercial Construction", "Strategic Planning", "Business Development"],
            experience: "30+ years",
            bio: "With over three decades in the construction industry, Michael founded the company with a vision for excellence. He oversees strategic direction and major project initiatives.",
            email: "michael@construction.com",
            phone: "(555) 123-4567",
            linkedin: "linkedin.com/in/michaelrodriguez",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: true
        },
        {
            id: 2,
            name: "Sarah Chen",
            position: "Chief Operations Officer",
            department: "Operations",
            expertise: ["Project Management", "Safety Compliance", "Process Optimization"],
            experience: "25+ years",
            bio: "Sarah brings extensive experience in managing large-scale construction operations. She ensures all projects meet quality standards and are delivered on schedule.",
            email: "sarah@construction.com",
            phone: "(555) 123-4568",
            linkedin: "linkedin.com/in/sarahchen",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: true
        },
        {
            id: 3,
            name: "Robert Johnson",
            position: "Senior Project Director",
            department: "Project Management",
            expertise: ["Healthcare Facilities", "Educational Buildings", "Budget Control"],
            experience: "20+ years",
            bio: "Robert specializes in complex institutional projects. His meticulous approach to project planning has resulted in numerous successful on-time, on-budget deliveries.",
            email: "robert@construction.com",
            phone: "(555) 123-4569",
            linkedin: "linkedin.com/in/robertjohnson",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: true
        },
        {
            id: 4,
            name: "Jennifer Lee",
            position: "Director of Design",
            department: "Design",
            expertise: ["Architectural Design", "Sustainable Building", "LEED Certification"],
            experience: "18+ years",
            bio: "Jennifer leads our design team with a focus on innovative and sustainable building solutions. She ensures every project meets both aesthetic and functional requirements.",
            email: "jennifer@construction.com",
            phone: "(555) 123-4570",
            linkedin: "linkedin.com/in/jenniferlee",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: true
        },
        {
            id: 5,
            name: "David Wilson",
            position: "Safety Director",
            department: "Safety",
            expertise: ["OSHA Compliance", "Risk Assessment", "Safety Training"],
            experience: "15+ years",
            bio: "David is responsible for maintaining our industry-leading safety standards. He implements comprehensive safety programs and conducts regular site inspections.",
            email: "david@construction.com",
            phone: "(555) 123-4571",
            linkedin: "linkedin.com/in/davidwilson",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 6,
            name: "Amanda Garcia",
            position: "Senior Estimator",
            department: "Preconstruction",
            expertise: ["Cost Estimation", "Value Engineering", "Bid Management"],
            experience: "12+ years",
            bio: "Amanda provides accurate project estimates and value engineering solutions. Her expertise ensures competitive pricing while maintaining quality standards.",
            email: "amanda@construction.com",
            phone: "(555) 123-4572",
            linkedin: "linkedin.com/in/amandagarcia",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 7,
            name: "James Miller",
            position: "Construction Superintendent",
            department: "Field Operations",
            expertise: ["Site Management", "Quality Control", "Subcontractor Coordination"],
            experience: "22+ years",
            bio: "James oversees on-site construction activities, ensuring work is performed according to plans and specifications while maintaining strict safety protocols.",
            email: "james@construction.com",
            phone: "(555) 123-4573",
            linkedin: "linkedin.com/in/jamesmiller",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 8,
            name: "Lisa Thompson",
            position: "Project Manager",
            department: "Project Management",
            expertise: ["Commercial Buildings", "Client Relations", "Schedule Management"],
            experience: "14+ years",
            bio: "Lisa manages multiple commercial construction projects, ensuring smooth communication between clients, architects, and construction teams.",
            email: "lisa@construction.com",
            phone: "(555) 123-4574",
            linkedin: "linkedin.com/in/lisathompson",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 9,
            name: "Thomas Baker",
            position: "Field Engineer",
            department: "Engineering",
            expertise: ["Structural Engineering", "Building Codes", "Technical Solutions"],
            experience: "8+ years",
            bio: "Thomas provides technical support on construction sites, solving complex engineering challenges and ensuring compliance with all building codes.",
            email: "thomas@construction.com",
            phone: "(555) 123-4575",
            linkedin: "linkedin.com/in/thomasbaker",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 10,
            name: "Maria Rodriguez",
            position: "Quality Control Manager",
            department: "Quality Assurance",
            expertise: ["Quality Inspections", "Material Testing", "Defect Prevention"],
            experience: "10+ years",
            bio: "Maria implements rigorous quality control procedures to ensure every aspect of construction meets our high standards and client expectations.",
            email: "maria@construction.com",
            phone: "(555) 123-4576",
            linkedin: "linkedin.com/in/mariarodriguez",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 11,
            name: "Christopher Lee",
            position: "Procurement Manager",
            department: "Supply Chain",
            expertise: ["Material Sourcing", "Vendor Management", "Logistics"],
            experience: "16+ years",
            bio: "Christopher manages our supply chain operations, ensuring timely delivery of quality materials while optimizing costs and maintaining vendor relationships.",
            email: "christopher@construction.com",
            phone: "(555) 123-4577",
            linkedin: "linkedin.com/in/christopherlee",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        },
        {
            id: 12,
            name: "Jessica Wang",
            position: "Sustainability Coordinator",
            department: "Environmental",
            expertise: ["LEED Projects", "Green Building", "Environmental Compliance"],
            experience: "7+ years",
            bio: "Jessica specializes in sustainable construction practices, helping clients achieve LEED certification and implement environmentally friendly building solutions.",
            email: "jessica@construction.com",
            phone: "(555) 123-4578",
            linkedin: "linkedin.com/in/jessicawang",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isLeadership: false
        }
    ];

    const leadershipTeam = teamMembers.filter(member => member.isLeadership);
    const operationsTeam = teamMembers.filter(member => !member.isLeadership);

    const getDepartmentIcon = (department) => {
        switch (department) {
            case 'Leadership': return <FaUserTie className="text-xl" />;
            case 'Operations': return <FaHardHat className="text-xl" />;
            case 'Project Management': return <FaClipboardCheck className="text-xl" />;
            case 'Safety': return <FaShieldAlt className="text-xl" />;
            case 'Design': return <FaBuilding className="text-xl" />;
            default: return <FaToolbox className="text-xl" />;
        }
    };

    const handleMemberClick = (member) => {
        setSelectedMember(member);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedMember(null);
            document.body.style.overflow = 'auto';
        }, 300);
    };

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

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
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
                            Our Team
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
                            Experienced Professionals Behind Our Success
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Meet the dedicated experts who bring precision, innovation, and commitment to every project we undertake.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Leadership Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Strategic visionaries guiding our company's growth and excellence
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    >
                        {leadershipTeam.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                onClick={() => handleMemberClick(member)}
                                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            Leadership
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        {member.name}
                                    </h3>
                                    <div className="text-amber-600 font-semibold mb-3">{member.position}</div>
                                    <div className="flex items-center text-gray-600 text-sm mb-4">
                                        <FaHardHat className="mr-2 text-gray-400" />
                                        {member.experience} experience
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {member.expertise.slice(0, 2).map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Operations Team */}
            <section ref={teamRef} className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Operations Team
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Expert professionals dedicated to project execution and quality delivery
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isTeamInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        {operationsTeam.map((member) => (
                            <motion.div
                                key={member.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                onClick={() => handleMemberClick(member)}
                                className="group bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                                                {member.name}
                                            </h3>
                                            <div className="text-amber-600 text-sm font-medium">{member.position}</div>
                                        </div>
                                        <div className="text-gray-400">
                                            {getDepartmentIcon(member.department)}
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-600 mb-3">
                                        <span className="font-medium">{member.department}</span>
                                        <span className="mx-2">•</span>
                                        <span>{member.experience}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {member.expertise.slice(0, 1).map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Team Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-gray-200"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">85+</div>
                                <div className="text-gray-600">Team Members</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">650+</div>
                                <div className="text-gray-600">Combined Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                                <div className="text-gray-600">Certified Professionals</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                                <div className="text-gray-600">Specialized Departments</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DaisyUI Modal for Member Details */}
            <AnimatePresence>
                {isModalOpen && selectedMember && (
                    <div className="modal modal-open">
                        <div className="modal-box max-w-4xl p-0 overflow-hidden relative">
                            <motion.div
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-white"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                                >
                                    <FaTimes className="text-gray-700" />
                                </button>

                                <div className="flex flex-col lg:flex-row">
                                    {/* Left Side - Image & Quick Info */}
                                    <div className="lg:w-2/5 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
                                        <div className="mb-8">
                                            <img
                                                src={selectedMember.image}
                                                alt={selectedMember.name}
                                                className="w-full h-64 object-cover rounded-lg shadow-xl"
                                            />
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">{selectedMember.name}</h2>
                                        <div className="text-amber-300 font-semibold text-lg mb-6">{selectedMember.position}</div>

                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                                                    <FaHardHat className="text-amber-400" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-300">Department</div>
                                                    <div className="font-semibold">{selectedMember.department}</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                                                    <FaClipboardCheck className="text-amber-400" />
                                                </div>
                                                <div>
                                                    <div className="text-sm text-gray-300">Experience</div>
                                                    <div className="font-semibold">{selectedMember.experience}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="mt-8 pt-6 border-t border-white/20">
                                            <div className="flex items-center gap-3 mb-3">
                                                <FaPhone className="text-amber-400" />
                                                <span className="text-sm">{selectedMember.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <FaEnvelope className="text-amber-400" />
                                                <span className="text-sm">{selectedMember.email}</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaLinkedin className="text-amber-400" />
                                                <span className="text-sm">{selectedMember.linkedin}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side - Detailed Info */}
                                    <div className="lg:w-3/5 p-8">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Profile</h3>

                                        <div className="mb-8">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Bio</h4>
                                            <p className="text-gray-600 leading-relaxed">
                                                {selectedMember.bio}
                                            </p>
                                        </div>

                                        <div className="mb-8">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedMember.expertise.map((skill, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 bg-amber-50 text-amber-700 font-medium rounded-full"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                                            <ul className="space-y-2">
                                                <li className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                                    <span className="text-gray-600">Overseeing project planning and execution</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                                    <span className="text-gray-600">Ensuring compliance with safety regulations</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                                    <span className="text-gray-600">Managing client relationships and communication</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                                                    <span className="text-gray-600">Implementing quality control measures</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Team;