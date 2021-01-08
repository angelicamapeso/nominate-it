import express from "express";
import apiRoutes from "./routes/api-routes.js";
import htmlRoutes from "./routes/html-routes.js";
import mongoose from "mongoose";

// App
const app = express();

// JSON-parsing middle-ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routers
app.use(htmlRoutes);
app.use("/api", apiRoutes);

// Start app listening
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/top5db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App listening at: localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error(err);
  });
