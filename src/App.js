import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App" style={{marginTop:220}}>
      <h1>Parking</h1>
      <p>Type License plate</p>
      <input  style={{width:300}}></input>
      <br></br>
      <button class='btn btn-success' style={{width:150}}>Entrance</button>
        &nbsp;
        &nbsp;
      <button class='btn btn-danger' style={{width:150}}> Exit</button>
      &nbsp;
        &nbsp;
        <button class='btn btn-primary' style={{width:150}}> More options</button>

    </div>
  );
}

export default App;
