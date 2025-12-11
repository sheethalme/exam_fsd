import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample route to test server
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Get All Movies
app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running at http://localhost:5000");
});
