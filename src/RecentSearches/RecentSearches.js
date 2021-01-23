import React, { Component } from 'react';
import SingleSearch from './SingleSearch/SingleSearch';

class RecentSearches extends Component {
  render() {
    return (
      <div className="row row-content">
        <div className="col-12 text-center">
          <h1 className="nav-link-content" id="searches">Los usuarios están buscando...</h1>
        </div>
        <div className="col-12 col-md-6 offset-md-3">
          <div className="list-group text-center">
            <SingleSearch />
            <SingleSearch />
            <SingleSearch />
          </div>
        </div>
      </div>

    );
  }
}

export default RecentSearches;
