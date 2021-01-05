import express from "express";
import apiRoutes from "./routes/api-routes.js";

const app = express();

// Routers
app.use(apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening at: localhost:${PORT}`);
});
