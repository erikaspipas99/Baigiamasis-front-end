import React, { useEffect, useState } from "react";

export const MachineForm = () => {
  const [machine, setMachine] = useState({
    _id: "",
    adresses: "",
    ip: "",
  });
  const [machineList, setMachineList] = useState([]);

  const fetchMachines = async () => {
    try {
      const result = await fetch("/machine");
      if (!result.ok) {
        result.send("Failed to get fetch info");
      }
      const data = await result.json();
      setMachineList(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchMachines();
  }, []);
};

export const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/machine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(machine),
    });
    if (!response.ok) {
      console.log("Bad info");
      return;
    }
    const data = await response.json();
    console.log("Done");
  } catch (err) {
    console.log(err);
  }
};
const handleChange = (e) => {
  setMachine({ ...machine, [e.target.name]: e.target.value });
};

return (
  <div>
    <h2>New Create Machine</h2>
    <form onSubmit={handleSubmit}>
      <input
        _id="text"
        adresses="name"
        value={machine.adresses}
        onChange={handleChange}
        placeholder="Machine name"
      />
      <button type="submit">ADD machine</button>
    </form>
  </div>
);
