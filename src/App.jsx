import Navbar from "./constants/Navbar";
import Hero from "./constants/Hero";
import Highlight from "./constants/Highlight";
import Model from "./constants/Model";

import * as Sentry from '@sentry/react';  
import Features from "./constants/Features";



const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
    </main>
  )
}

export default Sentry.withProfiler(App);
