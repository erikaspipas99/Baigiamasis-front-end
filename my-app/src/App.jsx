import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MachineForm } from "./MachineForm";
import { MachineList } from "./MachineList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MachineForm></MachineForm>
      <MachineList></MachineList>
    </>
  );
}

export default App;
