import React from 'react';
import Navbar from './compo/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Index from './compo/layout/Index';
import { Provider } from './context';
import Lyrics from './compo/tracks/Lyrics';
function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar />
         
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics}/>
            
          </Switch>
        </div>
      </React.Fragment>
      
    </Router>
    </Provider>
    
  );
}

export default App;
