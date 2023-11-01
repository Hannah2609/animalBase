// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { getData } from "./data.js";
console.log(getData());
import "./App.css";

function App() {
  const animals = getData();
  const [filterProperty, setFilterProperty] = useState("");
  const [sortColumn, setSortColumn] = useState("");

  let filtered = animals;
  if (filterProperty) {
    filtered = animals.filter((ani) => ani.species === filterProperty);
  }

  function sortAnimal(a, b) {
    if (a[sortColumn] > b[sortColumn]) {
      return 1;
    } else {
      return -1;
    }
  }

  filtered.sort(sortAnimal);

  return (
    <div>
      <button onClick={() => setFilterProperty("")}>All animals</button>
      <button onClick={() => setFilterProperty("dog")}>Dogs</button>
      <button onClick={() => setFilterProperty("cat")}>Cats</button>

      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => setSortColumn("name")}>Name</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("trait")}>Trait</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("species")}>Species</button>
            </th>
            <th>
              <button onClick={() => setSortColumn("age")}>Age</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ani) => (
            <tr>
              <td>{ani.name}</td>
              <td>{ani.trait}</td>
              <td>{ani.species}</td>
              <td>{ani.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
