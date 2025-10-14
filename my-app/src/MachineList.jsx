import React, { useState, useEffect } from "react";
import { updateMachine } from "./UpdateMachine";
import { deleteMachine } from "./DeleteMachin";

export const MachineList = () => {
  const [machineList, setMachineList] = useState([]);
  const [filterId, setFilterId] = useState("");
  const [filterName, setFilterName] = useState("");
  const [filterIp, setFilterIp] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const fetchMachines = async () => {
    try {
      const token = localStorage.getItem("token");
      const result = await fetch("http://localhost:3000/machine", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!result.ok) {
        console.log("Failed to fetch machines");
        return;
      }
      const data = await result.json();
      setMachineList(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchMachines();
  }, [machineList]);

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

  const filterMachines = Array.isArray(machineList)
    ? machineList.filter(
        (m) =>
          m.id.toLowerCase().includes(filterId.toLowerCase()) &&
          m.adresses.toLowerCase().includes(filterName.toLowerCase()) &&
          m.ip.toLowerCase().includes(filterIp.toLowerCase()) &&
          m.region.toLowerCase().includes(filterRegion.toLowerCase())
      )
    : [];

  return (
    <div className="machine-list">
      <h2>Machine List</h2>
      <button onClick={() => setShowFilter(true)}>Filter</button>
      {showFilter && (
        <div>
          <input
            type="text"
            placeholder="Filter by ID"
            value={filterId}
            onChange={(e) => setFilterId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Name"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by IP"
            value={filterIp}
            onChange={(e) => setFilterIp(e.target.value)}
          />
          <input
            type="text"
            placeholder="Filter by Region"
            value={filterRegion}
            onChange={(e) => setFilterRegion(e.target.value)}
          />
          <button onClick={() => setShowFilter(false)}>Search</button>
          <button
            onClick={() => {
              setFilterId("");
              setFilterName("");
              setFilterIp("");
              setFilterRegion("");
              setShowFilter(false);
            }}
          ></button>
          <button type="button" onClick={() => setShowFilter(false)}>
            Cancel
          </button>
        </div>
      )}
      <ul>
        {filterMachines.map((machines) => {
          return (
            <li key={machines._id}>
              <strong>ID:</strong> {machines.id}
              <strong> Name:</strong> {machines.adresses}
              <strong> IP:</strong> {machines.ip}
              <strong> Region:</strong> {machines.region}
              <div className="machine-button">
                <button onClick={() => handleUpdate(machines)}>Update</button>
                <button onClick={() => handleDelete(machines._id)}>
                  Delete
                </button>
                {/* i ateiti info button, rinks duomenis is mysql */}
                <button onClick={() => handleUpdate(machines._id)}>INFO</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
