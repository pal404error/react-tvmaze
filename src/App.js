
import './App.css';
import Shows from "./page/Shows";
import {ShowAbout} from "./page/ShowAbout";
import { Head } from './page/Head'
import { Footer } from './page/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import { NavItem } from 'react-bootstrap';


function App() {

  const data = (id) =>{

  }
  return (
    <div className="App">
      <BrowserRouter>

{/* <Header title="Todo List" searchBar={true} /> */}
<Head />
<Routes>
  <Route exact path="/" element={<Shows />} />
  <Route exact path="about" element={<ShowAbout/>} />
</Routes>
<Footer />

</BrowserRouter>
    </div>
  );
}

export default App;
