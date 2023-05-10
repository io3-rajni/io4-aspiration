import "./App.css";
import Button from "./component/Button";
import Navbar from "./component/Navbar/index";

function App() {
  return (
    <div className="App">
      <div>
        <h1>REACT PRACTICE </h1>
      </div>
      <Navbar />
      <div className="btn">
        <Button btnName="search" />
        <Button btnName="click" />
        <Button btnName="submit" />
        <Button btnName="enter" />
        <Button btnName="login" />
      </div>
    </div>
  );
}

export default App;
