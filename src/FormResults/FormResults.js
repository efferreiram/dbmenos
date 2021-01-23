import React, { Component } from 'react';
import PetitionForm from './PetitionForm/PetitionForm';
import ResultsTable from './ResultsTable/ResultsTable';

class FormResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'resultsType': null,
      'results': [],
      'exampleResults': [
        {'name':'Castle in the Sky', 'year':'1986', 'director':'Hayao Miyazaki', 'producer':'Isao Takahata'},
        {'name':'Grave of the Fireflies', 'year':'1988', 'director':'Isao Takahata', 'producer':'Toru Hara'},
        {'name':'Ponyo', 'year':'2008', 'director':'Hayao Miyazaki', 'producer':'Toshio Suzuki'}
      ],
      'exampleType': 'movies'
    };
  }

  makeRequest(args) {

  }

  render() {
    return (
      <div className="row row-content">
        <div className="col-12 text-center">
          <h1 className="nav-link-target" id="lookup">Hacer Peticiones</h1>
        </div>
        <PetitionForm />
        <ResultsTable />
      </div>
    );
  }
}

export default FormResults;
