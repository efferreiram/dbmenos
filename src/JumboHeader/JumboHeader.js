import React, { Component } from 'react';

class JumboHeader extends Component {
  render() {
    return (
      <header className="jumbotron bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-light display-4">Obtén información del API de Ghibli Studio.</h1>
            </div>
            <div className="col-12 mt-5">
              <a className="btn btn-outline-light" href="#lookup">Hacer una petición</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default JumboHeader;
