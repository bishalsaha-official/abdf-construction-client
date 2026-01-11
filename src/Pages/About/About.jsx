import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaHardHat, 
  FaShieldAlt, 
  FaLightbulb, 
  FaHandshake, 
  FaUsers,
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaUserCheck,
  FaMedal,
  FaArrowRight
} from 'react-icons/fa';

const About = () => {
  const heroRef = useRef(null);
  const overviewRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isOverviewInView = useInView(overviewRef, { once: true, amount: 0.3 });
  const isValuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

  // Key Values Data
  const coreValues = [
    {
      id: 1,
      icon: <FaHardHat className="text-4xl" />,
      title: "Quality Craftsmanship",
      description: "Uncompromising attention to detail and superior workmanship in every project we undertake.",
      color: "from-amber-500 to-orange-400"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Safety First",
      description: "Proactive safety measures and rigorous protocols to protect our team and clients.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 3,
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation",
      description: "Embracing modern construction techniques and sustainable building practices.",
      color: "from-emerald-500 to-green-400"
    },
    {
      id: 4,
      icon: <FaHandshake className="text-4xl" />,
      title: "Reliability",
      description: "Consistent on-time, on-budget project delivery with transparent communication.",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 5,
      icon: <FaUsers className="text-4xl" />,
      title: "Collaboration",
      description: "Strong partnerships with clients, architects, and suppliers for optimal results.",
      color: "from-red-500 to-orange-400"
    }
  ];

 

  // Key Stats Data
  const keyStats = [
    {
      id: 1,
      icon: <FaCalendarAlt className="text-3xl" />,
      value: 25,
      suffix: "+",
      label: "Years of Excellence",
      color: "text-blue-600"
    },
    {
      id: 2,
      icon: <FaBuilding className="text-3xl" />,
      value: 420,
      suffix: "+",
      label: "Projects Completed",
      color: "text-amber-600"
    },
    {
      id: 3,
      icon: <FaUserCheck className="text-3xl" />,
      value: 150,
      suffix: "+",
      label: "Satisfied Clients",
      color: "text-emerald-600"
    },
    {
      id: 4,
      icon: <FaUsers className="text-3xl" />,
      value: 85,
      suffix: "+",
      label: "Expert Team Members",
      color: "text-purple-600"
    }
  ];

  // Animation Variants
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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              About Us
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light max-w-4xl mx-auto mb-8">
              Building Excellence Since 1998
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A premier construction company dedicated to transforming visions into reality through 
              innovation, quality, and unwavering commitment to client success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The foundation of everything we build
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                  <FaMedal className="text-3xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver exceptional construction solutions through innovation, quality craftsmanship, 
                and unwavering commitment to client satisfaction. We build lasting relationships by 
                exceeding expectations and maintaining the highest standards of safety and professionalism.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-amber-600 font-semibold">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  Client-Centric Approach
                </div>
                <div className="flex items-center gap-2 text-amber-600 font-semibold mt-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  Quality Without Compromise
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <FaAward className="text-3xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted and innovative construction partner in our industry, 
                recognized for transforming challenging projects into landmark achievements. 
                We envision shaping sustainable communities through responsible building practices 
                that stand as testaments to engineering excellence.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Industry Leadership
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-semibold mt-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  Sustainable Innovation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isValuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {coreValues.map((value) => (
              <motion.div
                key={value.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} text-white shadow-lg mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-amber-600 font-semibold">
                    <div className="w-2 h-2 rounded-full bg-amber-500 mr-2"></div>
                    Integral to Our Culture
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Build Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with a construction company that values quality, safety, and your vision 
              as much as you do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-lg bg-amber-600 hover:bg-amber-700 border-amber-600 hover:border-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Your Project
                <FaArrowRight className="ml-2" />
              </button>
              <button className="btn btn-outline btn-lg border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                Contact Our Team
              </button>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-semibold">Licensed & Insured</div>
                  <div className="text-gray-400">Full contractor licensing</div>
                </div>
                <div>
                  <div className="font-semibold">Award-Winning</div>
                  <div className="text-gray-400">Multiple industry recognitions</div>
                </div>
                <div>
                  <div className="font-semibold">Nationwide Service</div>
                  <div className="text-gray-400">Projects across the country</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;