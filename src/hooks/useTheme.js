import { useEffect } from 'react';

const useTheme = () => {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, []);

  const setTheme = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  };

  const removeTheme = () => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  };

  return { setTheme, removeTheme };
};

export default useTheme;
