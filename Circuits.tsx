import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, UserCheck } from 'lucide-react';
import SectionTitle from './SectionTitle'; // MODIFIÉ ICI (suppression de ../components/)
import Button from './Button';         // MODIFIÉ ICI (suppression de ../components/)

const Circuits: React.FC = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredTours, setFilteredTours] = useState<any[]>([]);

  // Define tours data
  const tours = [
    {
      id: 1,
      name: 'Avenue of the Baobabs',
      region: 'west',
      duration: 3,
      difficulty: 'easy',
      description: 'Explore the famous avenue with ancient baobab trees.',
      image: 'https://images.pexels.com/photos/13382751/pexels-photo-13382751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Andasibe-Mantadia National Park',
      region: 'east',
      duration: 4,
      difficulty: 'moderate',
      description: 'Discover the home of the Indri lemurs in this lush rainforest.',
      image: 'https://images.pexels.com/photos/46107/indri-lemur-indri-indri-madagascar-46107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Isalo National Park',
      region: 'south',
      duration: 5,
      difficulty: 'moderate',
      description: 'Trek through canyons and natural pools in this scenic park.',
      image: 'https://images.pexels.com/photos/13389990/pexels-photo-13389990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      name: 'Nosy Be Island',
      region: 'north',
      duration: 7,
      difficulty: 'easy',
      description: 'Relax on pristine beaches and enjoy water activities.',
      image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'Tsingy de Bemaraha',
      region: 'west',
      duration: 6,
      difficulty: 'challenging',
      description: 'Navigate through limestone formations in this UNESCO site.',
      image: 'https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      name: 'Ranomafana National Park',
      region: 'east',
      duration: 4,
      difficulty: 'moderate',
      description: 'Explore this biodiversity hotspot with hot springs and rare species.',
      image: 'https://images.pexels.com/photos/4577793/pexels-photo-4577793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  // Filter tours based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredTours(tours);
    } else {
      setFilteredTours(tours.filter(tour => tour.region === activeFilter));
    }
  }, [activeFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-amber-100 text-amber-800';
      case 'challenging':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const animationContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration:
        0.4 }
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/7506233/pexels-photo-7506233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Madagascar tours" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title={t('circuits.title')}
            subtitle={t('circuits.subtitle')}
            centered={true}
            light={true}
          />
        </div>
      </section>

      {/* Tour Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'all'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
