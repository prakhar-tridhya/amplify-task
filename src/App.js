import React, { useState } from 'react';
import './App.css';

function App() {
  const [helloResponse, setHelloResponse] = useState('');
  const [dbResponse, setDbResponse] = useState('');

  const callHelloService = async () => {
    try {
      // This will be your ALB endpoint
      const response = await fetch('http://your-alb-endpoint/hello');
      const data = await response.text();
      setHelloResponse(data);
    } catch (error) {
      console.error('Error calling hello service:', error);
    }
  };

  const callDbService = async () => {
    try {
      // This will be your API Gateway endpoint
      const response = await fetch('https://your-api-gateway-endpoint/dev/items');
      const data = await response.json();
      setDbResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error calling DB service:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps Project</h1>
        <div>
          <button onClick={callHelloService}>Call Hello Service</button>
          <pre>{helloResponse}</pre>
        </div>
        <div>
          <button onClick={callDbService}>Call DB Service</button>
          <pre>{dbResponse}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;