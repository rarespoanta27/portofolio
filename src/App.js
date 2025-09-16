import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills'; // <-- Importă Skills
import Education from './components/Education'; // <-- Importă Education
import Certificates from './components/Certificates';

function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <Skills />
        <Certificates />
        <Education />
      </main>
    </>
  );
}

export default App;