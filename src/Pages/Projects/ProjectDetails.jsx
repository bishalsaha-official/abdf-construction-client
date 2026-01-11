import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaBuilding,
    FaRulerCombined,
    FaDollarSign,
    FaUsers,
    FaHardHat,
    FaClipboardCheck,
    FaShieldAlt,
    FaCheckCircle,
    FaImage,
    FaDownload,
    FaShare,
    FaIndustry,
    FaHome,
    FaPhone,
    FaEnvelope,
    FaArrowRight
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    // Mock project data - in production, you'd fetch this based on the slug
    const projectsData = [
        {
            id: 1,
            slug: "tech-innovation-center",
            title: "Tech Innovation Center",
            client: "TechCorp Inc.",
            location: "San Francisco, CA",
            category: "commercial",
            type: "Office Building",
            year: "2023",
            duration: "18 months",
            size: "250,000 sq ft",
            budget: "$85 Million",
            status: "Completed",
            description: "A 15-story LEED Platinum certified smart office building featuring cutting-edge technology and sustainable design principles.",
            longDescription: "The Tech Innovation Center represents a milestone in sustainable commercial construction. This state-of-the-art facility incorporates advanced building automation systems, energy-efficient HVAC, and smart glass technology that adapts to environmental conditions. The project achieved LEED Platinum certification through innovative water conservation systems, solar panel integration, and extensive use of recycled materials.",
            challenges: [
                "Complex urban site with limited access",
                "Strict seismic requirements for San Francisco",
                "Integration of multiple smart building systems",
                "Adherence to aggressive sustainability targets"
            ],
            solutions: [
                "Phased construction with optimized logistics planning",
                "Advanced seismic dampening system implementation",
                "Comprehensive BIM coordination across all trades",
                "Value engineering to achieve sustainability goals within budget"
            ],
            features: [
                "LEED Platinum Certification",
                "Smart Building Automation",
                "Solar Panel Array (150 kW)",
                "Rainwater Harvesting System",
                "Green Roof & Vertical Gardens",
                "EV Charging Stations (50+)",
                "Advanced Air Filtration",
                "Collaborative Workspace Design"
            ],
            team: [
                { role: "Project Director", name: "Robert Johnson", contact: "robert@construction.com" },
                { role: "Lead Architect", name: "Jennifer Lee", contact: "jennifer@construction.com" },
                { role: "Site Superintendent", name: "James Miller", contact: "james@construction.com" },
                { role: "Structural Engineer", name: "Thomas Baker", contact: "thomas@construction.com" }
            ],
            gallery: [
                "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1556817416-1a6c6d31e9c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            ],
            timeline: [
                { phase: "Design & Planning", duration: "4 months", status: "Completed" },
                { phase: "Foundation Work", duration: "3 months", status: "Completed" },
                { phase: "Structural Frame", duration: "5 months", status: "Completed" },
                { phase: "Enclosure & Systems", duration: "4 months", status: "Completed" },
                { phase: "Interior Finishes", duration: "2 months", status: "Completed" }
            ],
            sustainability: [
                { metric: "Energy Reduction", value: "45%", description: "Below baseline energy usage" },
                { metric: "Water Conservation", value: "40%", description: "Reduced potable water use" },
                { metric: "Recycled Materials", value: "30%", description: "Post-consumer recycled content" },
                { metric: "Daylight Optimization", value: "75%", description: "Regularly occupied spaces" }
            ]
        }
        // Add more project objects here...
    ];

    useEffect(() => {
        // Find project by slug
        const foundProject = projectsData.find(p => p.slug === slug);
        if (foundProject) {
            setProject(foundProject);
        } else {
            // Navigate to 404 or back to projects
            navigate('/projects');
        }
    }, [slug, navigate]);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading project details...</p>
                </div>
            </div>
        );
    }

    const getCategoryIcon = () => {
        switch (project.category) {
            case 'commercial': return <FaBuilding className="text-4xl" />;
            case 'residential': return <FaHome className="text-4xl" />;
            case 'industrial': return <FaIndustry className="text-4xl" />;
            default: return <FaBuilding className="text-4xl" />;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Back Navigation */}
            <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <button
                        onClick={() => navigate('/projects')}
                        className="flex items-center gap-2 text-gray-700 hover:text-amber-600 transition-colors"
                    >
                        <FaArrowLeft />
                        <span className="font-medium">Back to Projects</span>
                    </button>
                </div>
            </div>

            {/* Project Hero Section */}
            <section className="relative py-12 md:py-16">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-2/3">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                                        {getCategoryIcon()}
                                    </div>
                                    <div>
                                        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                            {project.category} • {project.status}
                                        </span>
                                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-1">
                                            {project.title}
                                        </h1>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <FaMapMarkerAlt className="text-amber-500" />
                                            <span className="font-medium text-gray-900">Location</span>
                                        </div>
                                        <p className="text-gray-600">{project.location}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <FaCalendarAlt className="text-amber-500" />
                                            <span className="font-medium text-gray-900">Year</span>
                                        </div>
                                        <p className="text-gray-600">{project.year}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <FaRulerCombined className="text-amber-500" />
                                            <span className="font-medium text-gray-900">Size</span>
                                        </div>
                                        <p className="text-gray-600">{project.size}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-xl">
                                        <div className="flex items-center gap-3 mb-2">
                                            <FaDollarSign className="text-amber-500" />
                                            <span className="font-medium text-gray-900">Budget</span>
                                        </div>
                                        <p className="text-gray-600">{project.budget}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/3">
                                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white">
                                    <h3 className="text-xl font-bold mb-4">Project Highlights</h3>
                                    <div className="space-y-3">
                                        {project.features.slice(0, 4).map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <FaCheckCircle className="text-xl" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-white/20">
                                        <div className="flex items-center justify-between">
                                            <span className="font-medium">Duration</span>
                                            <span className="font-bold">{project.duration}</span>
                                        </div>
                                        <div className="flex items-center justify-between mt-2">
                                            <span className="font-medium">Client</span>
                                            <span className="font-bold">{project.client}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, Thumbs]}
                            spaceBetween={10}
                            navigation={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="rounded-2xl overflow-hidden shadow-xl mb-4"
                        >
                            {project.gallery.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative h-96">
                                        <img
                                            src={image}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 text-white">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <FaImage className="inline mr-2" />
                                                    <span>Image {index + 1} of {project.gallery.length}</span>
                                                </div>
                                                <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
                                                    <FaShare className="inline mr-2" />
                                                    Share
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Thumbnail Gallery */}
                        <Swiper
                            modules={[Thumbs]}
                            spaceBetween={10}
                            slidesPerView={4}
                            watchSlidesProgress
                            onSwiper={setThumbsSwiper}
                            className="thumbnail-swiper"
                        >
                            {project.gallery.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="cursor-pointer rounded-lg overflow-hidden">
                                        <img
                                            src={image}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-20 object-cover"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </section>

            {/* Tabs Navigation */}
            <section className="border-b border-gray-200">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex overflow-x-auto">
                        {['overview', 'challenges', 'team', 'timeline', 'sustainability'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 font-medium whitespace-nowrap border-b-2 transition-colors ${activeTab === tab
                                        ? 'border-amber-500 text-amber-600'
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tab Content */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {activeTab === 'overview' && (
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-2">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h3>
                                    <div className="prose max-w-none">
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {project.longDescription}
                                        </p>
                                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">Key Features</h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {project.features.map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-3">
                                                        <FaCheckCircle className="text-emerald-500" />
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4">Project Documents</h4>
                                        <div className="space-y-3">
                                            <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                                <span className="font-medium text-gray-700">Project Brochure</span>
                                                <FaDownload className="text-gray-500" />
                                            </button>
                                            <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                                <span className="font-medium text-gray-700">Case Study PDF</span>
                                                <FaDownload className="text-gray-500" />
                                            </button>
                                            <button className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                                                <span className="font-medium text-gray-700">Technical Specifications</span>
                                                <FaDownload className="text-gray-500" />
                                            </button>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-200">
                                            <h4 className="text-lg font-bold text-gray-900 mb-4">Interested in Similar Projects?</h4>
                                            <Link
                                                to="/contact"
                                                className="w-full btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                                            >
                                                <FaPhone />
                                                Contact Our Team
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'challenges' && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Solutions</h3>
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                <FaHardHat className="text-amber-500" />
                                                Key Challenges
                                            </h4>
                                            <ul className="space-y-3">
                                                {project.challenges.map((challenge, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                                                        <span className="text-gray-600">{challenge}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                <FaClipboardCheck className="text-emerald-500" />
                                                Our Solutions
                                            </h4>
                                            <ul className="space-y-3">
                                                {project.solutions.map((solution, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                                                        <span className="text-gray-600">{solution}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                                        <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                                            <FaShieldAlt className="text-amber-400" />
                                            Safety & Quality Achievements
                                        </h4>
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                                <span>Safety Record</span>
                                                <span className="font-bold text-amber-400">0 Incidents</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                                <span>Quality Inspections</span>
                                                <span className="font-bold text-amber-400">100% Passed</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                                <span>Schedule Adherence</span>
                                                <span className="font-bold text-amber-400">98% On-Time</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl">
                                                <span>Budget Control</span>
                                                <span className="font-bold text-amber-400">Under Budget</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'team' && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Team</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {project.team.map((member, index) => (
                                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                                                    {member.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-gray-900">{member.name}</h5>
                                                    <p className="text-amber-600 text-sm font-medium">{member.role}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <FaEnvelope />
                                                    <span>{member.contact}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'timeline' && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Timeline</h3>
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 to-orange-500 hidden lg:block"></div>
                                    {project.timeline.map((phase, index) => (
                                        <div key={index} className={`flex flex-col lg:flex-row items-center mb-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                                            <div className="lg:w-1/2 lg:px-8 mb-4 lg:mb-0">
                                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                                    <div className="flex items-center justify-between mb-3">
                                                        <h4 className="text-lg font-bold text-gray-900">{phase.phase}</h4>
                                                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                                                            {phase.duration}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-3 h-3 rounded-full ${phase.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                                                        <span className="text-gray-600">{phase.status}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-8 h-8 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                                            <div className="lg:w-1/2 lg:px-8"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'sustainability' && (
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sustainability & Environmental Impact</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                                    {project.sustainability.map((item, index) => (
                                        <div key={index} className="bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl p-6 text-white">
                                            <div className="text-3xl font-bold mb-2">{item.value}</div>
                                            <div className="font-medium mb-1">{item.metric}</div>
                                            <div className="text-emerald-100 text-sm">{item.description}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                                    <h4 className="text-lg font-bold text-gray-900 mb-4">Environmental Certifications</h4>
                                    <div className="flex flex-wrap gap-4">
                                        <div className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-lg font-medium">LEED Platinum</div>
                                        <div className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium">ENERGY STAR</div>
                                        <div className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">WELL Certified</div>
                                        <div className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg font-medium">Living Building Challenge</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Related Projects */}
            <section className="py-12 md:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Similar Projects</h3>
                            <p className="text-gray-600">Explore other projects in this category</p>
                        </div>
                        <Link
                            to="/projects"
                            className="text-amber-600 font-semibold flex items-center gap-2 hover:text-amber-700 transition-colors"
                        >
                            View All Projects
                            <FaArrowRight />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Placeholder for related projects */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-gray-100 rounded-xl p-8 text-center">
                                <FaBuilding className="text-4xl text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600">Related project would appear here</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 md:py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let us help you bring your construction vision to life with the same excellence and attention to detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="btn btn-lg bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <FaPhone />
                            Schedule a Consultation
                        </Link>
                        <button className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3">
                            <FaDownload />
                            Download Portfolio
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetails;