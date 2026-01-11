import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images
import constructionSite1 from '../../assets/Banner/hero1.jpg';
import constructionSite2 from '../../assets/Banner/hero2.jpg';
import constructionSite3 from '../../assets/Banner/hero3.jpg';

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const slideContent = [
        {
            id: 1,
            title: "Building Your Future with Precision",
            subtitle: "Commercial & industrial construction experts delivering excellence since 1998",
            image: constructionSite1,
            primaryBtn: "Get a Quote",
            secondaryBtn: "View Projects"
        },
        {
            id: 2,
            title: "Expert Construction Solutions",
            subtitle: "From ground-breaking to completion, we build with integrity and expertise",
            image: constructionSite2,
            primaryBtn: "Our Services",
            secondaryBtn: "View Projects"
        },
        {
            id: 3,
            title: "Quality Craftsmanship Guaranteed",
            subtitle: "Licensed, bonded, and insured for your complete peace of mind",
            image: constructionSite3,
            primaryBtn: "Get a Quote",
            secondaryBtn: "Meet Our Team"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    };

    return (
        <section className="relative h-screen max-h-[900px] min-h-[600px] overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Pagination, Navigation]}
                effect="fade"
                speed={1200}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) =>
                        `<span class="${className} bg-white/70 hover:bg-white w-3 h-3 mx-1 rounded-full transition-all duration-300"></span>`,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                className="h-full w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {slideContent.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Background */}
                            <div className="absolute inset-0">
                                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" loading="eager" />
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 via-gray-900/70 to-gray-900/60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="relative h-full flex items-center">
                                <div className="container mx-auto px-4 md:px-8 lg:px-12">
                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="max-w-3xl text-white"
                                    >
                                        <motion.div animate={floatingAnimation} className="mb-6 md:mb-8">
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                                                {slide.title}
                                            </h1>
                                        </motion.div>

                                        <motion.p variants={itemVariants} className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 md:mb-12 max-w-2xl leading-relaxed">
                                            {slide.subtitle}
                                        </motion.p>

                                        <motion.div
                                            variants={containerVariants}
                                            className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row space-x-6'}`}
                                        >
                                            <motion.div variants={itemVariants}>
                                                <button className="btn btn-primary btn-lg bg-amber-600 border-amber-600 hover:bg-amber-700 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                                    {slide.primaryBtn}
                                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </button>
                                            </motion.div>

                                            <motion.div variants={itemVariants}>
                                                <button className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                                                    {slide.secondaryBtn}
                                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </button>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom navigation */}
                <div ref={prevRef} className="swiper-button-prev absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

                <div ref={nextRef} className="swiper-button-next absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </Swiper>

            {/* Scroll indicator */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
                <div className="flex flex-col items-center">
                    <span className="text-white/70 text-sm mb-2 font-medium">Scroll</span>
                    <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </motion.div>

            {/* Slide indicator */}
            <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center space-x-2">
                {slideContent.map((_, index) => (
                    <div key={index} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-amber-500 w-6' : 'bg-white/50'}`} />
                ))}
            </div>
        </section>
    );
};

export default Banner;
