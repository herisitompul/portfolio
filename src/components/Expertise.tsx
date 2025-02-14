import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaravel, faFigma, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

// Impor gambar jika tidak menggunakan public folder
import laravelIcon from '../assets/icon/laravel.svg';
import html5Icon from '../assets/icon/html5.svg';
import css3Icon from '../assets/icon/css3.svg';
import jsIcon from '../assets/icon/javascript.svg';
import tsIcon from '../assets/icon/typescript.svg';
import reactIcon from '../assets/icon/react.svg';
import nextIcon from '../assets/icon/next.svg';
import alpineIcon from '../assets/icon/alpinejs.svg';
import tailwindIcon from '../assets/icon/tailwind.svg';
import mysqlIcon from '../assets/icon/mysql.svg';
import postgresqlIcon from '../assets/icon/postgresql.svg';
import figmaIcon from '../assets/icon/figma.svg';
import githubIcon from '../assets/icon/github.svg';

const skillIcons = [
    { src: laravelIcon, alt: "Laravel" },
  { src: html5Icon, alt: "HTML5" },
  { src: css3Icon, alt: "CSS3" },
  { src: jsIcon, alt: "JavaScript" },
//   { src: tsIcon, alt: "TypeScript" },
  { src: reactIcon, alt: "React" },
//   { src: nextIcon, alt: "Next.js" },
//   { src: alpineIcon, alt: "Alpine.js" },
  { src: tailwindIcon, alt: "Tailwind CSS" },
  { src: mysqlIcon, alt: "MySQL" },
  { src: postgresqlIcon, alt: "PostgreSQL" },
  { src: figmaIcon, alt: "Figma" },
  { src: githubIcon, alt: "GitHub" },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <section id="skill" className="skill">
          <div className="container">
            <div className="content">
              <div className="skills" data-aos-delay="500">
                {skillIcons.map((skill, index) => (
                  <div key={index} data-aos="zoom-in-down" className="skill-box">
                    <img src={skill.src} alt={skill.alt} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Expertise;
