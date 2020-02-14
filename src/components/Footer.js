import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>
        <h2>Profile</h2>
          <ul>
                        <li>Father: Muhammad Zaki</li>
                        <li>CNIC: 42301-6362390-9</li>
                        <li>Date of Birth: 16-July-1989</li>
                        <li>Marital Status: Single</li>
                        <li>Country: Pakistan</li>
                        </ul>
          <h2>Education</h2>
          <ul>
                        <li>Matriculation from Bahawalpur Board (Pre-medical Grade "B"2005)</li>
                        <li>Intermediate from Karachi Board (Commerce Grade "C" 2010)</li>
                        <li>Studying Artificial intelligence, Cloud Native Computing and Internet of Things from Axiom PIAIC Headquarter.</li>  
                        </ul>
        <ul className="contact">
          <li className="fa-home">Plot # 1/29, 4th Floor, Flat # A7,
                                              Block 5b, Nazimabad,<br />
                                              Karachi, Pakistan.</li>

          <li className="fa-phone">+92 313-287-3668</li>
          <li className="fa-envelope">umairzakicnbc@gmail.com</li>
         

         
        </ul>
        <ul className="f">
        <li>
        <a href="https://www.facebook.com/umair.zaki.12" target="_blank" className="icon alt  fa-facebook"><span className="label">Facebook</span></a>
        </li>
        <li>
        <a href="https://stackoverflow.com/users/12326848/umairzaki" target="_blank" className="icon alt fa-stack-overflow"><span className="label">Stack Overflow</span></a>
        </li>
        <li>
        <a href="https://github.com/UmairZaki" target="_blank" className="icon alt fa-github"><span className="label">GitHub</span></a>
        </li>
        <li>
        <a href="https://www.linkedin.com/in/umair-zaki-8353a918b/" target="_blank" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a>
        </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Umair Zaki</li>
          <li>
            03132873668
          </li>
        </ul>
      </div>
    </section>
  );
}
