import { Link } from 'gatsby';
import React, { Fragment } from 'react';

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <Fragment>
        <header style={{ textAlign: 'center' }}>
          <Link to="/" title="Logo">
            <img
              src="/img/gerimmo-logo.jpg"
              alt="Gerimmo"
              style={{ width: '25%' }}
            />
          </Link>
        </header>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              {/* Hamburger menu */}
              <div className="navbar-burger burger" data-target="navMenu">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div id="navMenu" className="navbar-menu">
              <div
                className="navbar-start has-text-centered"
                style={{ marginRight: '0' }}
              >
                <Link className="navbar-item" to="/">
                  Accueil
                </Link>
                <Link className="navbar-item" to="/Proprietaire">
                  Propriétaire
                </Link>
                <Link className="navbar-item" to="/Appartement">
                  Appartement à la carte
                </Link>
                <Link className="navbar-item" to="/Partenariat">
                  Partenariat
                </Link>
                {/*         <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link> */}
                {/*         <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
        <Link className="navbar-item" to="/contact/examples">
          Form Examples
        </Link> */}
              </div>
              {/*   <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div> */}
            </div>
          </div>
        </nav>
      </Fragment>
    );
  }
};

export default Navbar;
