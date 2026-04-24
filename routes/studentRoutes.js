const express = require("express");
const router = express.Router();

// Temporary storage (Simulation mode)
let students = [
    { id: "65dcf194", name: "Priyal", email: "priyal@cu.com", course: "BE-CSE" }
];

// 1. CREATE (POST)
router.post("/", (req, res) => {
    const newData = { id: "65dcf" + Math.floor(Math.random()*1000), ...req.body };
    students.push(newData);
    res.status(201).json(newData);
});

// 2. READ ALL (GET)
router.get("/", (req, res) => {
    res.json(students);
});

// 3. UPDATE (PUT) - Ye wala add kiya hai
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const index = students.findIndex(s => s.id === id);
    if (index !== -1) {
        students[index] = { ...students[index], ...req.body };
        res.json(students[index]);
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});

// 4. DELETE (DELETE) - Ye wala bhi add kiya hai
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    students = students.filter(s => s.id !== id);
    res.json({ message: "Record Deleted Successfully" });
});

module.exports = router;