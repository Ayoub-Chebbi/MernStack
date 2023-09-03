import './App.css';
import {Link, Routes,Route } from "react-router-dom"
import CreateAuthor from './Components/CreateAuthor';
import { useEffect, useState } from 'react';
import axios from "axios"
import Update from './Components/Update';

function App() {

  const [author, setAllauthor] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/api/author")
      .then(res=>{
        console.log(res.data)
        setAllauthor(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
  },[])

  const handleClick = (authorId) => {
    axios
      .delete(`http://localhost:5000/api/author/${authorId}`)
      .then((response) => {
        console.log("success deleting author");
        console.log(response);
        const filteredAuthors = author.filter((author) => {
          return author._id !== authorId;
        });
        setAllauthor(filteredAuthors);
      })
      .catch((err) => {
        console.log("error deleting author", err.response);
      });
  };
  

  return (
    <div className="App">
      <h1>Favorite authors</h1>
      <Link to="/new">Add New Author</Link>

      
        <Routes>
          <Route path="/new" element={<CreateAuthor />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      
      <p>We have quotes by :</p>

      {author.map((author)=>{
        return <div>
          <table border="2px">
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
          <tr>
            <th>{author.Name}</th>
            <th>
              <Link to={"/edit/" + author._id}>Edit</Link>
              <button onClick={()=>handleClick(author._id)}>delete</button>
            </th>
          </tr>
          </table>
        </div>
      })}
    </div>
  );
}

export default App;
