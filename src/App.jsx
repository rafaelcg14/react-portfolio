import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './pages/About/About';
import { Experience } from './pages/Experience/Experience';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
import { ProjectModal } from './components/Modals/ProjectModal/ProjectModal';
import { Home } from './pages/Home/Home';
import { Reel } from './pages/Reel/Reel';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Home/>
      <Reel/>
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
