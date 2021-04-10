import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />


      </Router>
    </React.Fragment>
  );
}

export default App;