import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight, FaExpandAlt } from 'react-icons/fa';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filter, setFilter] = useState('all');

    // Gallery images with categories
    const galleryImages = [
        {
            id: 1,
            title: "Commercial Office Building",
            category: "commercial",
            description: "15-story LEED Platinum certified office building in downtown",
            year: "2023",
            url: "https://images.unsplash.com/photo-1487956382158-bb926046304a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 2,
            title: "Hospital Expansion Project",
            category: "healthcare",
            description: "State-of-the-art medical facility expansion",
            year: "2022",
            url: "https://images.unsplash.com/photo-1516549655669-dfbf10d0c9b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 3,
            title: "Luxury Residential Tower",
            category: "residential",
            description: "40-story luxury condominium with panoramic views",
            year: "2023",
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 4,
            title: "Industrial Warehouse",
            category: "industrial",
            description: "500,000 sq ft automated distribution center",
            year: "2022",
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 5,
            title: "University Research Center",
            category: "educational",
            description: "Modern STEM research facility with advanced laboratories",
            year: "2023",
            url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 6,
            title: "Mixed-Use Development",
            category: "commercial",
            description: "Urban revitalization project combining retail and residential",
            year: "2024",
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 7,
            title: "Construction Site Progress",
            category: "progress",
            description: "Early stage construction with foundation work",
            year: "2023",
            url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 8,
            title: "Interior Finishing Work",
            category: "interior",
            description: "High-end commercial interior finishing",
            year: "2023",
            url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 9,
            title: "Construction Team Planning",
            category: "team",
            description: "Project team reviewing blueprints on site",
            year: "2023",
            url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 10,
            title: "Structural Steel Erection",
            category: "structural",
            description: "Steel framework installation for commercial building",
            year: "2023",
            url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 11,
            title: "Modern Apartment Complex",
            category: "residential",
            description: "Multi-family residential development",
            year: "2023",
            url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 12,
            title: "Hotel Construction",
            category: "commercial",
            description: "Luxury hotel with conference facilities",
            year: "2022",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 13,
            title: "Site Excavation",
            category: "progress",
            description: "Early earthwork and foundation preparation",
            year: "2023",
            url: "https://images.unsplash.com/photo-1576671414121-aa0b80a5f2f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 14,
            title: "Concrete Pouring",
            category: "structural",
            description: "Large-scale concrete placement operation",
            year: "2023",
            url: "https://images.unsplash.com/photo-1556817416-1a6c6d31e9c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 15,
            title: "Roof Installation",
            category: "progress",
            description: "Commercial roofing installation",
            year: "2023",
            url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 16,
            title: "Facade Completion",
            category: "exterior",
            description: "Building exterior finishing work",
            year: "2023",
            url: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 17,
            title: "Landscaping & Exterior",
            category: "exterior",
            description: "Final landscaping and exterior work",
            year: "2023",
            url: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        },
        {
            id: 18,
            title: "Quality Inspection",
            category: "team",
            description: "Final quality control inspection",
            year: "2023",
            url: "https://images.unsplash.com/photo-1503387769-00a112127ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: galleryImages.length },
        { id: 'commercial', label: 'Commercial', count: galleryImages.filter(img => img.category === 'commercial').length },
        { id: 'residential', label: 'Residential', count: galleryImages.filter(img => img.category === 'residential').length },
        { id: 'industrial', label: 'Industrial', count: galleryImages.filter(img => img.category === 'industrial').length },
        { id: 'progress', label: 'Construction Progress', count: galleryImages.filter(img => img.category === 'progress').length },
        { id: 'structural', label: 'Structural', count: galleryImages.filter(img => img.category === 'structural').length }
    ];

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    const openImage = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeImage = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        const newIndex = direction === 'next'
            ? (currentIndex + 1) % filteredImages.length
            : (currentIndex - 1 + filteredImages.length) % filteredImages.length;

        setSelectedImage(filteredImages[newIndex]);
        setCurrentIndex(newIndex);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
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
                damping: 25,
                duration: 0.3
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
            {/* Page Header */}
            <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Project Gallery
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
                            A Visual Showcase of Our Work
                        </p>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Explore our portfolio of completed projects and construction milestones
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Controls */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setFilter(category.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category.id
                                        ? 'bg-amber-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.label} ({category.count})
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
                    >
                        {filteredImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative group break-inside-avoid cursor-pointer"
                                onClick={() => openImage(image, index)}
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={image.url}
                                        alt={image.title}
                                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                                        <p className="text-sm text-gray-200 mb-1">{image.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs bg-amber-500 px-2 py-1 rounded">{image.year}</span>
                                            <FaExpandAlt className="text-white" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium rounded">
                                            {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Empty State */}
                    {filteredImages.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-16"
                        >
                            <div className="text-gray-400 text-6xl mb-4">🏗️</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
                            <p className="text-gray-600">Try selecting a different category</p>
                        </motion.div>
                    )}

                    {/* Gallery Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-12 pt-8 border-t border-gray-200"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">{galleryImages.length}</div>
                                <div className="text-gray-600">Total Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">5</div>
                                <div className="text-gray-600">Project Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">2020-2024</div>
                                <div className="text-gray-600">Project Timeline</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                                <div className="text-gray-600">Client Satisfaction</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DaisyUI Modal for Full View */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="modal modal-open">
                        <div className="modal-box max-w-6xl p-0 overflow-hidden relative">
                            <motion.div
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="bg-white"
                            >
                                {/* Navigation Buttons */}
                                <button
                                    onClick={() => navigateImage('prev')}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                                >
                                    <FaArrowLeft className="text-gray-800" />
                                </button>
                                <button
                                    onClick={() => navigateImage('next')}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                                >
                                    <FaArrowRight className="text-gray-800" />
                                </button>

                                {/* Close Button */}
                                <button
                                    onClick={closeImage}
                                    className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                                >
                                    <FaTimes className="text-gray-800" />
                                </button>

                                {/* Image Display */}
                                <div className="relative h-96 md:h-[500px] lg:h-[600px]">
                                    <img
                                        src={selectedImage.url}
                                        alt={selectedImage.title}
                                        className="w-full h-full object-contain"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent p-6 text-white">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                                            <div>
                                                <h2 className="text-2xl md:text-3xl font-bold mb-2">{selectedImage.title}</h2>
                                                <p className="text-gray-200">{selectedImage.description}</p>
                                            </div>
                                            <div className="mt-4 md:mt-0 flex items-center gap-4">
                                                <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-sm font-medium">
                                                    {selectedImage.year}
                                                </span>
                                                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                                                    {selectedImage.category.charAt(0).toUpperCase() + selectedImage.category.slice(1)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Info */}
                                <div className="p-6 md:p-8">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">Project Details</h4>
                                            <ul className="space-y-2 text-gray-600">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span>Completed: {selectedImage.year}</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span>Category: {selectedImage.category}</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span>Status: Completed</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">Construction Highlights</h4>
                                            <ul className="space-y-2 text-gray-600">
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span>On-time delivery</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span>Budget adherence</span>
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                                                    <span>Quality craftsmanship</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 mb-3">Gallery Navigation</h4>
                                            <p className="text-gray-600 mb-4">
                                                Image {currentIndex + 1} of {filteredImages.length}
                                            </p>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => navigateImage('prev')}
                                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                >
                                                    <FaArrowLeft /> Previous
                                                </button>
                                                <button
                                                    onClick={() => navigateImage('next')}
                                                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                                                >
                                                    Next <FaArrowRight />
                                                </button>
                                            </div>
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

export default Gallery;