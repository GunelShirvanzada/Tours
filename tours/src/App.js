import React, { useState, useEffect } from "react";
import Tours from "./Tours";
import data from "./fakedata";

function App() {
  const [tours, setTours] = useState([])

  useEffect(() => {
    setTours(data);
  }, []);
  
  const removeTour = (id) => {
    setTours(tours.filter(element => element.id !== id))
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => window.location.reload()}>refresh</button>
        </div>
      </main>
    );
  }

  return <main>
    <Tours tours={ tours } removeTour={removeTour}/>
  </main>;
}

export default App;
