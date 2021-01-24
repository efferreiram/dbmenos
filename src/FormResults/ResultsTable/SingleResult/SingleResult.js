import React, {Component} from 'react';

class SingleResult extends Component {
  renderData(value, key) {
    return <td key={key}>{value}</td>
  }

  render() {
    var rows = [];
    for(var i = 0; i < this.props.keys.length; i++) {
      var key = this.props.keys[i];
      var data = this.props.result[key];
      rows.push(this.renderData(data, i));
    }

    return (
      <tr key={this.props.resultid}>
        {rows}
      </tr>
    );
  }
}

export default SingleResult;
