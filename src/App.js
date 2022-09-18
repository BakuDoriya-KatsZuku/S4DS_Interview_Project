import "./styles.css";
import { useState } from "react";

export default function App() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState([]);

  const Shibe = (e) => {
    e.preventDefault();

    fetch(`https://shibe.online/api/shibes?count=${q}&urls=true&httpsUrls=true`)
      .then((response) => response.json())
      .then((data) => setResult(data));
  };
  return (
    <div className="App">
      <h1>S4DS Interview Project</h1>
      <h2>Number of images</h2>
      <form onSubmit={Shibe}>
        <label>
          Number of images :
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            name="name"
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {q}
      <ul>
        {result.map((record, i) => (
          <img key={i} src={result[i]} width={50} />
        ))}
      </ul>
    </div>
  );
}
