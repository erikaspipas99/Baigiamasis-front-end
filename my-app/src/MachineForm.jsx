import React, { useEffect, useState } from "react";

export const MachineForm = () => {
  const [machine, setMachine] = useState({
    id: "",
    adresses: "",
    ip: "",
    region: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [machineList, setMachineList] = useState([]);

  const fetchMachines = async () => {
    try {
      const result = await fetch("http://localhost:3000/machine");
      if (!result.ok) {
        console.log("Failed to get fetch info");
        return;
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

  const handleSubmit = async (e) => {
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
      setMachine({ id: "", adresses: "", ip: "", region: "" });
      setShowModal(false);
      fetchMachines();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setMachine({ ...machine, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Machine Management</h2>
      <button onClick={() => setShowModal(true)}>New machine</button>
      {showModal && (
        <div>
          <h2>New Create Machine</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              value={machine.id}
              onChange={handleChange}
              placeholder="Machine ID"
            />
            <input
              type="text"
              name="adresses"
              value={machine.adresses}
              onChange={handleChange}
              placeholder="Machine name"
            />
            <input
              type="text"
              name="ip"
              value={machine.ip}
              onChange={handleChange}
              placeholder="IP address"
            />
            <select
              name="region"
              value={machine.region}
              onChange={handleChange}
            >
              <option value="">Region</option>
              <option value="Kaunas">Kaunas</option>
              <option value="Žemaitija">Žemaitija</option>
            </select>
            <button type="submit">ADD machine</button>
            <button type="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
