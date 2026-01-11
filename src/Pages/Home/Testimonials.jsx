import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const testimonials = [
        {
            id: 1,
            name: "Michael Rodriguez",
            position: "Project Director, TechCorp Inc.",
            company: "TechCorp Inc.",
            rating: 5,
            content: "Their team delivered our new headquarters ahead of schedule and under budget. The attention to detail and communication throughout was exceptional.",
            project: "Corporate Headquarters",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 2,
            name: "Sarah Chen",
            position: "CEO, Urban Development Group",
            company: "Urban Development Group",
            rating: 5,
            content: "Working with them transformed our mixed-use development. Their expertise in complex urban construction is unmatched in the industry.",
            project: "Mixed-Use Development",
            image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 3,
            name: "Robert Johnson",
            position: "Facilities Manager, MedCenter",
            company: "MedCenter",
            rating: 5,
            content: "The hospital expansion was completed with minimal disruption to ongoing operations. Their commitment to safety and precision was evident daily.",
            project: "Hospital Expansion",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 4,
            name: "Jennifer Lee",
            position: "Development Director, University",
            company: "State University",
            rating: 5,
            content: "Our new research facility exceeded all expectations. The team's innovative approach to sustainable building techniques was impressive.",
            project: "Research Facility",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 5,
            name: "David Thompson",
            position: "COO, Manufacturing Corp",
            company: "Manufacturing Corp",
            rating: 5,
            content: "The industrial facility was built to exact specifications with exceptional quality control. Their understanding of manufacturing needs was outstanding.",
            project: "Industrial Plant",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
        },
        {
            id: 6,
            name: "Amanda Williams",
            position: "Property Manager, Luxury Residences",
            company: "Luxury Residences LLC",
            rating: 5,
            content: "From design to completion, the residential tower project was managed flawlessly. The quality of craftsmanship is truly remarkable.",
            project: "Luxury Residential Tower",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
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

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <FaStar
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
            />
        ));
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
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Hear from our satisfied clients about their experience working with our construction team.
                    </p>
                </motion.div>

                {/* Desktop Swiper */}
                <div className="hidden lg:block">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.testimonial-swiper-next',
                            prevEl: '.testimonial-swiper-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        className="pb-16"
                        loop={true}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="relative">
                                        <FaQuoteLeft className="absolute -top-2 -left-2 text-amber-500/20 text-4xl" />
                                        <FaQuoteRight className="absolute -bottom-2 -right-2 text-amber-500/20 text-4xl" />
                                        <div className="flex items-center mb-6">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                                            />
                                            <div className="ml-4">
                                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                                <p className="text-gray-600 text-sm">{testimonial.position}</p>
                                                <div className="flex mt-1">
                                                    {renderStars(testimonial.rating)}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-6 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                        <div className="pt-6 border-t border-gray-200">
                                            <div className="text-sm font-semibold text-amber-600">{testimonial.project}</div>
                                            <div className="text-gray-500 text-sm">{testimonial.company}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Mobile/Tablet Swiper */}
                <div className="lg:hidden">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.testimonial-swiper-next',
                            prevEl: '.testimonial-swiper-prev',
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="pb-12"
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            }
                        }}
                    >
                        {testimonials.slice(0, 4).map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                                >
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-amber-100"
                                        />
                                        <div className="ml-3">
                                            <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                                            <p className="text-gray-600 text-xs">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <div className="flex mb-3">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <p className="text-gray-700 text-sm italic mb-4">
                                        "{testimonial.content}"
                                    </p>
                                    <div className="text-xs font-semibold text-amber-600">{testimonial.project}</div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation */}
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button className="testimonial-swiper-prev w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="text-center">
                        <div className="text-5xl font-bold text-amber-600 mb-2">4.9</div>
                        <div className="flex justify-center mb-1">
                            {renderStars(5)}
                        </div>
                        <p className="text-gray-600 text-sm">Average Client Rating</p>
                    </div>
                    <button className="testimonial-swiper-next w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="mt-12 pt-8 border-t border-gray-200"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { value: '150+', label: 'Happy Clients' },
                            { value: '98%', label: 'Would Recommend' },
                            { value: '4.9/5', label: 'Satisfaction Score' },
                            { value: '25', label: 'Repeat Clients' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="text-center"
                            >
                                <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;