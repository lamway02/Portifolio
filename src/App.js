import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const projects = [
  {
    name: 'KOG-POS (Live)',
    description:
      'A real-world point-of-sale platform for managing products, stock, sales, and reporting with a practical workflow for daily business operations.',
    technologies: ['React.js', 'Node.js', 'MySQL'],
  },
  {
    name: 'Hotel Booking System',
    description:
      'A reservation-focused system that handles room listings, booking flow, customer records, and administrative management for hospitality services.',
    technologies: ['PHP', 'MySQL', 'React.js'],
  },
  {
    name: 'Online Bookstore',
    description:
      'An e-commerce style bookstore where users can browse titles, manage carts, and complete orders with a clean and user-friendly interface.',
    technologies: ['React.js', 'PHP', 'MySQL', 'CSS'],
  },
]

const skills = [
  'HTML',
  'CSS',
  'PHP',
  'MySQL',
  'React.js',
  'Node.js',
  'AI Prompt Evaluation',
  'System Analysis',
]

function App() {
  return (
    <div className="app">
      {/* Top navigation for smooth scroll between page sections */}
      <nav className="top-nav" aria-label="Section navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Hero/header section */}
      <Header />

      <main className="content">
        {/* About section */}
        <About />

        {/* Projects section */}
        <Projects projects={projects} />

        {/* Skills section */}
        <Skills skills={skills} />

        {/* Contact section */}
        <Contact />
      </main>
    </div>
  )
}

export default App