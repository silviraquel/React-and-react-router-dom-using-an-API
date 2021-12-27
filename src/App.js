import {Link} from 'react-router-dom';
import './index.css';
import Home  from './pages/Home';

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav>
        <Link to="/home">Home</Link> 
      </nav>
    </div>
  );
}