import { useState } from "react";
import "./App.css";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cabs, setCabs] = useState([]);

  const handleCompare = async () => {
    const response = await fetch("http://localhost:5000/compare", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ origin, destination }),
    });

    if (response.ok) {
      const data = await response.json();
      setCabs(data);
    } else {
      console.error("Failed to fetch cab data");
    }
  };

  return (
    <div className="App">
      <h1>Cab Compare</h1>
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleCompare}>Compare Cabs</button>

      {cabs.length > 0 && (
        <div>
          <h2>Comparison Results:</h2>
          <table>
            <thead>
              <tr>
                <th>Service</th>
                <th>Price ($)</th>
                <th>Distance (miles)</th>
              </tr>
            </thead>
            <tbody>
              {cabs.map((cab, index) => (
                <tr key={index}>
                  <td>{cab.service}</td>
                  <td>{cab.price}</td>
                  <td>{cab.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
