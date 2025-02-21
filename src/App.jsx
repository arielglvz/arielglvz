
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

// Pages
import Footer from './components/Footer';

function App() {
  
  return (
    <main className='animate-fade-in-up'>
      <RouterProvider router={routes} />
      <Footer />
    </main>
  )
}

export default App
