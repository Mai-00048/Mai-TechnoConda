import React from "react";
import Header from "./components/Header";
import Body from "./components/body"; 
import ImageSlider from "./components/ImageSlider";
import footer from "./components/Footer";

 
import './App.css';
import Footer from "./components/Footer";

const App = () => {
   
  return (
    <div>
      <Header />
      <Body />  
     
      <div>
      <ImageSlider />
    </div>
 <div>
     <Footer /> 
 </div>

 
      <main>
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default App;
