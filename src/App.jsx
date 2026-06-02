import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white min-h-screen transition duration-500">
      <Navbar />
      <Hero />

      {/* Add a horizontal line between sections */}
      <div className="w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
      <About />
      
      {/* Add a horizontal line between sections */}
      <div className="w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
      <Projects />

      {/* Add a horizontal line between sections */}
      <div className="w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
      <Skills />

      {/* Add a horizontal line between sections */}
      <div className="w-full h-[1px] bg-black/10 dark:bg-white/10"></div>
      <Contact />
    </div>
  )
}