import { useState } from "react"; 
function IssueAdd({ addIssue }) { 
const [form, setForm] = useState({ 
title: "", 
owner: "", 
status: "New", 
effort: "", 
due: "", 
}); 
const handleChange = (e) => { 
setForm({ ...form, [e.target.name]: e.target.value }); 
};
 const handleSubmit = (e) => { 
    e.preventDefault(); 
    addIssue(form); 
    setForm({ 
      title: "", 
      owner: "", 
      status: "New", 
      effort: "", 
      due: "", 
    }); 
  }; 
  return ( 
    <form onSubmit={handleSubmit}> 
      <h3>Add Issue</h3> 
      <input name="title" placeholder="Title" onChange={handleChange} 
value={form.title} /> 
      <input name="owner" placeholder="Owner" onChange={handleChange} 
value={form.owner} /> 
      <input name="effort" type="number" placeholder="Effort" 
onChange={handleChange} value={form.effort} /> 
      <input name="due" type="date" onChange={handleChange} value={form.due} /> 
      <button>Add</button> 
    </form> 
  ); 
} 
export default IssueAdd; 