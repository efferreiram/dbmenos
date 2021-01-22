import React, { Component } from 'react';


class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light navbar-expand-sm fixed-top bg-light">
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
            <span className="navbar-toggler-icon" />
          </button>
          <span className="navbar-brand">DBmenos Test</span>
          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link" href="#video">¿Cómo funciona?</a></li>
              <li className="nav-item"><a className="nav-link" href="#lookup">Consultar el API de Ghibli</a></li>
              <li className="nav-item"><a className="nav-link" href="#searches">Búsquedas más Recientes</a></li>
            </ul></div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
