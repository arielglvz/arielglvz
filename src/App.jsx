
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes';

function App() {
  
  return (
    <main className='h-screen animate-fade-in-up'>
      <RouterProvider router={routes} />
    </main>
  )
}

export default App
