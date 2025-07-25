import { motion } from 'framer-motion';
import { 
  Zap, 
  Home, 
  Users, 
  Gauge, 
  Settings, 
  Wind, 
  Shield, 
  Wifi, 
  Sun, 
  Camera,
  Wrench
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'General Electrical Works',
      description: 'Complete electrical solutions for residential and commercial properties with certified expertise.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Home,
      title: 'House Wiring',
      description: 'Professional house wiring services ensuring safety and compliance with electrical standards.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Users,
      title: 'Consultation & Supervision',
      description: 'Expert consultation and project supervision for all your electrical and technology needs.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Gauge,
      title: 'High & Low Voltage',
      description: 'Specialized high and low voltage installations with advanced safety protocols.',
      color: 'from-red-400 to-red-600'
    },
    {
      icon: Settings,
      title: 'Transformer Installation',
      description: 'Professional transformer installation and maintenance services for industrial applications.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Wind,
      title: 'Air-Conditioners',
      description: 'Complete AC installation, maintenance, and repair services for optimal comfort.',
      color: 'from-cyan-400 to-cyan-600'
    },
    {
      icon: Shield,
      title: 'Electric Fencing',
      description: 'Secure your property with professional electric fencing installation and maintenance.',
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      icon: Wifi,
      title: 'Networking',
      description: 'Complete networking solutions including LAN, WAN, and wireless network setup.',
      color: 'from-pink-400 to-pink-600'
    },
    {
      icon: Sun,
      title: 'Solar System',
      description: 'Sustainable solar energy solutions with installation and maintenance services.',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: Camera,
      title: 'CCTV System',
      description: 'Advanced security camera systems for comprehensive surveillance and monitoring.',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Wrench,
      title: 'General Plumbing Works',
      description: 'Professional plumbing services including installation, repair, and maintenance.',
      color: 'from-teal-400 to-teal-600'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive electrical, technology, and maintenance solutions 
            tailored to meet your specific needs with professional excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span>Get Started Today</span>
            <Zap className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;