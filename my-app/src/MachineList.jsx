<div>
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
</div>;

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
