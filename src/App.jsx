import Chapters from './components/Chapters';
import Chapter from './Chapter';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-bg-color h-screen font-manrope scrollbar-hide'>
      <Routes>
        <Route
          path='/'
          element={<Chapters />}
        >
          <Route
            path='/chapters/:id'
            element={<Chapter />}
          />
        </Route>
      </Routes>
    </div>
  );
}
