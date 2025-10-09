import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MachineForm } from "./MachineForm";
import { MachineList } from "./MachineList";
import { Login } from "./LoginForm";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  if (!token) {
    return <Login onLoginSuccess={handleLogin} />;
  }

  return (
    <>
      <MachineForm></MachineForm>
      <MachineList></MachineList>
    </>
  );
}

export default App;
