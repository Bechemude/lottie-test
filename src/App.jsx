import './App.css'

import Lottie from "lottie-react";
import typingAnimation from "./assets/133564-typing.json";

function App() {

  return (
    <div className="App">
      <Lottie animationData={typingAnimation} />
    </div>
  )
}

export default App
