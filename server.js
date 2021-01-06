import express from "express";
import apiRoutes from "./routes/api-routes.js";
import mongoose from "mongoose";

// App
const app = express();

// Routers
app.use(apiRoutes);

// Start app listening
const PORT = process.env.PORT || 3000;
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
