import express from "express";

officesRoutes = express.Router();

//Get all offices
officesRoutes.get("/offices", (req, res) => {});

//create a new office
officesRoutes.post("/offices", (req, res) => {});

//Get a specific office
officesRoutes.get("/offices/:id", (req, res) => {});

export default officesRoutes;
