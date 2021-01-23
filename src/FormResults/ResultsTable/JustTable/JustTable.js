import React, { Component } from 'react';
import SingleResult from './SingleResult/SingleResult';

class JustTable extends Component {
  render() {
    return (
      <div className="col-12">
        <h2 className="text-center">Resultados</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Director</th>
                <th>Producer</th>
              </tr>
            </thead>
            <tbody>
              <SingleResult />
              <SingleResult />
              <SingleResult />
              <SingleResult />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default JustTable;
