import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explorez nos activites.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/3cancer.jpg'
              text='Journée internationale de sensibilisation au cancer du sein.'
              label='Conscience'
              path='/activity'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/25.jpg'
              text='Découvrez la culture et les vêtements traditionnels de Constantine'
              label='culture'
              path='/services'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/eid.jpg'
              text='Célébration de lEid, du calendrier agraire utilisé par les populations berbères dAfrique du Nord, principalement en Algérie, au Maroc, en Tunisie et en Libye. Cest '
              label='fete'
              path='/services'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/picnic.jpg'
              text='Une journée de pique-nique pour les enfants : une aventure en plein air pleine de jeux, de rires et de souvenirs inoubliables.'
              label='Adventure'
              path='/products'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/yennayr.jpg'
              text='
              "Yennayer" est le nom berbère du premier mois du calendrier agraire utilisé par les populations berbères dAfrique du Nord, principalement en Algérie, au Maroc, en Tunisie et en Libye. Cest '
              label='culture'
              path='/sign-upActivtie'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/trip.jpg'
              text='
              "Yennayer" est le nom berbère du premier mois du calendrier agraire utilisé par les populations berbères dAfrique du Nord, principalement en Algérie, au Maroc, en Tunisie et en Libye. Cest '
              label='Adventure'
              path='/sign-upActivtie'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/1nov.jpg'
              text='la celeberation de Le 1er novembre est commémoré en Algérie comme le début de la guerre dindépendance contre le colonialisme français, marquant le début dune lutte héroïque pour lautodétermination du pays.'
              label='Adventure'
              path='/sign-upActivtie'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
            <CardItem
              src='images/constantine.jpg'
              text='la celeberation de Le 1er novembre est commémoré en Algérie comme le début de la guerre dindépendance contre le colonialisme français, marquant le début dune lutte héroïque pour lautodétermination du pays.'
              label='Adventure'
              path='/sign-upActivtie'
              buttonText='Sinscrire'
              buttonPath='/sign-upActivtie'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;