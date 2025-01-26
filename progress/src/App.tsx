import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Landing from './pages/Landing/Landing';
import Journal from './pages/Journal/Journal';
import TodoList from './pages/TodoList/TodoList';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <Router>
      <div>
        {/* Global Toaster */}
        <Toaster reverseOrder={false} position='top-center' />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
