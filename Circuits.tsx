import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from './Button';
import SectionTitle from './SectionTitle';
import { Search, MapPin, CalendarDays } from 'lucide-react';

interface Circuit {
  id: number;
  name: string;
  image: string;
  durationDays: number;
  price: number;
  description: string;
  region: string;
  themes: string[];
}

const allCircuits: Circuit[] = [
  {
    id: 1,
    name: 'Northern Discovery: Nosy Be & Diego Suarez',
    image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    durationDays: 7,
    price: 1200,
    description: 'Explore the pristine beaches, lush forests, and vibrant culture of Northern Madagascar. Discover Nosy Be, the island of perfumes, and the stunning bays of Diego Suarez.',
    region: 'North',
    themes: ['Beach', 'Nature', 'Culture'],
  },
  {
    id: 2,
    name: 'Southern Odyssey: Isalo & Ifaty',
    image: 'https://images.pexels.com/photos/13389990/pexels-photo-13389990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    durationDays: 10,
    price: 1500,
    description: 'Journey through the dramatic landscapes of Isalo National Park, with its unique rock formations and natural pools, and relax on the beautiful beaches of Ifaty.',
    region: 'South',
    themes: ['Hiking', 'Nature', 'Beach'],
  },
  {
    id: 3,
    name: 'Eastern Rainforest Adventure: Andasibe & Sainte Marie',
    image: 'https://images.pexels.com/photos/1682701/pexels-photo-1682701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    durationDays: 8,
    price: 1350,
    description: 'Immerse yourself in the biodiversity of the Eastern rainforests, home to indri lemurs in Andasibe, and then unwind on the idyllic island of Sainte Marie.',
    region: 'East',
    themes: ['Wildlife', 'Nature', 'Beach'],
  },
  {
    id: 4,
    name: 'Western Baobab Trails: Morondava & Tsingy',
    image: 'https://images.pexels.com/photos/13382751/pexels-photo-13382751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    durationDays: 9,
    price: 1450,
    description: 'Witness the iconic Avenue of the Baobabs and explore the unique limestone karsts of Tsingy de Bemaraha National Park, a UNESCO World Heritage site.',
    region: 'West',
    themes: ['Nature', 'Adventure', 'Photography'],
  },
  {
    id: 5,
    name: 'Highlands & Lemur Trek: Antananarivo & Ranomafana',
    image: 'https://images.pexels.com/photos/13936655/pexels-photo-13936655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    durationDays: 6,
    price: 1100,
    description: 'Discover the historical capital Antananarivo before heading south to Ranomafana National Park, a biodiversity hotspot for lemurs and chameleons.',
    region: 'Central',
    themes: ['Culture', 'Wildlife', 'Nature'],
  },
];

const Circuits: React.FC = () => {
  const { t } = useTranslation();
  const [filteredCircuits, setFilteredCircuits] = useState<Circuit[]>(allCircuits);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  useEffect(() => {
    let currentCircuits = allCircuits;

    if (searchTerm) {
      currentCircuits = currentCircuits.filter(circuit =>
        circuit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        circuit.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRegion) {
      currentCircuits = currentCircuits.filter(circuit =>
        circuit.region === selectedRegion
      );
    }

    if (selectedDuration) {
      currentCircuits = currentCircuits.filter(circuit => {
        if (selectedDuration === '1-7') return circuit.durationDays >= 1 && circuit.durationDays <= 7;
        if (selectedDuration === '8-14') return circuit.durationDays >= 8 && circuit.durationDays <= 14;
        if (selectedDuration === '15+') return circuit.durationDays >= 15;
        return true;
      });
    }

    setFilteredCircuits(currentCircuits);
  }, [searchTerm, selectedRegion, selectedDuration]);

  const uniqueRegions = Array.from(new Set(allCircuits.map(circuit => circuit.region)));
  const uniqueDurations = [
    { value: '1-7', label: '1-7 ' + t('circuits.days') },
    { value: '8-14', label: '8-14 ' + t('circuits.days') },
    { value: '15+', label: '15+ ' + t('circuits.days') },
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDuration(event.target.value);
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const circuitCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle title={t('circuits.title')} centered={true} />

        {/* Search and Filter Section */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t('circuits.searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={selectedRegion}
                onChange={handleRegionChange}
              >
                <option value="">{t('circuits.filterByRegion')}</option>
                {uniqueRegions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
          </div>

          <div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
                value={selectedDuration}
                onChange={handleDurationChange}
              >
                <option value="">{t('circuits.filterByDuration')}</option>
                {uniqueDurations.map(duration => (
                  <option key={duration.value} value={duration.value}>{duration.label}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.757 7.586 5.343 9z"/></svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Circuits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
        >
          {filteredCircuits.length > 0 ? (
            filteredCircuits.map((circuit) => (
              <motion.div
                key={circuit.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                variants={circuitCardVariants}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={circuit.image}
                    alt={circuit.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white text-sm font-semibold py-1 px-3 rounded-full">
                    {circuit.region}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{circuit.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{circuit.description}</p>
                  <div className="flex items-center text-gray-700 mb-3">
                    <CalendarDays className="w-5 h-5 text-emerald-500 mr-2" />
                    <span>{circuit.durationDays} {t('circuits.days')}</span>
                  </div>
                  <div className="flex items-center text-gray-900 font-bold text-xl mb-4">
                    <span>{t('circuits.priceFrom')} ${circuit.price}</span>
                  </div>
                  <Link to={`/circuits/${circuit.id}`}>
                    <Button variant="primary" fullWidth={true}>
                      {t('circuits.viewDetails')}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="md:col-span-3 text-center py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-700 text-lg">{t('circuits.noResults')}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Circuits;
