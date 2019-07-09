import express from "express";

const usersRoutes = express.Router();

//log in
usersRoutes.post("/auth/signin", (req, res) => {});

//register
usersRoutes.post("/auth/signup", (req, res) => {});

export default usersRoutes;
