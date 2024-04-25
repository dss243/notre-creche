import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/kids.mp4' autoPlay loop muted />
      <h1>Explorez une expérience inoubliable et de qualité supérieure en visitant notre crèche</h1>
      <p>Qu'est-ce que tu attends?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Pré-inscription
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
