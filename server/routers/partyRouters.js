import express from "express";

partiesRoutes = express.Router();

//Get all parties
partiesRoutes.get("/parties");

//create a party
partiesRoutes.post("/parties");

//Get a specific party
partiesRoutes.get("/parties/:id");

//Change party name
partiesRoutes.patch("/parties/:id/name");

//Delete party
partiesRoutes.delete("/parties/:id", (req, res) => {});

export default partiesRoutes;
