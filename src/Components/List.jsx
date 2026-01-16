import React, { useState } from 'react';
import Projects from './Projects/Projects';
import Works from './workSection/Works';
import Home from './HomeSection/Home';
import Contact from './Contact/Contact';
import VisibilitySensor from 'react-visibility-sensor';
import './list.css';
import Experience from './Experience/Experience';
import Home2 from './HomeSection/Home2';

const List = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (visible) => {
    setIsVisible(visible);
    console.log('Contact page is visible');
  };

  return (
    <div className='pages'>
      <div className='pagesArrangement'>
        <Home2 />
        {/* <Works />
        <Experience />
        <Projects /> */}
      </div>
      <VisibilitySensor onChange={onChange} partialVisibility>
        <div className={`contactView ${isVisible ? 'contactSeen' : 'contactHidden'}`}>
          {/* <Contact /> */}
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default List;
