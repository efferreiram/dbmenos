import React, { Component } from 'react';
import JustTable from './JustTable/JustTable';
import Pagination from './Pagination/Pagination';

class ResultsTable extends Component {
  render() {
    return (
      <div className="row row-content m-auto">
        <JustTable results={this.props.results} resultsType={this.props.resultsType}/>
        <Pagination />
      </div>
    );
  }
}

export default ResultsTable;
