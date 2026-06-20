import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme ? savedTheme === 'dark' : true;
    setDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  return (
    <Router>
      <div className={`min-h-screen page-bg ${darkMode ? 'dark' : ''}`}>
        <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
