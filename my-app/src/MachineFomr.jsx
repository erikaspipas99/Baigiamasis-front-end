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

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/mechine", {
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
