import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MachineForm } from "./MachineForm";
import { MachineList } from "./MachineList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <>
      <MachineForm></MachineForm>
      <MachineList></MachineList>
    </>
  );
}

export default App;
