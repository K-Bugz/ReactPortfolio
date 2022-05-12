import React from 'react';

export default function Contact() {
  return (
    <React.Fragment>
          <h1>Contact Me</h1>
          <div className="contact-me-row">
              <ul id='check'>
                  <li className='contact-me-tag'>Phone: (737)703-8407</li>
                  <li><a className='contact-me-tag' href="mailto: kbugusky@gmail.com">Email: kbugusky@gmail.com</a></li>
                  <li><a className='contact-me-tag' href="https://github.com/K-Bugz">GitHub</a></li>
                  <li><a className='contact-me-tag' href="https://www.linkedin.com/in/kevinbugusky333454/">linkedIn</a></li>
              </ul>
          </div>
    </React.Fragment>
  );
}
