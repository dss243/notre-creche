import React from "react"
import '../../App.css';


const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25537.013309186437!2d2.7565512818990525!3d48.868597666702875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61dc3856082ef%3A0xae1f53529e2f11f6!2sBaby%20Care%20Center!5e0!3m2!1sfr!2sdz!4v1713992482114!5m2!1sfr!2sdz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
    
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>Nous sommes ouverts à toute suggestion ou simplement pour discuter</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADRESSE:</h4>
                <p>198 West 21th Street, Suite 721 nouvelle ville NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> notrecreche@gmail.com</p>
              </div>
              <div className='box'>
                <h4>tél-phone:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
              Créez un message ici...
              </textarea>
              <button className='primary-btn'>ENVOYER LE MESSAGE</button>
            </form>

            <h3>s'abonner</h3>
            <span>FACEBOOK INSTAGRAM </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
