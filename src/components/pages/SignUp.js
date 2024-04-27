import React, { useState } from 'react';

export default function SignUp() {
  const [parentName, setParentName] = useState('');
  const [parentLastname, setParentLastname] = useState('');
  const [parentPhone, setParentPhone] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [enfantName, setEnfantName] = useState('');
  const [enfantLastname, setEnfantLastname] = useState('');
  const [enfantDateDeNaissance, setEnfantDateDeNaissance] = useState('');
  // const [kids, setKids] = useState([{ name: '', lastname: '', birthdate: '' }]);
  // const [numKids, setNumKids] = useState(1);

  // const handleChange = (event, index) => {
  //   const { name, value } = event.target;
  //   const [property, childIndex] = name.split('-');
  //   console.log('Property:', property);
  //   console.log('Child index:', childIndex);
  //   console.log('Value:', value);
  
  //   const newKids = [...kids];
  //   newKids[index][property] = value;
  //   console.log('New kids:', newKids);
  
  //   setKids(newKids);
  // };

  // const handleAddChild = () => {
  //   setKids([...kids, { name: '', lastname: '', birthdate: '' }]);
  //   setNumKids(numKids + 1);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create an object to hold the form data
    const formData = {
      prenomParent: parentName,
      nomParent: parentLastname,
      tel: parentPhone,
      mail: parentEmail,
      prenomEnfant: enfantName,
      nomEnfant: enfantLastname,
      dateNaissance: enfantDateDeNaissance,
      // enfants: kids.map((child) => ({
      //   nom_enfant: child['lastname'],
      //   prenom_enfant: child['name'],
      //   date_naissance: new Date(child['birthdate']),
      // })),
    };
  
    // Make a POST request to the server
    fetch('http://localhost:8080/addEnfantPreinscrit', {
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
          setEnfantName('');
          setEnfantLastname('');
          setEnfantDateDeNaissance('');
          // setKids([{ name: '', lastname: '', birthdate: '' }]);
          // setNumKids(1);
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
          <label htmlFor="enfant-name">Prénom de l'enfant:</label>
          <input
            type="text"
            id="enfant-name"
            name="enfantName"
            value={enfantName}
            onChange={(event) => setEnfantName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="enfant-lastname">Nom de l'enfant:</label>
          <input
            type="text"
            id="enfant-lastname"
            name="enfantLastname"
            value={enfantLastname}
            onChange={(event) => setEnfantLastname(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="enfant-datedenaissance">Date de Naissance:</label>
          <input
            type="date"
            id="enfant-datedenaissance"
            name="enfantDateDeNaissance"
            value={enfantDateDeNaissance}
            onChange={(event) => setEnfantDateDeNaissance(event.target.value)}
          />
        </div>
        {/* {kids.map((child, index) => (
          <div key={index}>
            <label htmlFor={`child-name-${index}`}>Prénom de l'enfant:</label>
            <input
              type="text"
              id={`child-name-${index}`}
              name={`name-${index}`}
              value={child.name}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={`child-lastname-${index}`}>Nom de l'enfant:</label>
            <input
              type="text"
              id={`child-lastname-${index}`}
              name={`lastname-${index}`}
              value={child.lastname || ''}
              onChange={(event) => handleChange(event, index)}
            />
            <label htmlFor={`child-birthdate-${index}`}>Date de naissance de l'enfant:</label>
            <input
              type="date"
              id={`child-birthdate-${index}`}
              name={`birthdate-${index}`}
              value={child.birthdate || ''}
              onChange={(event) => handleChange(event, index)}
            />
          </div>
        ))} */}
       

        {/* { <button type="button" onClick={handleAddChild}>
          +
        </button> } */}
        <button type="submit">SUIVANT</button>
      </form>
    </div>
  );
}