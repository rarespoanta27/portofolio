import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills'; // <-- Importă Skills
import Education from './components/Education'; // <-- Importă Education

function App() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <Skills />
        <Education />
      </main>
    </>
  );
}

export default App;