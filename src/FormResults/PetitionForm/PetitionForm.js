import React, { Component } from 'react';

class PetitionForm extends Component {
  render() {
    return (
      <div className="col-12">
        <form>
          <div className="form-group row">
            <label for="endpointSelect" className="col-12 col-md-2 offset-md-3">Elige un tipo de búsqueda:</label>
            <div className="col-12 col-md-4">
              <select className="form-control" name="endpointSelect" id="endpointSelect">
                <option value="films">Películas</option>
                <option value="people">Personajes</option>
                <option value="locations">Ubicaciones</option>
                <option value="vehicles">Vehículos</option>
                <option value="species">Especies</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label for="textFilter" className="col-12 col-md-2 offset-md-3">Filtra por cualquier término que quieras:</label>
            <div className="col-12 col-md-4">
              <input className="form-control" type="text" name="textFilter" placeholder="Escribe un término para filtar tu búsqueda" id="textfilter" />
              <small className="form-text text-muted">Puedes dejarlo vacío.</small>
            </div>
          </div>
          <div className="form-group row">
            <div className="offset-md-5 col-md-2">
              <button type="submit" name="submit" className="btn btn-outline-dark">Consultar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PetitionForm;
