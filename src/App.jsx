
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {
  
  return (
    <main className='animate-fade-in-up'>
      <RouterProvider router={routes} />
    </main>
  )
}

export default App
