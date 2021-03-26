import React from 'react';
import {Container, Grid} from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';


function App() {
  return (
    <div className="App">
      <Container >
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} >
             <Profile/>
          </Grid> 
          <Grid item xs style={{backgroundColor: 'red'}}>
              <Header/>
              
              <Router> 
                 <Switch>
                 <Route path="/Portfolio" component={Portfolio}>
                         <Portfolio/>
                 </Route>
                 <Route path="/">
                         <Resume/>
                 </Route>
                  
                 </Switch>
              </Router> 

              <Footer/>
          </Grid> 

        </Grid>
      </Container>
    </div>
  );
}

export default App;
