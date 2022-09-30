import { ReactP5Wrapper } from "react-p5-wrapper";
import Sketch from "./components/Sketch";

function App() {
  return (
    <div className="App">
      <ReactP5Wrapper sketch={Sketch} />
    </div>
  );
}

export default App;
