import React, { useEffect, useState } from 'react';

const ThemeController = () => {
  const [ isDarkMode, setDarkMode ] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem('Theme');
    if(savedTheme){
      setDarkMode(savedTheme === 'dark');
    }
  }, [])
  const handleClicked = () => {
    setDarkMode(!isDarkMode);
  }
  useEffect(() => {
    if(isDarkMode){
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    else{
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light')
    }
  }, [ isDarkMode ])
  return (
    <div>
      <input type="checkbox" checked={isDarkMode} onClick={handleClicked} className="toggle toggle-neutral" />
    </div>
  );
};

export default ThemeController;