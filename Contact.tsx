import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar, User, MessageSquare } from 'lucide-react';
import SectionTitle from './SectionTitle'; // Chemin corrigé ici
import Button from './Button'; // Chemin corrigé ici

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

      {/* Contact Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {[
              { icon: MapPin, title: t('contact.details.address.title'), text: t('contact.details.address.text') },
              { icon: Mail, title: t('contact.details.email.title'), text: t('contact.details.email.text') },
              { icon: Phone, title: t('contact.details.phone.title'), text: t('contact.details.phone.text') },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center"
                variants={fadeIn}
              >
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{t('contact.form.title')}</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  <User className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  <Mail className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                  <Calendar className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                  {t('contact.form.date')}
                </label>
                <input
                  type="date"
                  id="date"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                  <MessageSquare className="inline-block w-4 h-4 mr-2 text-emerald-600" />
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
                  placeholder={t('contact.form.subjectPlaceholder')}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-emerald-500"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <Button type="submit" size="lg" variant="primary">
                  {t('contact.form.send')}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
