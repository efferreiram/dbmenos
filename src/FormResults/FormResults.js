import React, { Component } from 'react';
import PetitionForm from './PetitionForm/PetitionForm';
import ResultsTable from './ResultsTable/ResultsTable';

class FormResults extends Component {
  render() {
    return (
      <div class="row row-content">
        <div class="col-12 text-center">
          <h1 class="nav-link-target" id="lookup">Hacer Peticiones</h1>
        </div>
        <PetitionForm />
        <ResultsTable />
      </div>
    );
  }
}

export default FormResults;
