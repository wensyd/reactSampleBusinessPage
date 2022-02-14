import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About  from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import SingleBlog from './pages/SingleBlog'


// add a constructor so that react can update the names 

class App extends Component {
   constructor(){
    super()
}
  

  render() {
   
    return (
      <div className="">
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/About" element = {<About/>}/>
        <Route path="/Services" element = {<Services/>}/>
        <Route path="/Blogs" element = {<Blogs/>}/>
        <Route path="/:slug" element = {<SingleBlog/>}/>
        <Route path="/Contact" element = {<Contact/>}/>
      </Routes>
      </div>
    )
  }
}



export default App