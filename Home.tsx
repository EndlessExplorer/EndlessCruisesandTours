import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Users, Award } from 'lucide-react';
import Button from './Button'; // Chemin corrigé
import SectionTitle from './SectionTitle'; // Chemin corrigé

const Home: React.FC = () => {
  const { t } = useTranslation();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, // <--- Assurez-vous que le "0," est bien là
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Feature card animation
  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Popular destinations data
  const popularDestinations = [
    {
      id: 1,
      name: 'Avenue of the Baobabs',
      region: 'West',
      image: 'https://images.pexels.com/photos/13382751/pexels-photo-13382751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      days: 3,
    },
    {
      id: 2,
      name: 'Isalo National Park',
      region: 'South',
      image: 'https://images.pexels.com/photos/13389990/pexels-photo-13389990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      days: 5,
    },
    {
      id: 3,
      name: 'Nosy Be Island',
      region: 'North',
      image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      days: 7,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Madagascar landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <Link to="/circuits">
              <Button size="lg" variant="primary">
                {t('home.hero.cta')}
              </Button>
            </Link>
          </motion.div>
          </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="text-white">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0 md:pr-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://images.pexels.com/photos/12918666/pexels-photo-12918666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Madagascar wildlife" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <div className="md:w-1/2">
              <SectionTitle title={t('home.about.title')} />
              <motion.p 
                className="text-gray-700 mb-6 text-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                {t('home.about.content')}
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <Button variant="outline">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('home.features.title')} 
            centered={true} 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Feature 1 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={featureCardVariants}
            >
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t('home.features.expertise.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.expertise.description')}
              </p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={featureCardVariants}
            >
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t('home.features.sustainable.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.sustainable.description')}
              </p>
            </motion.div>
            
            {/* Feature 3 */}
            <motion.div 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow"
              variants={featureCardVariants}
            >
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {t('home.features.customized.title')}
              </h3>
              <p className="text-gray-600">
                {t('home.features.customized.description')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title={t('home.destinations.title')} 
            centered={true} 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {popularDestinations.map((destination) => (
              <motion.div 
                key={destination.id}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                variants={featureCardVariants}
              >
                <div className="relative h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {destination.region}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{destination.name}</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-gray-600">{t('circuits.duration')}: </span>
                    <span className="ml-2 font-semibold text-gray-800">{destination.days} {t('circuits.days')}</span>
                  </div>
                  <Link to="/circuits">
                    <Button variant="outline" fullWidth={true}>
                      {t('circuits.viewDetails')}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center">
            <Link to="/circuits">
              <Button variant="primary">
                {t('home.destinations.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
