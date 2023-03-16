import Chapters from './components/Chapters';
import Chapter from './Chapter';
import { Route } from 'wouter';

export default function App() {
  return (
    <div className='bg-bg-color h-screen font-manrope scrollbar-hide'>
      <Routes></Routes>
      <Chapters />
      <Route
        path='/chapters/:id'
        component={Chapter}
      />
    </div>
  );
}
