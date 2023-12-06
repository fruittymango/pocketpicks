import React, { ReactElement, useEffect, useState } from 'react';

interface ComponentProps {
  children?: Array<ReactElement>;
};


const RightSection: React.FC<ComponentProps> = ({children = []}) => {
  const HeaderSection = () => {
    const [time, setTime] =  useState(new Date().toLocaleTimeString());

    useEffect(()=>{

      setInterval(()=>{
        setTime(new Date().toLocaleTimeString());
      }, 1000)     

    }, []);

    return(
      <div className='header-bg'>
        <span className='guest-title'>{time}</span>
      </div>
    );
  }

  return (
    <div className='right-section'>
        <HeaderSection />
        {children.map(value => value)}
    </div>
  );
}

export default RightSection;