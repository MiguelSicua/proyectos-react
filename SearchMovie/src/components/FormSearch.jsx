import { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";


const FormSearch = () => {

    const [title, setTitle] = useState("");
    const {setQuery, error} = useContext(DataContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setQuery(title);
        //console.log("Titlte: ", title);
        setQuery(title);
        
    }

    return (
      <div className="form-search">
        <h2>Old Movies finder</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title movie"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input type="submit" value="Search" />
        </form>
        <br />
        {error && (
          <div className="error">
            <h3>The movie doesn't exist</h3>
          </div>
        )}
      </div>
    );
}
 
export default FormSearch;