import express from "express";

usersRoutes = express.Router();

//log in
usersRoutes.post("/auth/signin", (req, res) => {});

//register
usersRoutes.post("/auth/signup", (req, res) => {});

export default usersRoutes;
