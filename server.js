const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// Simulation: Bina DB ke bhi "Connected" dikhayega
console.log("Database Connected ✅"); 

const studentRoutes = require("./routes/studentRoutes");
app.use("/api/students", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000 🚀"));