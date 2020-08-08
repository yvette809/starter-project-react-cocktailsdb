import React from "react";
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function App() {
  return(
    <Router>
      <NavBar/>
      <Switch>
      <Route path='/' exact component={Home}>
      </Route>
      <Route path ='/about' component ={About}></Route>
      <Route path ='/cocktail/:id' component ={SingleCocktail}></Route>
      <Route path='*' component={Error}></Route>
      </Switch>
       </Router>
  )
}
