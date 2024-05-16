// [Hvt]TaskAdd.js
import React from 'react';

class VDKTaskAdd extends React.Component {
  state = {
    vdk_taskId: '',
    vdk_taskName: '',
    vdk_level: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task ID:
          <input type="text" name="vdk_taskId" onChange={this.handleChange} />
        </label>
        <label>
          Task Name:
          <input type="text" name="vdk_taskName" onChange={this.handleChange} />
        </label>
        <label>
          Level:
          <select name="vdk_level" onChange={this.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}

export default VDKTaskAdd;
