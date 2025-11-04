import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <><div className='header'>
            <h2 className='ora'>{time.toLocaleTimeString()}</h2>
        <nav id="container-buttons">
          <ul id="buttons">
              <li><a href="#home" className='buton'>Home</a></li>
              <li><a href="/cv.pdf" download className='buton'>Resume</a></li>
              <li><a href="#portfolio" className='buton'>Portfolio</a></li>
              <li><a href="#contact" className='buton'>Contact</a></li>
          </ul>
      </nav>
        </div></>
  );
}
