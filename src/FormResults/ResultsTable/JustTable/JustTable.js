import React, { Component } from 'react';
import SingleResult from './SingleResult/SingleResult';

class JustTable extends Component {

  renderResult(i) {
    return <SingleResult result={this.props.results[i]} keys={this.props.keys} resultid={i} key={i}/>;
  }

  renderHeader() {
    return (
      <tr>
        <th>Name</th>
        <th>Year</th>
        <th>Director</th>
        <th>Producer</th>
      </tr>
    );
  }

  render() {

    var results = [];
    for(var i = 0; i < 3; ++i) {
      results.push(this.renderResult(i));
    }

    return (
      <div className="col-12">
        <h2 className="text-center">Resultados</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              {this.renderHeader()}
            </thead>
            <tbody>
              {results}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default JustTable;
