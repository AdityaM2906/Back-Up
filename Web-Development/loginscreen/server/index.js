import express from "express";

const app = express();
const port = 5173;

app.listen(port, () => {
  console.log(`Server is live at port ${port}`);
});
