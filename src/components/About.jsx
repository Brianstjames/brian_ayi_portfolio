import React from 'react';
import components from './assets/styles/images/cor-2.jpg';  

function AboutMe() {
  return (
    <div style={{backgroundColor: '#C7FF33'}}>
      <div className='intro'>
        <p className="name">Brian Ayiteyfio</p>
        <p className="title">Junior Software Developer</p>
        <p className="location">Atlanta, GA</p>
        <p className="contact">404.441.5880 | stjamess77@gmail.com</p>
      </div>
      <h1 className="section-title">About Me</h1>
      <img src={components} alt="description of image" className="profile-picture" />
      <p className="description">My name is Brian Ayiteyfio and I am a software developer.</p>
      <p className="description">I have a degree in Public Policy but I have always had a liking for IT which led me to Digital Crafts' bootcamp by way of City of Refuge</p>
      <p className="description">In my free time, I enjoy keeping up with issues concerning society and construction.</p>
    </div>
  );
}

export default AboutMe;



