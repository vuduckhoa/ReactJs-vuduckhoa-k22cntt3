import React, { Component } from 'react'

export default class VDKListTasks extends Component {
  render() {
    const { tasks } = this.props;
    return (
        <table>
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.vdk_taskId}>
                <td>{task.vdk_taskId}</td>
                <td>{task.vdk_taskName}</td>
                <td>{task.vdk_level}</td>
              </tr>
            ))}
          </tbody>
        </table>
    )
  }
}
