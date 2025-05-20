import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, User, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Madagascar contact" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title={t('contact.title')}
            subtitle={t('contact.subtitle')}
            centered={true}
            light={true}
          />
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-lg shadow-md p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <User className="w-5 h-5 mr-2 text-emerald-600" />
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-emerald-600" />
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2 flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2 text-emerald-600" />
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <Button variant="primary" type="submit" fullWidth>
                  {t('contact.form.submit')}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Info */}
            <div>
              <motion.div
                className="bg-emerald-700 text-white rounded-lg shadow-md p-8 mb-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h3 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-4 text-emerald-300 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-emerald-100">{t('contact.info.address')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 mr-4 text-emerald-300 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:contact@madagascar-tours.com" className="text-emerald-100 hover:text-white transition-colors">
                        {t('contact.info.email')}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 mr-4 text-emerald-300 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+261-20-12-345-67" className="text-emerald-100 hover:text-white transition-colors">
                        {t('contact.info.phone')}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Google Calendar Section */}
              <motion.div
                className="bg-white border border-gray-200 rounded-lg shadow-md p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 mr-2 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-800">{t('contact.calendar.title')}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{t('contact.calendar.description')}</p>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="aspect-w-16 aspect-h-9">
                    {/* This is a placeholder for Google Calendar integration */}
                    <div className="w-full h-64 bg-gray-200 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Google Calendar Integration</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Find Us"
            subtitle="Our office is located in the heart of Antananarivo"
            centered={true}
          />
          
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              {/* This is a placeholder for Google Maps integration */}
              <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Google Maps Integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about traveling to Madagascar"
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {/* FAQ Item 1 */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-800">What is the best time to visit Madagascar?</h3>
                    <div className="ml-4 transition-transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p>The best time to visit Madagascar is during the dry season from April to October. The weather is mild and rainfall is at its lowest. November to March is the rainy season, which can make roads difficult to navigate, especially in remote areas.</p>
                  </div>
                </details>
              </motion.div>
              
              {/* FAQ Item 2 */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-800">Do I need a visa to visit Madagascar?</h3>
                    <div className="ml-4 transition-transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p>Yes, most visitors to Madagascar require a visa. Tourist visas can be obtained upon arrival at the airport for stays up to 90 days. Make sure your passport is valid for at least six months beyond your planned departure date.</p>
                  </div>
                </details>
              </motion.div>
              
              {/* FAQ Item 3 */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-800">What vaccinations do I need for Madagascar?</h3>
                    <div className="ml-4 transition-transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p>Travelers to Madagascar should be up-to-date on routine vaccinations. Additionally, hepatitis A, typhoid, and malaria prophylaxis are recommended. Consult with a travel medicine specialist at least 4-6 weeks before your trip for personalized advice.</p>
                  </div>
                </details>
              </motion.div>
              
              {/* FAQ Item 4 */}
              <motion.div
                className="border border-gray-200 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer bg-white p-6">
                    <h3 className="text-lg font-medium text-gray-800">Can you customize tours for special interests?</h3>
                    <div className="ml-4 transition-transform group-open:rotate-180">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    <p>Yes, we specialize in creating custom tours based on your interests, whether it's wildlife photography, bird watching, cultural experiences, or adventure activities. Contact us with your preferences, and we'll design a personalized itinerary for you.</p>
                  </div>
                </details>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;