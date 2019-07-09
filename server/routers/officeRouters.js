import express from "express";
import {
  getAllOffices,
  createOffice,
  getSpecificOffice
} from "../controllers/officeControllers";

const officesRoutes = express.Router();

//Get all offices
officesRoutes.get("/offices", getAllOffices);

//create a new office
officesRoutes.post("/offices", createOffice);

//Get a specific office
officesRoutes.get("/offices/:id", getSpecificOffice);

export default officesRoutes;
