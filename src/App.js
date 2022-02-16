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
        <Route path="/about" element = {<About/>}/>
        <Route path="/services" element = {<Services/>}/>
        <Route path="/blogs" element = {<Blogs/>}/>
        <Route path="/blogs/:index" element = {<SingleBlog/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
      </div>
    )
  }
}



export default App