import React from 'react';
import './presentation.css';
const Presentation = () => {
  return (
    <div>
      <img src="./Images/presntation.png" alt="Background" className='background' />
      <div className='container'>
        <p>
          Notre crèche est un endroit chaleureux et sécurisé où les enfants peuvent jouer, apprendre et grandir. Nous avons une équipe attentionnée qui se consacre au bien-être et au développement de chaque enfant. Chez nous, chaque journée est remplie de rires, de découvertes et d'amitiés. Nous sommes ravis de vous accueillir dans notre communauté  </p>
          <ul className='rectangle-list'>
  <li className="rectangle-item rectangle-1">
    <img src="./Images/bus.png" alt="Bus" className='rectangle' />
    <p>Bus Service</p>
  </li>
  <li className="rectangle-item rectangle-2">
    <img src="./Images/sport.png" alt="Entrainement" className='rectangle' />
    <p>Entrainement</p>
  </li>
  <li className="rectangle-item rectangle-3">
    <img src="./Images/family.png" alt="Suivie psychologique et orthophonique et nutuniste" className='rectangle' />
    <p>Suivie psychologique et orthophonique et nutuniste</p>
  </li>
  <li className="rectangle-item rectangle-4">
    <img src="./Images/teacher.png" alt="Les meilleurs professeurs" className='rectangle' />
    <p>Les meilleurs professeurs</p>
  </li>
</ul>
      </div>
    </div>
  );
};

export default Presentation;