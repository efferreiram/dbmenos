import React, { Component } from 'react'

class VideoEmbed extends Component {
  render() {
    return (
        <div className="row row-content">
          <div className="col-12 text-center">
            <h1 className="nav-link-target" id="video">¿Cómo funciona?</h1>
            <p>A continuación puedes ver un video del funcionamiento del sitio:</p>
          </div>
          <div className="col-12 col-md-8 offset-md-2">
            <div className="embed-responsive embed-responsive-16by9">
              
            </div>
          </div>
        </div>
    );
  }
}

export default VideoEmbed;
