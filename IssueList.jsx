import React from "react";
import IssueTable from "./IssueTable";
import IssueAdd from "./IssueAdd";
import IssueFilter from "./IssueFilter";

class IssueList extends React.Component {
  constructor() {
    super();

    this.state = {
      issues: [
        {
          id: 1,
          title: "Error in console",
          owner: "Ravan",
          status: "New",
          created: new Date(),
          effort: 5,
          due: null,
        },
      ],
    };

    // Binding functions
    this.addIssue = this.addIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
  }

  // Add Issue
  addIssue = (issue) => {
  const newIssue = {
    ...issue,
    id: this.state.issues.length + 1,
    created: new Date(),
    status: "New",   // always set status to New when creating a new issue
    due: issue.due ? new Date(issue.due) : null, // convert due date to Date object if provided
  };

  this.setState({ issues: [...this.state.issues, newIssue] });
}
  // Delete Issue
  deleteIssue(id) {
    this.setState({
      issues: this.state.issues.filter((i) => i.id !== id),
    });
  }

  render() {
    return (
      <div>
        <h2>Issue Tracking System</h2>

        <IssueFilter />

        <hr />

        <IssueTable
          issues={this.state.issues}
          deleteIssue={this.deleteIssue}
        />

        <hr />

        <IssueAdd addIssue={this.addIssue} />
      </div>
    );
  }
}

export default IssueList;