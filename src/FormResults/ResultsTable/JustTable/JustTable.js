import React, { Component } from 'react';

class JustTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'resultsType': null,
      'results': [],
      'exampleResults': []
    };
  }
  render() {
    return (
      <div className="col-12">
        <h2 className="text-center">Resultados</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="thead-dark">
              <th>Name</th>
              <th>Year</th>
              <th>Director</th>
              <th>Producer</th>
            </thead>
            <tbody>
              <tr>
                <th>Castle in the Sky</th>
                <td>1986</td>
                <td>Hayao Miyazaki</td>
                <td>Isao Takahata</td>
              </tr>
              <tr>
                <th>Castle in the Sky</th>
                <td>1986</td>
                <td>Hayao Miyazaki</td>
                <td>Isao Takahata</td>
              </tr>
              <tr>
                <th>Castle in the Sky</th>
                <td>1986</td>
                <td>Hayao Miyazaki</td>
                <td>Isao Takahata</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default JustTable;
