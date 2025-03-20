import Navbar from "./constants/Navbar";
import Hero from "./constants/Hero";
import Highlight from "./constants/Highlight";
import Model from "./constants/Model";
import Footer from "./constants/footer";
import * as Sentry from '@sentry/react';  
import Features from "./constants/Features";
import HowItWorks from "./constants/HowItWorks";



const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
