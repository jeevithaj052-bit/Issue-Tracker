import React from "react";

function IssueRow({ issue, deleteIssue }) {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.title}</td>
      <td>{issue.owner}</td>
      <td>{issue.status}</td>
      <td>{issue.created.toDateString()}</td>
      <td>{issue.effort}</td>
      <td>{issue.due ? issue.due.toDateString() : ""}</td>
      <td>
        <button onClick={() => deleteIssue(issue.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default IssueRow;