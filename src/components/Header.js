function Header() {
  return (
    <header className="hero section reveal" id="home">
      {/* Main introduction block */}
      <p className="hero-kicker">Hello, I’m</p>
      <h1 className="hero-name">Lamway Mogen</h1>
      <h2 className="hero-title">System Developer & Product Builder (KOG-POS)</h2>
      <p className="hero-summary">
        I build practical software products and scalable systems for teams that
        need reliable digital solutions.
      </p>
      <a href="#projects" className="btn-primary">
        View My Projects
      </a>
    </header>
  )
}

export default Header