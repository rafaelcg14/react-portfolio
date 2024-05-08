import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
// import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { ProjectModal } from './components/Modals/ProjectModal/ProjectModal';
import { Home } from './components/pages/Home/Home';
// import { Reel } from './components/pages/Reel/Reel';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      {/* <Reel/> */}
      <Projects/>
      <ProjectModal/>
      <Experience/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
