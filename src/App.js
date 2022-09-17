import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <h1>{process.env.NODE_ENV}</h1>
      <h2>{process.env.REACT_APP_API_URL}</h2>
      {console.log(process.env.REACT_APP_API_URL)}
    </div>
  );
}

export default App;
