# Baigiamasis-front-end

Local Setup 
Requirements:
Visual Studio Code;
node.js 18+;
MongoSV atlas;
(make sure the back-end is running on http://localhost:3000);
Libary:
react: 19.1.1,
jwt-decode: 4.0.0;

Project Setup:
git clone https://github.com/erikaspipas99/Baigiamasis-front-end
cd baigiamas darbas/my-app
npm install
npm run dev

Authentication Checks
In login (/auth/login), JWT is saved to localStorage;
Token is deoceded using jwt-docedo to extra role and region;
This token is the attached to all requests is the Authorization header; 

Features:
Login
Accepsts "username" and "password",
Pn success, stories JWT and redirect to mechine list.

Machine List
Fetches all machines(filtered by region if user is not admin)
Display filter by: (ID, Name, IP, Region)
Buttons to: (Update machine, Delete machine, show info).

Machine Create
Modal form for creatind new machine: (ID, Address, IP, Region)
Triggers refresh on submnit

File structure:
-| App.jsx // Root component
-| MachineForm.jsx // Machine created model
-| MachineList.jsx // Machine list info, filter
-| LoginForm.jsx // User login form
-| DeleteMachine.jsx // Delete machine method
-| UpdateMachine.jsx // Update machine method
-| app.css // Styles




