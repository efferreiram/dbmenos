import React, { Component } from 'react'
import NavBar from './NavBar/NavBar'
import JumboHeader from './JumboHeader/JumboHeader'
import VideoEmbed from './VideoEmbed/VideoEmbed'
import FormResults from './FormResults/FormResults'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboHeader />
        <div className="container">
          <VideoEmbed />
          <FormResults />
        </div>
      </div>
    );
  }
}

export default App;
