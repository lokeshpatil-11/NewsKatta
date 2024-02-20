import './App.css';


import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { 
  BrowserRouter as Router,
  Routes,
  Route,

 } from 'react-router-dom';


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News pageSize={9} key='general' category='general'/>}> </Route>
          <Route exact path="/business" element={<News pageSize={9} key='business' category='business'/>}> </Route>  
          <Route exact path="/entertainment" element={<News pageSize={9} key='entertainment' category='entertainment'/>}></Route>  
          <Route exact path="/general" element={<News pageSize={9} key='general' category='general'/>}> </Route>
          <Route exact path="/health" element={<News pageSize={9} key='health' category='health'/>}></Route>  
          <Route exact path="/science" element={<News pageSize={9} key='science' category='science'/>}></Route>  
          <Route exact path="/sports" element={<News pageSize={9} key='sports' category='sports'/>}></Route>  
          <Route exact path="/technology" element={<News pageSize={9} key='technology' category='technology'/>}></Route>  
        </Routes>
        </Router>
      </div>
    )
  }
}
