import React, { useState }  from 'react'
import useTheme from '../../hooks/useTheme';

const NightModeBtn = () => {
  const [isChecked, setIsChecked] = useState('checked');
  const { setTheme } = useTheme();

  const handleToggle = () => {
      const newTheme = !isChecked ? 'light' : 'dark';
      
      setTheme(newTheme);
      setIsChecked(!isChecked);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" checked={isChecked} onChange={handleToggle} />
      <div
        className="w-20 h-10 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"
      ></div>
    </label>
  )
}

export default NightModeBtn
