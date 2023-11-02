// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { getData } from "./data.js";
import styles from "./table.module.css";
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
    <div className={styles.table}>
      <button className={styles.button} onClick={() => setFilterProperty("")}>
        All animals
      </button>
      <button
        className={styles.button}
        onClick={() => setFilterProperty("dog")}
      >
        Dogs
      </button>
      <button
        className={styles.button}
        onClick={() => setFilterProperty("cat")}
      >
        Cats
      </button>
      <table>
        <thead>
          <tr>
            <th>
              <button
                className={styles.buttonSort}
                onClick={() => setSortColumn("name")}
              >
                Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </button>
            </th>
            <th>
              <button
                className={styles.buttonSort}
                onClick={() => setSortColumn("trait")}
              >
                Trait
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </button>
            </th>
            <th>
              <button
                className={styles.buttonSort}
                onClick={() => setSortColumn("species")}
              >
                Species
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </button>
            </th>
            <th>
              <button
                className={styles.buttonSort}
                onClick={() => setSortColumn("age")}
              >
                Age
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </button>
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
