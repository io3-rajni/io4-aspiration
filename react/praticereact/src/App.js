import "./App.css";
import Navbar from "./component/Navbar/index";
import MainContent from "./component/MainContent/main";
import Button from "./component/Button";

function App() {
  return (
    <>
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
        <MainContent />
      </div>
    </>
  );
}

export default App;
