import React, { Component } from 'react';
import PetitionForm from './PetitionForm/PetitionForm';
import ResultsTable from './ResultsTable/ResultsTable';

class FormResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'resultsKeys': null,
      'results': [],
      'selectValue': 'films',
      'filterValue': '',
      'exampleResults': [
        {'name':'Castle in the Sky', 'year':'1986', 'director':'Hayao Miyazaki', 'producer':'Isao Takahata'},
        {'name':'Grave of the Fireflies', 'year':'1988', 'director':'Isao Takahata', 'producer':'Toru Hara'},
        {'name':'Ponyo', 'year':'2008', 'director':'Hayao Miyazaki', 'producer':'Toshio Suzuki'}
      ],
      'exampleKeys': ['name', 'year', 'director', 'producer'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log('sumbitted');
  }

  handleChange(e) {
    console.log('changed');
  }

  render() {
    return (
      <div className="row row-content">
        <div className="col-12 text-center">
          <h1 className="nav-link-target" id="lookup">Hacer Peticiones</h1>
        </div>
        <PetitionForm selectValue={this.state.selectValue} filterValue={this.state.filterValue} changeFunc={this.handleChange} submitFunc={this.handleSubmit} />
        <ResultsTable results={this.state.exampleResults} keys={this.state.exampleKeys} />
      </div>
    );
  }
}

export default FormResults;
