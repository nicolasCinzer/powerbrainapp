import Home from './pages/Home';
import Chapter from './pages/Chapter';
import Block from './pages/Block';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className='bg-bg-color h-screen font-manrope scrollbar-hide'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        >
          <Route
            path='/chapters/:id'
            element={<Chapter />}
          >
            <Route
              path='blocks/:id'
              element={<Block />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
