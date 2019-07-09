import express from "express";
import partiesRoutes from "./server/routers/partyRouters";
import usersRoutes from "./server/routers/usersRouter";
import officesRoutes from "./server/routers/officeRouters";

const app = express();
app.use(express.json());

app.use("/api/v1", partiesRoutes);
app.use("/api/v1", officesRoutes);
app.use("/api/v1", usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running");
});

export default app;
