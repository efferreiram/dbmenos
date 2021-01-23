import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import JumboHeader from './JumboHeader/JumboHeader';
import VideoEmbed from './VideoEmbed/VideoEmbed';
import FormResults from './FormResults/FormResults';
import RecentSearches from './RecentSearches/RecentSearches';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <JumboHeader />
        <div className="container">
          <VideoEmbed />
          <FormResults />
          <RecentSearches />
        </div>
      </div>
    );
  }
}

export default App;
