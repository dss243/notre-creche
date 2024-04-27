import React, { useState } from 'react';

export default function SignupActivtie() {
  const [parentName, setParentName] = useState('');
  const [parentLastname, setParentLastname] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [birthDateenfant, setParentEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object to hold the form data
    const formData = {
      firstName: parentName,
      lastName: parentLastname,
      tel: parentPhone,
      birthDate: birthDateenfant,
    };

    // Make a POST request to the server
    fetch('http://localhost:8080/addExenfant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log('Form submitted successfully');
          // Clear form fields
          setParentName('');
          setParentLastname('');
          setParentPhone('');
          setParentEmail('');
          // Display success message to user
          alert('Form submitted successfully!');
        } else {
          // Handle error response
          console.error('Error submitting form');
          // Display error message to user
          alert('Error submitting form. Please try again.');
        }
      })
      .catch((error) => {
        // Handle network error
        console.error('Network error:', error);
        // Display error message to user
        alert('Network error. Please try again later.');
      });
  };

  return (
    <div>
      <h1 className='sign-up'>pré-inscrie maintenant!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="parent-name">Prénom de l'enfant:</label>
          <input
            type="text"
            id="parent-name"
            name="parentName"
            value={parentName}
            onChange={(event) => setParentName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="parent-lastname">Nom de l'enfant:</label>
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
          <label htmlFor="parent-email">Date de naissance:</label>
          <input
            type="Date"
            id="parent-email"
            name="parentEmail"
            value={birthDateenfant}
            onChange={(event) => setParentEmail(event.target.value)}
          />
        </div>
        <button type="submit">SUIVANT</button>
      </form>
    </div>
  );
}