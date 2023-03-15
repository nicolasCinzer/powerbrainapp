import Chapters from './components/Chapters';
import Chapter from './components/ChapterBubble';
import { Route } from 'wouter';

export default function App() {
  return (
    <div className='bg-bg-color h-screen font-manrope'>
      <Chapters />
      <Route
        path='/chapters/:id'
        component={Chapter}
      />
    </div>
  );
}
