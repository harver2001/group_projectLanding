import React, { useEffect, useState } from 'react';
import './overview.css';

const sections = ['Section 1', 'Section 2', 'Section 3'];

function Overview() {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleScroll = () => {
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element.getBoundingClientRect().top <= 0) {
        setActiveSection(section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="sidebar">
        {sections.map((section) => (
          <a href={`#${section}`} className={section === activeSection ? 'active' : ''}>
            {section}
          </a>
        ))}
      </div>
      <div className="content">
        {sections.map((section) => (
          <div id={section} className="section">
            <h2>{section}</h2>
            <p>Content for {section}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
