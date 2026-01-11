import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaBuilding,
    FaHome,
    FaIndustry,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaArrowRight,
    FaSearch
} from 'react-icons/fa';

const Projects = () => {
    const headerRef = useRef(null);
    const projectsRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const isHeaderInView = useInView(headerRef, { once: true });
    const isProjectsInView = useInView(projectsRef, { once: true, amount: 0.1 });

    const projectCategories = [
        { id: 'all', label: 'All Projects', icon: <FaBuilding />, count: 12 },
        { id: 'commercial', label: 'Commercial', icon: <FaBuilding />, count: 5 },
        { id: 'residential', label: 'Residential', icon: <FaHome />, count: 4 },
        { id: 'industrial', label: 'Industrial', icon: <FaIndustry />, count: 3 }
    ];

    const projects = [
        {
            id: 1,
            title: "Tech Innovation Center",
            slug: "tech-innovation-center",
            location: "San Francisco, CA",
            category: "commercial",
            type: "Office Building",
            year: "2023",
            size: "250,000 sq ft",
            brief: "15-story LEED Platinum certified smart office building",
            image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$85M"
        },
        {
            id: 2,
            title: "Regional Medical Complex",
            slug: "regional-medical-complex",
            location: "Denver, CO",
            category: "commercial",
            type: "Healthcare",
            year: "2022",
            size: "180,000 sq ft",
            brief: "Full-service medical facility with specialized treatment centers",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$120M"
        },
        {
            id: 3,
            title: "Luxury Waterfront Residences",
            slug: "luxury-waterfront-residences",
            location: "Miami, FL",
            category: "residential",
            type: "Condominiums",
            year: "2023",
            size: "300,000 sq ft",
            brief: "40-story luxury condominium with panoramic ocean views",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$95M"
        },
        {
            id: 4,
            title: "Industrial Logistics Hub",
            slug: "industrial-logistics-hub",
            location: "Chicago, IL",
            category: "industrial",
            type: "Warehouse",
            year: "2022",
            size: "500,000 sq ft",
            brief: "Automated distribution center with advanced logistics systems",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$65M"
        },
        {
            id: 5,
            title: "University Science Building",
            slug: "university-science-building",
            location: "Boston, MA",
            category: "commercial",
            type: "Educational",
            year: "2023",
            size: "150,000 sq ft",
            brief: "State-of-the-art research facility for STEM education",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$75M"
        },
        {
            id: 6,
            title: "Mixed-Use Downtown Development",
            slug: "mixed-use-downtown-development",
            location: "Austin, TX",
            category: "commercial",
            type: "Mixed-Use",
            year: "2024",
            size: "400,000 sq ft",
            brief: "Urban revitalization project combining retail, office, and residential",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "In Progress",
            budget: "$150M"
        },
        {
            id: 7,
            title: "High-Rise Luxury Apartments",
            slug: "high-rise-luxury-apartments",
            location: "New York, NY",
            category: "residential",
            type: "Apartment Building",
            year: "2023",
            size: "220,000 sq ft",
            brief: "35-story luxury apartment building with premium amenities",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$110M"
        },
        {
            id: 8,
            title: "Manufacturing Plant Expansion",
            slug: "manufacturing-plant-expansion",
            location: "Detroit, MI",
            category: "industrial",
            type: "Manufacturing",
            year: "2023",
            size: "320,000 sq ft",
            brief: "Automotive manufacturing facility expansion",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$90M"
        },
        {
            id: 9,
            title: "Shopping Center Redevelopment",
            slug: "shopping-center-redevelopment",
            location: "Los Angeles, CA",
            category: "commercial",
            type: "Retail",
            year: "2023",
            size: "280,000 sq ft",
            brief: "Modern shopping center with entertainment complex",
            image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$85M"
        },
        {
            id: 10,
            title: "Suburban Townhomes",
            slug: "suburban-townhomes",
            location: "Seattle, WA",
            category: "residential",
            type: "Townhomes",
            year: "2022",
            size: "180,000 sq ft",
            brief: "Modern townhome community with sustainable features",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$45M"
        },
        {
            id: 11,
            title: "Food Processing Facility",
            slug: "food-processing-facility",
            location: "Portland, OR",
            category: "industrial",
            type: "Food Processing",
            year: "2023",
            size: "210,000 sq ft",
            brief: "State-of-the-art food processing and packaging facility",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "Completed",
            budget: "$70M"
        },
        {
            id: 12,
            title: "Luxury Custom Estates",
            slug: "luxury-custom-estates",
            location: "Beverly Hills, CA",
            category: "residential",
            type: "Custom Homes",
            year: "2024",
            size: "15,000 sq ft",
            brief: "Bespoke luxury residential estates with premium finishes",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            status: "In Design",
            budget: "$25M"
        }
    ];

    // Filter projects based on category and search term
    const filteredProjects = projects.filter(project => {
        const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.type.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-emerald-100 text-emerald-800';
            case 'In Progress': return 'bg-amber-100 text-amber-800';
            case 'In Design': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'commercial': return 'bg-blue-100 text-blue-800';
            case 'residential': return 'bg-emerald-100 text-emerald-800';
            case 'industrial': return 'bg-amber-100 text-amber-800';
            default: return 'bg-gray-100 text-gray-800';
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
                            Our Projects
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
                            Delivering Excellence Across Every Build
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Explore our portfolio of successfully delivered construction projects across commercial,
                            residential, and industrial sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filter Section */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-6">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Project Portfolio</h2>
                            <p className="text-gray-600">Browse our completed and ongoing projects</p>
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-64">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                placeholder="Search projects..."
                            />
                        </div>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {projectCategories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeFilter === category.id
                                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.label}</span>
                                <span className={`text-sm px-2 py-1 rounded-full ${activeFilter === category.id
                                    ? 'bg-white/20'
                                    : 'bg-gray-200'
                                    }`}>
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section ref={projectsRef} className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {activeFilter === 'all' ? 'All Projects' : `${activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)} Projects`}
                                </h2>
                                <p className="text-gray-600">
                                    Showing {filteredProjects.length} of {projects.length} projects
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-4 md:mt-0">
                                <div className="flex gap-3">
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                        <span className="text-sm text-gray-600">Completed</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                        <span className="text-sm text-gray-600">In Progress</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                        <span className="text-sm text-gray-600">In Design</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {filteredProjects.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="text-gray-400 text-6xl mb-4">🏗️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                            <button
                                onClick={() => {
                                    setActiveFilter('all');
                                    setSearchTerm('');
                                }}
                                className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    ) : (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate={isProjectsInView ? "visible" : "hidden"}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -8 }}
                                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                                >
                                    <Link to={`/projects/${project.slug}`} className="block">
                                        <div className="relative h-64 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Status Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                                                    {project.status}
                                                </span>
                                            </div>

                                            {/* Category Badge */}
                                            <div className="absolute top-4 right-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                                                    {project.category}
                                                </span>
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg flex items-center gap-2">
                                                    View Details
                                                    <FaArrowRight />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                                {project.title}
                                            </h3>

                                            <div className="space-y-3 mb-4">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <FaMapMarkerAlt className="text-amber-500" />
                                                    <span className="text-sm">{project.location}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <FaCalendarAlt className="text-amber-500" />
                                                    <span className="text-sm">{project.year} • {project.type}</span>
                                                </div>
                                            </div>

                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {project.brief}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                <div className="text-gray-700 font-medium">
                                                    {project.size}
                                                </div>
                                                <div className="text-amber-600 font-semibold text-sm flex items-center gap-1 group-hover:text-amber-700 transition-colors">
                                                    View Project
                                                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {/* Portfolio Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isProjectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 pt-8 border-t border-gray-200"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                                <div className="text-3xl font-bold text-amber-600 mb-2">$1.2B+</div>
                                <div className="text-gray-600">Total Project Value</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                                <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                                <div className="text-gray-600">On-Time Completion</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                                <div className="text-3xl font-bold text-amber-600 mb-2">25+</div>
                                <div className="text-gray-600">States Served</div>
                            </div>
                            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;