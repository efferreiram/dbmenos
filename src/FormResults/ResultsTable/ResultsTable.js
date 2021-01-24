import React, { Component } from 'react';
import SingleResult from './SingleResult/SingleResult';

class ResultsTable extends Component {
  getHeaderKeys(resultsType) {
    const header_keys = {
      'films': ['title', 'director', 'producer', 'release_date'],
      'people': ['name', 'age', 'gender', 'eye_color', 'hair_color'],
      'locations': ['name', 'climate', 'terrain', 'surface_water'],
      'species': ['name', 'classification', 'eye_colors', 'hair_colors'],
      'vehicles': ['name', 'vehicle_class', 'length']
    };
    return header_keys[resultsType];
  }

  getHeaderValue(key) {
    const header_values = {
      'title': 'Title',
      'director': 'Director',
      'producer': 'Producer',
      'release_date': 'Release Date',
      'name': 'Name',
      'age': 'Age',
      'gender': 'Gender',
      'eye_color': 'Eye Color',
      'hair_color': 'Hair Color',
      'climate': 'Climate',
      'terrain': 'Terrain',
      'surface_water': 'Surface Water',
      'classification': 'Classification',
      'eye_colors': 'Eye Colors',
      'hair_colors': 'Hair Colors',
      'vehicle_class': 'Vehicle Class',
      'length': 'Length'
    };

    return header_values[key];
  }

  renderResult(i, keys) {
    return <SingleResult result={this.props.results[i]} keys={keys} key={i}/>;
  }

  renderSingleHeader(name) {
    return <th key={name}>{name}</th>;
  }

  renderHeaders(keys) {
    var cols = []
    for(var i = 0; i < keys.length; i++) {
      var textVal = this.getHeaderValue(keys[i]);
      cols.push(this.renderSingleHeader(textVal));
    }

    return (
      <tr>
        {cols}
      </tr>
    );
  }

  render() {
    if (this.props.results.length > 0) {
      var keys = this.getHeaderKeys(this.props.resultsType);
      var headers = this.renderHeaders(keys);
      var results = [];
      for(var i = 0; i < this.props.results.length; ++i) {
        results.push(this.renderResult(i, keys));
      }

      return (
        <div className="row row-content m-auto">
          <div className="col-12">
            <h2 className="text-center">Resultados</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead className="thead-dark">
                  {headers}
                </thead>
                <tbody>
                  {results}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
    else {
      return (null);
    }
  }
}

export default ResultsTable;
