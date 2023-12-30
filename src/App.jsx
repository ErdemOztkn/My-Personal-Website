import './assets/scss/App.css'
import Canvas from './assets/components/Canvas.jsx'
import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Skills from './assets/components/Skills.jsx';
import Project from './assets/components/Project.jsx';
import Home from './assets/components/Home.jsx';
import Contact from './assets/components/Contact.jsx';

function App() {
  const projects = [
    { title: "My Personal Website", subtitle: "Sass, React", img: "cv", gitHub: "https://github.com/ErdemOztkn/My-Portfolio-Website", demo: "https://erdemoztekin.com/" },
    { title: "Movies Spot", subtitle: "Sass, React", img: "moviesspot", gitHub: "https://github.com/ErdemOztkn/Movies-Spot", demo: "https://erdemoztekin.online/" },
    { title: "Weather App", subtitle: "Sass, React", img: "weatherapp", gitHub: "https://github.com/ErdemOztkn/Weather-App", demo: "https://weather-app-eta-amber.vercel.app/" },
    { title: "Typing Test", subtitle: "Sass, JavaScript", img: "typingtest", gitHub: "https://github.com/ErdemOztkn/Typing-Test", demo: "https://typing-test-six-weld.vercel.app/" }
  ];

  return (
    <>
      <Canvas />
      <Header />
      <div className='container'>
        <Home />
        <Skills />
        <section className="projects">
          <h3>Projects</h3>
          <div className='projectsWrapper'>
            {projects.map((prjcts, index) => (
              <Project key={index} title={prjcts.title} subtitle={prjcts.subtitle} img={prjcts.img} gitHub={prjcts.gitHub} demo={prjcts.demo}/>
              ))}
          </div>
        </section>
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
