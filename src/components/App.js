import react from "react";
import MiComponente from "./components/MiComponente";
import MiComponente2 from "./components/MiComponente2";
import MiHook from "./components/MiHook";
import ListasHooks from "./components/ListasHooks";

function App() {
  return (
    <div className="App">
      <h1>Hola Mundo!</h1>
      <br></br>
      <MiComponente></MiComponente>
      <MiComponente2></MiComponente2>
      <MiHook></MiHook>
      <ListasHooks></ListasHooks>
    </div>
  );
}

export default App;
