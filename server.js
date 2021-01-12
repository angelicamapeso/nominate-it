import express from "express";
import apiRoutes from "./routes/api-routes.js";
import mongoose from "mongoose";
import * as path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// App
const app = express();

// JSON-parsing middle-ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routers
app.use("/api", apiRoutes);
// to send built react pages
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

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
