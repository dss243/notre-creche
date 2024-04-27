import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const letters = text.textContent.split('');
    text.textContent = '';

    letters.forEach((letter, index) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.fontFamily = '"Pacifico"';
      text.appendChild(span);

      if (index === letters.length - 1) return;

      span.style.animation = `letter-animation 1s ease forwards ${index * 0.1}s`;
    });
  }, []);

  return (
    <div className="hero-container">
      <video src="/videos/kids.mp4" autoPlay loop muted />
      <h1 ref={textRef}>
        Explorez une expérience inoubliable et de qualité supérieure en visitant notre crèche
      </h1>
      <p>Qu'est-ce que tu attends?</p>
      <div className="hero-btns">
        <Link to="/signUp" className="btns">
          Pré-inscription
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;