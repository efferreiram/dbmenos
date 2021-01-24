import React, { Component } from 'react';
import PetitionForm from './PetitionForm/PetitionForm';
import ResultsTable from './ResultsTable/ResultsTable';
import axios from 'axios';

class FormResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'resultsType': '',
      'results': [],
      'endpointSelect': 'films',
      'textFilter': '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      var endpointValue = 'films';
      var textFilterValue = '';

      if (localStorage.getItem('endpointSelect') !== null) {
        endpointValue = localStorage.getItem('endpointSelect');
      }
      if (localStorage.getItem('textFilter') !== null) {
        textFilterValue = localStorage.getItem('textFilter');
      }

      this.setState({
        'endpointSelect': endpointValue,
        'textFilter': textFilterValue
      })

    }

    handleSubmit(event) {
      var self = this;
      var type = this.state.endpointSelect;
      var filter = this.state.textFilter;
      localStorage.setItem('endpointSelect', type);
      localStorage.setItem('textFilter', filter);
      axios.get('http://localhost:8081', {
        params: {
          textFilter: this.state.textFilter,
          searchType: this.state.endpointSelect,
        }
      }).then(function (response) {
        self.setState({
          results: response.data,
          resultsType: type,
          queryTime: Date.now(),
        });
      }).catch(function (error) {
        console.log(error);
      });
      event.preventDefault();
    }

    handleChange(event) {
      var target = event.target.name;
      var value = event.target.value;
      this.setState({
        [target]: value
      });
    }

    render() {
      return (
        <div className="row row-content">
        <div className="col-12 text-center">
        <h1 id="lookup">Hacer Peticiones</h1>
        </div>
        <PetitionForm selectValue={this.state.endpointSelect} filterValue={this.state.textFilter} changeFunc={this.handleChange} submitFunc={this.handleSubmit} />
        <ResultsTable key={this.state.queryTime} results={this.state.results} resultsType={this.state.resultsType} />
        </div>
      );
    }
  }

  export default FormResults;
