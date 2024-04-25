import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explorez notre crèche lors d'une visite enrichissante. Découvrez un environnement sécurisé et stimulant, où vos enfants partagent des moments de jeu, d'apprentissage et de complicité. Rejoignez-nous pour découvrir comment nous offrons un lieu exceptionnel pour leur développement.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/3cancer.jpg'
              text='Journée internationale de sensibilisation au cancer du sein.'
              label='Conscience'
              path='/services'
            />
            <CardItem
              src='images/25.jpg'
              text='Découvrez la culture et les vêtements traditionnels de Constantine'
              label='culture'
              path='/services'
            />
          </ul>
          <ul classNameculture='cards__items'>
            <CardItem
              src='images/eid.jpg'
              text='Célébration de lEid, du calendrier agraire utilisé par les populations berbères dAfrique du Nord, principalement en Algérie, au Maroc, en Tunisie et en Libye. Cest '
              label='fete'
              path='/services'
            />
            <CardItem
              src='images/picnic.jpg'
              text='Une journée de pique-nique pour les enfants : une aventure en plein air pleine de jeux, de rires et de souvenirs inoubliables.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/yennayr.jpg'
              text='
              "Yennayer" est le nom berbère du premier mois du calendrier agraire utilisé par les populations berbères dAfrique du Nord, principalement en Algérie, au Maroc, en Tunisie et en Libye. Cest '
              label='culture'
              path='/sign-up'
            />
               <CardItem
              src='images/trip.jpg'
              text='
              "Yennayer" est le nom berbère du premier mois du calendrier agraire utilisé par les populations berbères dAfrique du Nord, principalement en Algérie, au Maroc, en Tunisie et en Libye. Cest '
              label='Adventure'
              path='/sign-up'
            />
              <CardItem
              src='images/1nov.jpg'
              text='la celeberation de Le 1er novembre est commémoré en Algérie comme le début de la guerre dindépendance contre le colonialisme français, marquant le début dune lutte héroïque pour lautodétermination du pays.'
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
