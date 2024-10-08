// server/src/index.js
import express from "express";
import axios from "axios";
import cors from "cors";



const app = express();

app.use(cors());

app.get("/api/pokemon", async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0");
    res.json(response.data.results);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send("Error al obtener los datos.");
  }
});

app.listen(3000, () => {
  console.log('Server is listening in port 3000');
});
