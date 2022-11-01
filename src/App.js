import './App.css';
import React from "react";
import Navbar from "./components/NavbarItems/Navbar";
import Header from "./components/HeaderItems/Header";
import About from "./components/AboutItems/About";
import MobileApp from './components/MobileAppItem/MobileApp';
import Sidebar from './components/SidebarItem/Sidebar';
import View from './components/ViewItem/View';
import User from './components/UserItem/User';
import Footer from './components/FooterItem/Footer';
   
   

 function App() {
  return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <MobileApp />
        <Sidebar />
        <View />
        <User />
        <Footer />
      </div>
  )
}

export default App;