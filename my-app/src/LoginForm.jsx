import React, { useState } from "react";

export function Login({ loginCompleted }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.log("Login ok");
        setError(data.error || "Blogi įvedami vartotojo duomenys");
        return;
      }
      if (data.token) {
        loginCompleted(data.token);
      } else {
        setError("Blogi įvedami vartotojo duomenys");
      }
    } catch (err) {
      console.log("Bad login");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="bad-info">{error}</div>}
        <input
          type="text"
          value={username}
          placeholder="Your Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Yuor password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
