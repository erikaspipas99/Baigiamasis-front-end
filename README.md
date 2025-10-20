##  Features

- 🔐 Authentication
- 🖥️ Machine List with filtering
- ➕ Create/Update/Delete machines
- ✅ JWT-based authorization

## 🧰 Tech Stack

- Front-end: React (v19.1.1)
- Auth: JWT + jwt-decode (v4.0.0)
- Back-end: Node.js, Express
- Database: MongoDB Atlas

##  Prerequisites

Make sure you have the following installed:
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js 18+](https://nodejs.org/)
- MongoDB Atlas account (or local MongoDB)

##  Setup Instructions
```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name
# 2. Navigate to the project directory
cd baigiamas darbas/my-app
# 3. Install dependencies
npm install
# 4. Start the development server
npm run dev

my-app/
├── App.jsx              # Root component
├── MachineForm.jsx      # Modal form to create machines
├── MachineList.jsx      # Shows and filters machine list
├── LoginForm.jsx        # Handles user login
├── DeleteMachine.jsx    # Handles deletion of machines
├── UpdateMachine.jsx    # Handles updates
├── app.css              # Styling
