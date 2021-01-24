import React, { Component } from 'react';
import PetitionForm from './PetitionForm/PetitionForm';
import ResultsTable from './ResultsTable/ResultsTable';
import axios from 'axios';

class FormResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'resultsType': 'people',
      'results': [
        {
          "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
          "name": "Pazu",
          "gender": "Male",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Brown",
          "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
          ],
          "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
          "url": "https://ghibliapi.herokuapp.com/people/fe93adf2-2f3a-4ec4-9f68-5422f1b87c01"
        },
        {
          "id": "598f7048-74ff-41e0-92ef-87dc1ad980a9",
          "name": "Lusheeta Toel Ul Laputa",
          "gender": "Female",
          "age": "13",
          "eye_color": "Black",
          "hair_color": "Black",
          "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
          ],
          "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
          "url": "https://ghibliapi.herokuapp.com/people/598f7048-74ff-41e0-92ef-87dc1ad980a9"
        },
        {
          "id": "3bc0b41e-3569-4d20-ae73-2da329bf0786",
          "name": "Dola",
          "gender": "Female",
          "age": "60",
          "eye_color": "Black",
          "hair_color": "Peach",
          "films": [
            "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"
          ],
          "species": "https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2",
          "url": "https://ghibliapi.herokuapp.com/people/3bc0b41e-3569-4d20-ae73-2da329bf0786"
        }],
        'selectValue': 'films',
        'filterValue': '',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      var self = this;
      var type = this.state.selectValue;
      axios.get('http://localhost:8081', {
        params: {
          textFilter: this.state.filterValue,
          searchType: this.state.selectValue,
        }
      }).then(function (response) {
        console.log(Object.keys(response.data[0]));
        self.setState({
          results: response.data,
          resultsType: type,
        });
      }).catch(function (error) {
        console.log(error);
      });
      e.preventDefault();
    }

    handleChange(e) {
      console.log(e);
    }

    render() {
      return (
        <div className="row row-content">
        <div className="col-12 text-center">
        <h1 className="nav-link-target" id="lookup">Hacer Peticiones</h1>
        </div>
        <PetitionForm selectValue={this.state.selectValue} filterValue={this.state.filterValue} changeFunc={this.handleChange} submitFunc={this.handleSubmit} />
        <ResultsTable results={this.state.results} resultsType={this.state.resultsType} />
        </div>
      );
    }
  }

  export default FormResults;
