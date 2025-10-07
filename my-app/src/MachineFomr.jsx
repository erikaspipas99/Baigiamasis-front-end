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
