import { useEffect, useState } from "react";
import "./App.css";
import { MachineForm } from "./MachineForm";
import { MachineList } from "./MachineList";
import { Login } from "./LoginForm";
import { jwtDecode } from "jwt-decode";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      const decode = jwtDecode(savedToken);
      setRole(decode.role);
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    const decode = jwtDecode(newToken);
    setRole(decode.role);
  };
  const handleLogout = () => {
    localStorage.removeItem("tekon");
    setToken(undefined);
  };

  if (!token) {
    return <Login loginCompleted={handleLogin} />;
  }

  return (
    <>
      <button onClick={handleLogout}>Atsijungti</button>
      {role === "admin" && <MachineForm />}
      <MachineList></MachineList>
    </>
  );
}

export default App;
