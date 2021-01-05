import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("It's ALIVE!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening at: localhost:${PORT}`);
});
