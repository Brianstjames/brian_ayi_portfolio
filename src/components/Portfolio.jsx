import React from 'react';

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      {/* <img src={myImage} alt="description of image" /> */}
      <p>Links to my GitHub repositories:</p>
      <ul>
        <li><a href="https://github.com/EthanTPowell/peanut-gallery.git">Repository 1</a></li>
        <li><a href="https://github.com/cchat44/JokesProject.git">Repository 2</a></li>
      </ul>
    </div>
  );
}

