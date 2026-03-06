function Contact() {
  return (
    <section className="section reveal" id="contact">
      {/* Contact information section */}
      <h3 className="section-title">Contact</h3>
      <ul className="contact-list">
        <li>
          <span>Email:</span>{' '}
          <a href="mailto:lamwaymogen02@gmail.com">lamwaymogen02@gmail.com</a>
        </li>
        <li>
          <span>LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/lamway-mogen"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/lamway-mogen
          </a>
        </li>
        <li>
          <span>Phone:</span> +255 694 893 936
        </li>
      </ul>
    </section>
  )
}

export default Contact