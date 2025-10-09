import React from "react";

export const updateMachine = async (machine) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:3000/machine", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(machine),
    });
    if (!response.ok) {
      console.log("Failed update machine");
      return;
    }

    const data = await response.json();
    console.log("Update done", data);
    return data;
  } catch (err) {
    console.log("Update failed", err);
  }
};
