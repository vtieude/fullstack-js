This project actually contains two projects:
- A React.js application (i.e., the frontend SPA)
- A dummy backend API to which the React app can "talk" (to send + fetch data)

You must run "npm install" in both project folders.

Thereafter, you can start the backend API server via "npm start" (inside the "backend-api" folder).
The React app dev server is then also started via "npm start" (though inside the "react-frontend" folder).

You MUST have both servers (backend + frontend) up and running for the projects to work.

In real project we should using .env or something like this to protect some sensitive data. (connection string MongoDB, account api server ...).
But this is test project so I push directly into code, this is knowledge issue.

This test project includes CRUD functionality for a contact book. It is designed for a single user and is easy to use.

