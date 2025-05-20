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
      y:
