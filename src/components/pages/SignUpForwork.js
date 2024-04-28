import React, { useState } from 'react';

export default function SignUpForWork() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [numeroTelephone, setNumeroTelephone] = useState('');
  const [description, setDescription] = useState('');
  const [job, setJob] = useState('');
  const [cv, setCv] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nom">Nom:</label>
      <input
        type="text"
        id="nom"
        value={nom}
        onChange={(event) => setNom(event.target.value)}
      />

      <label htmlFor="prenom">Prénom:</label>
      <input
        type="text"
        id="prenom"
        value={prenom}
        onChange={(event) => setPrenom(event.target.value)}
      />

      <label htmlFor="address">Adresse:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="numeroTelephone">Numéro de téléphone:</label>
      <input
        type="tel"
        id="numeroTelephone"
        value={numeroTelephone}
        onChange={(event) => setNumeroTelephone(event.target.value)}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <label htmlFor="job">Sélectionnez un travail:</label>
      <select id="job" value={job} onChange={(event) => setJob(event.target.value)}>
        <option value="">Sélectionnez un travail</option>
        <option value="educator">Educateur</option>
        <option value="psychologist">Psychologue</option>
        <option value="speechTherapist">Orthophoniste</option>
        <option value="accountant">Comptable</option>
      </select>

      <label htmlFor="cv">CV:</label>
      <input
        type="file"
        id="cv"
        onChange={(event) => setCv(event.target.files[0])}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
