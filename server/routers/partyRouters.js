import express from "express";
import multiparty from "connect-multiparty";

import {
  getAllParties,
  getSpecificfParty,
  deleteParty,
  createParty,
  changePartyName
} from "../controllers/partyControllers";

const multipartyMiddleware = multiparty();

const partiesRoutes = express.Router();

//Get all parties
partiesRoutes.get("/parties", getAllParties);

//create a party
partiesRoutes.post("/parties", multipartyMiddleware, createParty);

//Get a specific party
partiesRoutes.get("/parties/:id", getSpecificfParty);

//Change party name
partiesRoutes.patch("/parties/:id/name", changePartyName);

//Delete party
partiesRoutes.delete("/parties/:id", deleteParty);

export default partiesRoutes;
