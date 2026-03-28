import IssueRow from "./IssueRow"; 
function IssueTable({ issues, deleteIssue }) { 
  return ( 
    <table border="1"> 
      <thead> 
        <tr> 
          <th>ID</th> 
          <th>Title</th> 
          <th>Owner</th> 
          <th>Status</th> 
          <th>Created</th> 
          <th>Effort</th> 
          <th>Due</th> 
          <th>Action</th> 
        </tr> 
      </thead> 
      <tbody> 
        {issues.map((issue) => ( 
          <IssueRow 
            key={issue.id} 
            issue={issue} 
            deleteIssue={deleteIssue} 
          /> 
        ))} 
      </tbody> 
    </table>
    ); 
} 
export default IssueTable; 