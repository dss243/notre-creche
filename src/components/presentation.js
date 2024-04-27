import React from 'react';
import './presentation.css';
const Presentation = () => {
  return (
    <div className='presentation-container'>
      <div className='container'>
        <div className='text-container'>
          <p class="paragraph-background">
            Notre crèche est un endroit chaleureux et sécurisé où les enfants peuvent jouer, apprendre et grandir. Nous avons une équipe attentionnée qui se consacre au bien-être et au développement de chaque enfant. Chez nous, chaque journée est remplie de rires, de découvertes et d'amitiés. Nous sommes ravis de vous accueillir dans notre communauté </p>
        </div>
        <div className='list-container'>
          <ul className='rectangle-list'>
          <li className="rectangle-item rectangle-1">
            <div className="icon-container">
              <img src="./Images/bus.png" alt="Bus" className='icon' />
              <p className='rec1-p'>Bus Service</p>
              <h4>Un service de bus fiable pour un trajet en toute sécurité vers notre crèche</h4>
            </div>
          </li>
          <li className="rectangle-item rectangle-2">
            <div className="icon-container">
              <img src="./Images/sport.png" alt="Entrainement" className='icon' />
              <p className='rec2-p'>Entrainement</p>
              <h4>Des séances d'entraînement dynamiques pour favoriser le développement de votre enfant</h4>
            </div>
          </li>
          <li className="rectangle-item rectangle-3">
            <div className="icon-container">
              <img src="./Images/family.png" alt="Suivie psychologique et orthophonique et nutuniste" className='icon' />
              <p  className='rec3-p'>Suivie psychologique et orthophonique et nutuniste</p>
              <h4>Expertise pour l'épanouissement de votre enfant</h4>
            </div>
          </li>
          <li className="rectangle-item rectangle-4">
            <div className="icon-container">
              <img src="./Images/teacher.png" alt="Les meilleurs professeurs" className='icon' />
              <p  className='rec4-p'>Les meilleurs professeurs</p>
              <h4>Des éducateurs de premier ordre dédiés à decouvrir les talents</h4>
            </div>
          </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Presentation;