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
      <Container className="top_60">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4} lg={3} >
             <Profile/>
          </Grid> 
         <Grid item xs={12} sm={12} md={8} lg={9} >
            <Router> 
              <Header/>
                <div className="main_content container_shadow">
                    <Switch>
                        <Route path="/Portfolio" component={Portfolio}>
                              <Portfolio/>
                        </Route>
                        <Route path="/">
                                <Resume/>
                        </Route>
                    </Switch>
                  </div>
            </Router> 

              <Footer/>
          </Grid> 

        </Grid>
      </Container>
    </div>
  );
}

export default App;
