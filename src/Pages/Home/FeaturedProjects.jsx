import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaMapMarkerAlt, FaBuilding, FaCalendarAlt, FaExpandAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const FeaturedProjects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeProject, setActiveProject] = useState(0);

    const projects = [
        {
            id: 1,
            title: "Tech Innovation Center",
            location: "San Francisco, CA",
            type: "Commercial Office",
            year: "2023",
            image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "15-story LEED Platinum certified office building with smart technology integration"
        },
        {
            id: 2,
            title: "Regional Medical Complex",
            location: "Denver, CO",
            type: "Healthcare",
            year: "2022",
            image: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Full-service medical facility with specialized treatment centers"
        },
        {
            id: 3,
            title: "Luxury Residential Tower",
            location: "Miami, FL",
            type: "Residential",
            year: "2023",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "40-story luxury condominium with panoramic ocean views"
        },
        {
            id: 4,
            title: "Industrial Logistics Hub",
            location: "Chicago, IL",
            type: "Industrial",
            year: "2022",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "500,000 sq ft distribution center with advanced automation systems"
        },
        {
            id: 5,
            title: "University Science Building",
            location: "Boston, MA",
            type: "Educational",
            year: "2023",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "State-of-the-art research facility for STEM education"
        },
        {
            id: 6,
            title: "Mixed-Use Development",
            location: "Austin, TX",
            type: "Commercial/Residential",
            year: "2024",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Urban revitalization project combining retail, office, and residential spaces"
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

    const projectVariants = {
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
        <section ref={ref} className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our portfolio of successfully delivered construction projects across multiple sectors.
                    </p>
                </motion.div>

                {/* Desktop Grid */}
                <div className="hidden lg:block">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-3 gap-6"
                    >
                        {projects.slice(0, 3).map((project) => (
                            <motion.div
                                key={project.id}
                                variants={projectVariants}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-200 mb-3">
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt className="text-amber-400" />
                                            {project.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-amber-400" />
                                            {project.year}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <button className="text-amber-400 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        View Project Details
                                        <FaExpandAlt className="ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 grid grid-cols-3 gap-6"
                    >
                        {projects.slice(3, 6).map((project) => (
                            <motion.div
                                key={project.id}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {project.type}
                                        </span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-4 text-sm text-gray-200 mb-3">
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt className="text-amber-400" />
                                            {project.location}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt className="text-amber-400" />
                                            {project.year}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-300 mb-4">
                                        {project.description}
                                    </p>
                                    <button className="text-amber-400 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        View Project Details
                                        <FaExpandAlt className="ml-2" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Mobile/Tablet Swiper */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.project-swiper-next',
                            prevEl: '.project-swiper-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            }
                        }}
                        className="pb-12"
                        onSlideChange={(swiper) => setActiveProject(swiper.activeIndex)}
                    >
                        {projects.map((project) => (
                            <SwiperSlide key={project.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative overflow-hidden rounded-2xl shadow-lg"
                                >
                                    <div className="relative h-64">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {project.type}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-white">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                            <span className="flex items-center gap-1">
                                                <FaMapMarkerAlt className="text-amber-500" />
                                                {project.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FaCalendarAlt className="text-amber-500" />
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">
                                            {project.description}
                                        </p>
                                        <button className="text-amber-600 font-semibold text-sm flex items-center">
                                            View Project Details
                                            <FaExpandAlt className="ml-2" />
                                        </button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <button className="project-swiper-prev w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex gap-2">
                            {projects.slice(0, 4).map((_, index) => (
                                <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${index === activeProject % 4 ? 'bg-amber-600' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                        <button className="project-swiper-next w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12 pt-8 border-t border-gray-200"
                >
                    <Link to='/projects'>
                        <button className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            View Full Project Portfolio
                            <FaBuilding className="ml-2" />
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProjects;