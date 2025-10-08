import React, { useEffect, useState } from "react";
import { updateMachine } from "./UpdateMachine";
import { deleteMachine } from "./DeleteMachin";

export const MachineForm = () => {
  const [machine, setMachine] = useState({
    id: "",
    adresses: "",
    ip: "",
  });
  const [machineList, setMachineList] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
      setMachine({ id: "", adresses: "", ip: "" });
      setShowModal(false);
      fetchMachines();
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setMachine({ ...machine, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (machine) => {
    const updateMachineInfo = {
      ...machine,
      adresses: prompt("New mechine addresses", machine.adresses),
      ip: prompt("New mechine IP", machine.ip),
    };
    const result = await updateMachine(updateMachineInfo);
    if (result) {
      fetchMachines();
    }
  };

  const handleDelete = async (_id) => {
    if (!window.confirm("Are you sure delete this machine?"));
    const result = await deleteMachine(_id);
    if (result) {
      fetchMachines();
    }
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
            <button type="submit">ADD machine</button>
            <button type="button" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </form>
        </div>
      )}
      <h2>Machine List</h2>
      <ul>
        {machineList.map((machines) => {
          return (
            <li key={machines._id}>
              <strong>ID:</strong> {machines.id}
              <strong> Name:</strong> {machines.adresses}
              <strong> IP:</strong> {machines.ip}
              <button onClick={() => handleUpdate(machines)}>Update</button>
              <button onClick={() => handleDelete(machines._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
