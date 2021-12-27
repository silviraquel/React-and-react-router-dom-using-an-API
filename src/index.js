import {render} from "react-dom";
import {
  BrowserRouter,
   Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import './style.css'


const rootElement = document.getElementById("root");
render(
  <BrowserRouter className='app' >
  <Header/>
    <Routes>
      <Route path="/" element={<Home />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
