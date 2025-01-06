import React from 'react'

function Footer() {
  return (
    <footer className="footer text-center py-5 bg-dark">
        <div className="container pt-1">
          <div className="mx-auto" style={{ maxWidth: '600px' }}>
            <h6 className="mt-2 text-white">Follow Me</h6>
            <div className="social-icons-main mt-4 pb-3">
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/akhil.joseph.351104" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/akhiljoseph8" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://www.instagram.com/akhil.joh/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/Akhiljoseph8" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a></li>
              </ul>
            </div>
          </div>
          <p className="footer-text text-white pt-3">
            2025 Biodata. | Design by <a href="/" className="link">Akhil Joseph.</a>
          </p>
        </div>
      </footer>
  )
}

export default Footer