import React from "react";

export const deleteMachine = async (_id) => {
  try {
    const response = await fetch("http://localhost:3000/machine", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(machine),
    });
    if (!response.ok) {
      console.log("Failed to delete machine");
      return;
    }
    const data = await response.json();
    console.log("Delete done");
    return data;
  } catch (err) {
    console.log("Delete failed", err);
  }
};
