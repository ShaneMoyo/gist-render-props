import React from 'react';
import logo from './logo.svg';
import './App.css';
import GistContainer from './components/gists/GistContainer';
import About from './components/about';  
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{
          margin: 'auto', 
          width: '30%',
          display: 'flex', 
          justifyContent: 'space-around',
        }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch> 
          <Route path='/about' component={() => About}/>
          <Route path='/' component={GistContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
