import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';


export default function App() {
  return (
    <div className="bg-[#111] min-h-screen">
      <Header />
      <Content/>
      <Footer />
    </div>
  );
}