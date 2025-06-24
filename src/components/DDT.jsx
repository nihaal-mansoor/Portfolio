import React, { useState, useEffect } from 'react';

const RealTimeDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatDay = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

   return (
      <div className='meta-box'>
         <span>{formatDay(currentTime)}</span>
         <span>|</span>
         <span>{formatDate(currentTime)}</span>
         <span>|</span>
         <span>{formatTime(currentTime)}</span>
      </div>
   );
};

export default RealTimeDateTime;