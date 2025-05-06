
import React, { useEffect } from 'react';
import AdoptionTips from './AdoptionTips';

const AdoptionTipsWrapper = () => {
  // Effet pour défiler vers le haut de la page au chargement
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <AdoptionTips />;
};

export default AdoptionTipsWrapper;
