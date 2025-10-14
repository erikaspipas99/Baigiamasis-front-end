import { useEffect, useState } from "react";
import "./App.css";
import { MachineForm } from "./MachineForm";
import { MachineList } from "./MachineList";
import { Login } from "./LoginForm";
import { jwtDecode } from "jwt-decode";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(null);
  const [region, setRegion] = useState(null);
  const [machineList, setMachineList] = useState(0);

  //   JUNGIMASIS SU MYSQL IMONES
  // useEffect(() => {
  //   fetch("http://localhost:3001/data")
  //   .then((res) => res.json()).
  //   then((data) => data.json());
  // }, []);

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken);
      const decode = jwtDecode(savedToken);
      setRole(decode.role);
      setRegion(decode.region);
    }
  }, []);

  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    const decode = jwtDecode(newToken);
    setRole(decode.role);
    setRegion(decode.region);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(undefined);
  };

  const postNewMachine = () => {
    setMachineList((m) => m + 1);
  };

  if (!token) {
    return <Login loginCompleted={handleLogin} />;
  }

  return (
    <>
      <button onClick={handleLogout}>Atsijungti</button>
      {role === "admin" && <MachineForm addNewMachine={postNewMachine} />}
      <MachineList machineList={machineList}></MachineList>
    </>
  );
}

export default App;
