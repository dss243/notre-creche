import React, { useState } from 'react';

export default function SignUp() {
  const [parentName, setParentName] = useState('');
  const [parentLastname, setParentLastname] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [parentnomEnfant, setParentnomEnfant] = useState('');
  const [parentprenomEnfant, setParentprenomEnfant] = useState('');
  const [parentdateNaissance, setParentdateNaissance] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      prenomParent: parentName,
      nomParent: parentLastname,
      tel: parentPhone,
      mail: parentEmail,
      nomEnfant: parentnomEnfant,
      prenomEnfant: parentprenomEnfant,
      dateNaissance: parentdateNaissance,
    };

    fetch('http://localhost:8080/addEnfantPreinscrit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form submitted successfully');
          setParentName('');
          setParentLastname('');
          setParentPhone('');
          setParentEmail('');
          setParentnomEnfant('');
          setParentprenomEnfant('');
          setParentdateNaissance('');
          alert('Form submitted successfully!');
        } else {
          console.error('Error submitting form');
          alert('Error submitting form. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Network error:', error);
        alert('Network error. Please try again later.');
      });
  };

  return (
    <div>
      <h1 className='sign-up'>pré-inscrie maintenant!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="parent-name">Prénom du parent:</label>
          <input
            type="text"
            id="parent-name"
            name="parentName"
            value={parentName}
            onChange={(event) => setParentName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="parent-lastname">Nom du parent:</label>
          <input
            type="text"
            id="parent-lastname"
            name="parentLastname"
            value={parentLastname}
            onChange={(event) => setParentLastname(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="parent-phone">Numéro de téléphone:</label>
          <input
            type="tel"
            id="parent-phone"
            name="parentPhone"
            value={parentPhone}
            onChange={(event) => setParentPhone(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="parent-email">Votre email:</label>
          <input
            type="email"
            id="parent-email"
            name="parentEmail"
            value={parentEmail}
            onChange={(event) => setParentEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nomEnfant">Nom de l'enfant:</label>
          <input
            type="text"
            id="nomEnfant"
            name="parentnomEnfant"
            value={parentnomEnfant}
            onChange={(event) => setParentnomEnfant(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="prenomEnfant">Prénom de l'enfant:</label>
          <input
            type="text"
            id="prenomEnfant"
            name="parentprenomEnfant"
            value={parentprenomEnfant}
            onChange={(event) => setParentprenomEnfant(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateNaissance">Date de naissance de l'enfant:</label>
          <input
            type="date"
            id="dateNaissance"
            name="parentdateNaissance"
            value={parentdateNaissance}
            onChange={(event) => setParentdateNaissance(event.target.value)}
          />
        </div>
        <button type="submit">SUIVANT</button>
      </form>
    </div>
  );
}